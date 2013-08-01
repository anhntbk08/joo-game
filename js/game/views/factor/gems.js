Gem = BaseFactor.extend({
    setupDomObject: function(config) {
        this.inheritedCSSClasses = false;
        this._super(config);
        this.__state = "unactive";
        this.__setGem(config.type, config.x, config.y);
    },
    toHtml: function() {
        return "<span draggable='false'> </span>";
    },
    onClick: function(e) {
        var _self = this;
        JOOUtils.generateEvent("GemSelected", {
            gem: _self,
            state: this.__state
        });
        
    },
    addClassSelected: function(){
        if (this.__state == "unactive") {
            this.__state = "active";
            this.access().addClass("joo-gem-select");          
        }
        else if (this.__state == "active") {       
        }
    },
    onMouseOver: function(e) {

    },
    __setGem: function(gemType, x, y) {
        /*
         * at the moment we use transform with animation
         * but the shorcoming of this is alway relative position 
         * to avoid redrawing DOM element ==> more smooth than
         * transition top , left
         * 
         */
        this.type = gemType;
        this.relativeTop = 0; // this for saving top position
        this.relativeLeft = 0; // this for saving left position
        
        var gemsProperties = Models.game.gems;
        this.corX = parseInt(x/(gemsProperties.width - Models.game.margin));
        this.corY = parseInt(y/(gemsProperties.width - Models.game.margin));
        this.access().addClass("joo-gem-" + gemType).css({
            "background": "url(" + Models.resource.texture[Models.gemType[gemType]] + ") -4px -4px no-repeat"
        });
    },
    stopAnimation: function() {
        this.__state = "unactive";
        this.access().removeClass("joo-gem-select");       
        clearInterval(this.animationInterval);
    },
    removeFromStage: function(e) {
        //this.access().css("display", "none");       
        AnimationHelper.animate({
            type: "stableAnimations",
            actionName: "scaleObjectOnly",
            arg: {
                originx: "50",
                originy: "50",
                posx: this.relativeTop,
                posy: this.relativeLeft,
                scalex: "0",
                scaley: "0",
                scalez: "1",
                soundname: null,
                time: "1000"
            },
            obj: this.access()
        });

        var _self = this;
        setTimeout(function(){
            _self.access().remove(); 
        }, 1100);
    },
    runSwapAnimation: function(e) {
        var _self = this;
        this.stopAnimation();
        this.relativeTop += e.x; // this for saving top position
        this.relativeLeft += e.y;
        AnimationHelper.animate({ 
            type: "stableAnimations",
            actionName: "moveSmooth",
            arg: {
                posx: this.relativeTop,
                posy: this.relativeLeft,
                posz: "0",
                soundname: null,
                time: Models.animation.swapAnimation.time,
                count:1,
                revertAfterAnimation : true,
                oldPosition: {
                    x: this.relativeTop - e.x,
                    y: this.relativeLeft - e.y
                }
            },
            obj: _self.access()
        });
        (function(_self, e){
             setTimeout(function(){
                 _self.relativeTop -= e.x; 
                 _self.relativeLeft -= e.y;
            },Models.animation.swapAnimation.time + 10);            
        })(_self, e);         
    },
    runMoveToNewPosition: function(e) {
        var _self = this;
        this.stopAnimation();
        this.relativeTop += e.x; // this for saving top position
        this.relativeLeft += e.y;
        AnimationHelper.animate({
            type: "stableAnimations",
            actionName: "moveNewPosition",
            arg: {
                posx: this.relativeTop,
                posy: this.relativeLeft,
                posz: "0",
                soundname: null,
                time: 300,
                count:1
            },
            obj: _self.access()
        });      
    }
   
}).implement(ObserverInterface);