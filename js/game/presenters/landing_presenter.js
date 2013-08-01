LandingPresenter = BasePresenter.extend({
    initValue: function(){
        this.mapGems = [];
        for (var ii = 0; ii <= Models.game.gems.map.x; ii++ ){
            this.mapGems[ii] = [];
        }        
    },
            
    onLandingStagePreRender: function() {
        var length = Object.keys(Models.resource.texture).length - 2;
        var gemsProperties = Models.game.gems;
        
         for (var i = 0; i < gemsProperties.gemsNumber; i++) {
            var gemType = Math.floor(Math.random() * length )+1;
            var posX = (i % gemsProperties.map.x);
            var posY = parseInt(i / gemsProperties.map.x);
            this.mapGems[posX][posY] = gemType;
         }
         
        //this.mapGems = Models.defaultMap;
        this.stage.initUI(this.mapGems);
        var _self = this;

        //setTimeout(function(){
          //  _self.checkCanScoreable(_self.mapGems);
        //},15000);
    },
    onCheckRecord: function(){
        var _self = this;
        var result = _self.__checkAllTable(_self.mapGems);
        
        if (result.result > 0){
            _self.stage.onRemoveGemFromStage(result.gemLines);            
        }
        else{
            var score = this.checkCanScoreable(this.mapGems);
            if (!score.scoreable){
                alert("no more moves, shuffling");
            }
        }        
    },            
    onGemSelected: function(e) {
        window.currentGem = e.gem;
        if (this.__doingAnimation)
            return;
        else{
            e.gem.addClassSelected();
        }
        if (!this.currentGem) {
            this.currentGem = e.gem;
        } else {
            var _self = this;
            if (Math.abs(this.currentGem.corX - e.gem.corX) + Math.abs(this.currentGem.corY - e.gem.corY) === 1) {
                this.__remarkGemsMap(this.currentGem, e.gem);                             
                var isScore = this.__checkScore(this.currentGem, e.gem);                
                if (isScore.message === "Can't swap"){
                    this.currentGem.stopAnimation();
                    this.currentGem = e.gem;
                    return;
                }              
                this.__doingAnimation = true;
                /*
                 * get current relative position of two gems
                 */
                var x = e.gem.access().offset().left - this.currentGem.access().offset().left;
                var y = e.gem.access().offset().top - this.currentGem.access().offset().top;
                if (!isScore.result) {
                    this.currentGem.runSwapAnimation({
                        x: x,
                        y: y
                    });
                    e.gem.runSwapAnimation({
                        x: -x,
                        y: -y
                    });
                    this.__remarkGemsMap(this.currentGem, e.gem);    
                } else {
                     this.currentGem.runMoveToNewPosition({
                        x: x,
                        y: y
                    });
                    e.gem.runMoveToNewPosition({
                        x: -x,
                        y: -y
                    });
                        
                    setTimeout(function(){
                       _self.stage.onRemoveGemFromStage(isScore.gemLines);                       
                    },1000);
                }
                                   
                setTimeout(function() {
                    _self.__doingAnimation = false;
                    _self.currentGem = null;                    
                }, 500);
            }
            else {
                this.currentGem.stopAnimation();
                this.currentGem = e.gem;
            }
        }
    },
            
    __remarkGemsMap: function(currentGem, newGem) {
        var temp = this.mapGems[currentGem.corX][currentGem.corY];
        this.mapGems[currentGem.corX][currentGem.corY] = this.mapGems[newGem.corX][newGem.corY];
        this.mapGems[newGem.corX][newGem.corY] = temp;
        this.stage.remarkGemsMap(currentGem, newGem);        
    },
            
    __checkScore: function(currentGem, newGem) {
        var x1 = parseInt(newGem.corX);
        var x2 = parseInt(currentGem.corX);
        var y1 = parseInt(newGem.corY);
        var y2 = parseInt(currentGem.corY);
        var type1 = this.mapGems[x1][y1];
        var type2 = this.mapGems[x2][y2];
        
        // if same type ==> return
        if ( type1 == type2 )
            return {
                result: false,
                message: "Can't swap"
            };
        
        var hx = [{
                x: -1,
                y: 0
            },{
                x: 0,
                y: -1
            }];
        /*
         *  check for currentGem
         *  
        */ 
       var result = [];
       result.push(this.__checkGemsInLine(this.mapGems, x1, y1, type1, hx[0]));
       result.push(this.__checkGemsInLine(this.mapGems, x1, y1, type1, hx[1]));
       result.push(this.__checkGemsInLine(this.mapGems, x2, y2, type2, hx[0]));
       result.push(this.__checkGemsInLine(this.mapGems, x2, y2, type2, hx[1]));
       
       var sum = 0;
       for (var ii in result){
           sum += result[ii].length;
       }
       return {
           result: sum ,
           gemLines: result
       };
    },
            
    __checkGemsInLine: function(mapGems, startX, startY, type, direction, isNotReserse){
        var hx = [];
        hx[0] = direction;       
        var startGem = endGem = {
            x: startX,
            y: startY
        };

        if (mapGems[startX+hx[0].x] != undefined && mapGems[startX+hx[0].x][startY+hx[0].y] != undefined && mapGems[startX+hx[0].x][startY+hx[0].y] == type)  {             
             var tempX = startX;
             var tempY = startY;
             while (mapGems[tempX] != undefined && mapGems[tempX][tempY] != undefined && mapGems[tempX][tempY] === type  ){
                  tempX += hx[0].x;
                  tempY += hx[0].y;
             }
             var startGem = {
                 x: tempX - hx[0].x,
                 y: tempY - hx[0].y
             };
         }
         if (!isNotReserse){
            hx[1] = {
                x: -direction.x,
                y: -direction.y
            };
            if (mapGems[startX+hx[1].x] && mapGems[startX+hx[1].x][startY+hx[1].y] && mapGems[startX+hx[1].x][startY+hx[1].y] == type)  {
                var tempX = startX;
                var tempY = startY;
                while (mapGems[tempX] && mapGems[tempX][tempY] && mapGems[tempX][tempY] === type  ){
                     tempX += hx[1].x;
                     tempY += hx[1].y;
                }
                endGem = {
                    x: tempX - hx[1].x,
                    y: tempY - hx[1].y
                };
            }
         }
        
         

         var length = Math.abs(startGem.x - endGem.x) + Math.abs(startGem.y - endGem.y) + 1 ;
         if (length > 2 ){
             return {
                 startGem : startGem,
                 endGem : endGem,
                 length: length,
                 msg: "Can remove gems"
             };
         }
         else{
             return  {
                 result : false,
                 length: 0,
                 msg: "Not enough in-line gems"
             };
         }
    },
    onUpdateGemMap: function(e){
         this.mapGems[e.x][e.y] = e.type;
    },
    __destroyWhenScore: function(currentGem, newGem){
        //removeFromStage
    },
    checkCanScoreable: function(mapGems){
        var temp = [];
        for (var ii in mapGems){
            temp[ii] = [];
            for (var jj in mapGems[ii]){
                temp[ii][jj] = mapGems[ii][jj];
            }
        }        
        
        var hx = [{
                    x: 1,
                    y: 0
                },{
                    x: 0,
                    y: 1
                }];
        for (var ii in temp){
            for (var jj in temp[jj]){
                for (var kk = 0; kk < hx.length; kk++){
                    var tmp = temp[ii][jj];
                    var newX = parseInt(ii) + hx[kk].x;
                    var newY = parseInt(jj)+ hx[kk].y;
                    if (!temp[newX] || !temp[newX][newY])
                        continue;
                    temp[ii][jj] = temp[newX][newY];
                    temp[newX][newY] = tmp;                
                    var rs1 = this.__checkGemsInLine(temp, parseInt(ii), parseInt(jj), temp[ii][jj], hx[0]);
                    var rs2 = this.__checkGemsInLine(temp, parseInt(ii), parseInt(jj), temp[ii][jj], hx[1]);
                    var rs3 = this.__checkGemsInLine(temp, newX, newY, tmp, hx[0]);
                    var rs4 = this.__checkGemsInLine(temp, newX, newY, tmp, hx[1]);
                    if (rs1.length + rs2.length + rs3.length + rs4.length  > 0){
                        console.log("ii ",ii, " jj ",jj);
                        return {
                            scoreable: true,
                            pos: {
                                x: ii,
                                y: jj                        
                            }                            
                        };
                    }
                    var tmp = temp[newX][newY];
                    temp[newX][newY] = temp[ii][jj] ;
                    temp[ii][jj] = tmp;
                }                                
            }
        }                    
        
        return {
            scoreable: false,
            pos: null
        };
    },
    __checkAllTable: function(mapGems){
        var result = [];
        var mark = [];
        var hx = [{
                    x: -1,
                    y: 0
                },{
                    x: 0,
                    y: -1
                }];
        for (var ii in mapGems){
            mark[ii] = [];            
        }
        for (var ii in mapGems) {            
            for (var jj in mapGems[ii]) {
                if (mark[ii][jj])
                    continue;
                mark[ii][jj] = true;
                var rs1 = this.__checkGemsInLine(mapGems, parseInt(ii), parseInt(jj), mapGems[ii][jj], hx[0]);
                var rs2 = this.__checkGemsInLine(mapGems, parseInt(ii), parseInt(jj), mapGems[ii][jj], hx[1]);
                
                
                // mark the markArray
                /*
                 * so urgly code but it's better than use for statements
                 */
                if (rs1.length > 0){
                    result.push(rs1);
                    var startGem = rs1.startGem;
                    var endGem = rs1.endGem;
                    for (var gg = startGem.x; gg <= endGem.x; gg++) {
                        for (var kk = startGem.y; kk <= endGem.y; kk++) {
                                mark[gg][kk] = true;
                        }
                    }
                }                           
                if (rs2.length > 0){
                    result.push(rs2);
                    var startGem = rs2.startGem;
                    var endGem = rs2.endGem;
                    for (var gg = startGem.x; gg <= endGem.x; gg++) {
                        for (var kk = startGem.y; kk <= endGem.y; kk++) {
                                mark[gg][kk] = true;
                        }
                    }                    
                } 
                if (result.length > 0){
                    var sum = 0;
                    for (var ii in result){
                        sum += result[ii].length;
                    }
                    return {
                        result: sum ,
                        gemLines: result
                    };
                }
            }
        }
        
       var sum = 0;
       for (var ii in result){
           sum += result[ii].length;
       }
       return {
           result: sum ,
           gemLines: result
       };               
    }
    

}).implement(ObserverInterface).implement(CompositionRenderInterface);

