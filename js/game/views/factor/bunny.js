Bunny = BaseFactor.extend({
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
            /*
             * each display object has it own just one oject represent for it 
             * on screen
             * i call it "obj"
             */
    __preRender: function() {
        var bunnyProperties  = Models.gameMode.single.bunny;
	var texture = PIXI.Texture.fromImage(bunnyProperties.texture);
        
	this.obj = new PIXI.Sprite(texture);
	this.obj.anchor = bunnyProperties.anchor;
	this.obj.position = bunnyProperties.postion;
    },
    update: function() {
        this.obj.rotation += 0.1;
    }
}).implement(ObserverInterface);