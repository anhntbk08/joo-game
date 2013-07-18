Alien = BaseFactor.extend({
    init: function(options) {
        // TO DO push this info to model 
        options = options || {
           anchor: {
               x: 0,
               y: 0        
           },
           postion:{
               x: 0,
               y: 0
           },
           rotation: 0
        };
        this._super(options);
        this.__preRender(options);
    },
     
    __preRender: function(options) {
        var _self = this;
        this.__state = Models.constants.ALIEN.ALIEN_INITIAL;
        
        this.obj = PIXI.Sprite.fromFrame(options.frameName);
        this.obj.position = options.position; 
        this.obj.anchor   = options.anchor; 
        this.obj.setInteractive(true);
        
        this.obj.click = this.obj.tap = function(data){         
            _self.onTap(this);
        };
    },
     
     /*
      * an alien has it own 3 states
      *   0 : basic state 
      *   1 : change state when tap , click  
      *   2 : change state when hover
      */       
    setState: function(state){
        this.__state = state;
        this.__direction = "up";
    },
            
    update: function() {

        if (this.__state == Models.constants.ALIEN.ALIEN_CLICKED){
            if (this.__direction == "up"){
                if (this.obj.scale.x < 1.2){
                    this.obj.scale.x +=0.01;
                    this.obj.scale.y +=0.01;
                }
                else{
                    this.__direction = "down";                    
                }                    
            }
            else{
                if (this.obj.scale.x > 0.8){
                    this.obj.scale.x -=0.01;
                    this.obj.scale.y -=0.01;
                }
                else{
                    this.__direction = "up";                    
                }                
            }            
        }
        else {
            if (this.__direction == "stand")
                return;
            else{
                if (this.obj.scale.x < 1){
                    this.obj.scale.x +=0.01;
                    this.obj.scale.y +=0.01;
                }              
                else if (this.obj.scale.x > 1){
                    this.obj.scale.x -=0.01;
                    this.obj.scale.y -=0.01;
                }
                else
                    this.__direction = "stand"
            }                
        }        
   },
    onTap: function(){
        
    }
}).implement(ObserverInterface);