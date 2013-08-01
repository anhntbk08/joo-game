LandingState = Stage.extend({
    setupDomObject: function(options) {
        options = options || {};
        this.name = "LandingState";
        this._super(options);
        this.renderUIComposition();
        //this.registerObserver();
        window.tmp = this;
    },
    preRender: function() {
        this.currentGem = null;
        this.mapGems = [];
        this.listSpriteEffect = [];
        for (var ii = 0; ii < Models.game.gems.map.x; ii++) {
            this.mapGems[ii] = [];
            this.listSpriteEffect[ii] = [];
        }

        JOOUtils.generateEvent("LandingStagePreRender");
    },
    onPageStartShow: function() {
        setTimeout(function() {
            JOOUtils.generateEvent("CheckRecord");
        }, Models.delayTime.checkScoreWhenStart);
    },
    initUI: function(gemsMap) {
        this.__initGems(gemsMap);
        this.__initBricks(gemsMap);
    },
    __initGems: function(mapGems) {
        var gemsProperties = Models.game.gems;
        for (var i = 0; i < gemsProperties.gemsNumber; i++) {
            var posX = (i % gemsProperties.map.x);
            var posY = parseInt(i / gemsProperties.map.x);
            var gemType = mapGems[posX][posY];
            var gem = new Gem({
                type: gemType,
                x: posX * (gemsProperties.width - Models.game.margin),
                y: posY * (gemsProperties.height - Models.game.margin)
            });
            this.mapGems[posX][posY] = gem;
            this.wrapperGems.addChild(gem);
        }
        window.mapGems = this.mapGems;
    },
    __initBricks: function(mapGems) {
        var gemsProperties = Models.game.gems;
        for (var i = 0; i < gemsProperties.gemsNumber; i++) {
            var posX = (i % gemsProperties.map.x);
            var posY = parseInt(i / gemsProperties.map.x);
            var gem = new Brick({
                x: posX * (gemsProperties.width - Models.game.margin),
                y: posY * (gemsProperties.height - Models.game.margin)
            });
            this.wrapperBricks.addChild(gem);
        }
    },
    
    remarkGemsMap: function(currentGem, newGem) {
        var temp = this.mapGems[currentGem.corX][currentGem.corY];
        this.mapGems[currentGem.corX][currentGem.corY] = this.mapGems[newGem.corX][newGem.corY];
        this.mapGems[newGem.corX][newGem.corY] = temp;

        temp = currentGem.corX;
        currentGem.corX = newGem.corX;
        newGem.corX = temp;

        temp = currentGem.corY;
        currentGem.corY = newGem.corY;
        newGem.corY = temp;
    },
    onRemoveGemFromStage: function(listArray) {
        var count = -1;
        for (var ii in listArray) {
            if (listArray[ii].length === 0)
                continue;
            var startGem = listArray[ii].startGem;
            var endGem = listArray[ii].endGem;
            count++;
            for (var jj = startGem.x; jj <= endGem.x; jj++) {
                for (var kk = startGem.y; kk <= endGem.y; kk++) {
                    var _self = this;
                    (function(jj, kk, ii) {
                        setTimeout(function() {
                            if (_self.mapGems[jj][kk]) {
                                _self.mapGems[jj][kk].removeFromStage();
                                _self.mapGems[jj][kk] = null;
                            }
                            var efA = _self.__generateDisappearEffect(jj, kk);
                            efA.resume();
                            (function(efA) {
                                setTimeout(function() {
                                    _self.__regenarateGem(new Array(listArray[ii]));
                                    efA.remove();
                                }, 500);
                            })(efA);
                        }, 2500 * count);
                    })(jj, kk, ii);
                }
            }
            setTimeout(function() {
                JOOUtils.generateEvent("CheckRecord");
            }, 4500);
        }
        var _self = this;

    },
    __generateDisappearEffect: function(corX, corY) {
        var gemsProperties = Models.game.gems;
        var effect = JOOUtils.generateIdEffect(jQuery.extend(true, {}, Models.effect.disappear));
        var posX = corX;
        var posY = corY;
        
        effect.FrameRect.left = (this.wrapperGems.access().offset().left + posX * (gemsProperties.width - Models.game.margin) - 4) + "px";
        effect.FrameRect.top = (this.wrapperGems.access().offset().top + posY * (gemsProperties.height - Models.game.margin) - 4) + "px";

        var ef = madeSpriteSVG(effect);
        ef.stop();
        return ef;
    },
    __regenarateGem: function() {
        for (var ii in this.mapGems) {
            var jj = 0;
            do {
                for (jj; jj < this.mapGems[ii].length - 1; jj++) {
                    if (this.mapGems[ii][jj] == null)
                        break;
                }
                var maxCorY = jj;
                var numberGemNeedGenerate = 0;
                while (this.mapGems[ii][jj] == null && jj < this.mapGems[ii].length) {
                    numberGemNeedGenerate++;
                    jj++;
                }
                if (numberGemNeedGenerate == 0) {
                    break;
                    //continue;
                }
                if (numberGemNeedGenerate == 1) {
                    for (var kk = maxCorY; kk >= 1; kk--) {
                        this.mapGems[ii][kk] = this.mapGems[ii][kk - 1];
                        this.mapGems[ii][kk].corX = ii;
                        this.mapGems[ii][kk].corY = kk;
                        JOOUtils.generateEvent("UpdateGemMap", {
                            x: ii,
                            y: kk,
                            type: this.mapGems[ii][kk].type
                        });
                    }
                }
                else {
                    var jj = maxCorY;
                    while (this.mapGems[ii][jj] == null && jj < this.mapGems[ii].length) {
                        maxCorY = jj;
                        jj++;
                    }
                    for (var kk = jj - 1; kk >= numberGemNeedGenerate; kk--) {
                        this.mapGems[ii][kk] = this.mapGems[ii][kk - numberGemNeedGenerate];
                        this.mapGems[ii][kk].corX = ii;
                        this.mapGems[ii][kk].corY = kk;
                        JOOUtils.generateEvent("UpdateGemMap", {
                            x: ii,
                            y: kk,
                            type: this.mapGems[ii][kk].type
                        });
                    }
                }

                for (jj = 0; jj < numberGemNeedGenerate; jj++) {
                    var result = this.__generateAGem(ii, jj, numberGemNeedGenerate);
                    this.mapGems[ii][jj] = result.gem;
                    JOOUtils.generateEvent("UpdateGemMap", {
                        x: ii,
                        y: jj,
                        type: result.type
                    });
                    this.wrapperGems.addChild(result.gem);
                }

                for (jj = maxCorY; jj >= 0; jj--) {
                    if (maxCorY >= this.mapGems[ii][jj].corY) {
                        var _self = this;
                        //(function(_self.mapGems[ii][jj], numberGemNeedGenerate) {
                        if (_self.mapGems[ii][jj].corY < 0) {
                            _self.mapGems[ii][jj].corY += numberGemNeedGenerate;
                            (function(ii, jj, numberGemNeedGenerate) {
                                setTimeout(function() {
                                    _self.mapGems[ii][jj].runMoveToNewPosition({
                                        x: 0,
                                        y: (Models.game.gems.height - Models.game.margin)* (numberGemNeedGenerate)
                                    });
                                }, 50);
                            })(ii, jj, numberGemNeedGenerate);
                        }
                        else {
                            _self.mapGems[ii][jj].runMoveToNewPosition({
                                x: 0,
                                y: (Models.game.gems.height - Models.game.margin) * (numberGemNeedGenerate)
                            });
                        }
                    }
                }
                jj = parseInt(maxCorY) + 1;
            } while (true);
        }
    },
    __generateAGem: function(posX, posY, numberGemNeedGenerate) {
        var length = JOOUtils.getElementNumber(Models.resource.texture) - 1;
        var gemsProperties = Models.game.gems;
        var gemType = Math.floor(Math.random() * length)+1;
        var gem = new Gem({
            type: gemType,
            x: posX * (gemsProperties.width-Models.game.margin), 
            y: -(numberGemNeedGenerate - posY) * (gemsProperties.height-Models.game.margin) 
        });
        return {
            gem: gem,
            type: gemType
        };
    }
}).implement(CompositionRenderInterface);