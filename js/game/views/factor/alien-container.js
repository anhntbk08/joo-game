Aliens = BaseFactor.extend({
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
        this.__initValue();
        this.__preRender(options);
        this.__registerEvent();
    },
    __initValue: function(){
        this.aliens = [];
        this.selectedList = [];
    },
            
    __registerEvent: function(){
        this.addEventListener("alienclick", function(data){
            this.alienClick(data.obj);
        });
    },
    /*
     * each display object has it own just one oject represent for it 
     * on screen
     * i call it "obj"
     * if u wanna add more elements on each just use container
     */
    __preRender: function() {
        var _self = this;
        
        this.obj = new PIXI.DisplayObjectContainer();
	this.obj.position.x = 0;
        this.obj.position.y = 0;
        
        for (var i = 0; i < 20; i++){
                var frameName = Models.resource.alienFrames[i % 4];               
                var options = {
                     anchor: {
                        x: 0,
                        y: 0        
                    },
                    position:{
                        x: (i%5)*155,
                        y: parseInt(i/5)*175
                    },
                    rotation: 0,
                    frameName: frameName
                };
                var alien = new Alien(options);
                alien.onTap = function(){
                    _self.alienClick(this);                    
                }
                this.aliens.push(alien);
                this.obj.addChild(alien.obj);
        }        
    },
    update: function() {
       for (var ii in this.aliens){
           this.aliens[ii].update();
       }
    },
    alienClick: function(obj){
        if (this.currentObject){
            this.currentObject.setState(Models.constants.ALIEN.ALIEN_INITIAL);
        }
        this.currentObject = obj;
        obj.setState(Models.constants.ALIEN.ALIEN_CLICKED);
        /*
        if (this.selectedList.length == 0){
            this.selectedList.push(obj);
        }
        else{
            this.selectedList.plice(0, this.selectedList.length);
        }
        */
    },
    afterRender: function(){
    
    }   
});