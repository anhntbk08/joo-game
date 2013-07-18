FunText = BaseFactor.extend({
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
        // add an discription text
        this.obj = new PIXI.Text("I'm fun!", {font: "bold 60px Podkova", fill: "#cc00ff", align: "center", stroke: "#FFFFFF", strokeThickness: 6});
        // setting the anchor point to 0.5 will center align the text... great for spinning!
        this.obj.anchor.x = this.obj.anchor.y = 0.5;
        this.obj.position.x = 620 / 2;
        this.obj.position.y = 400 / 2;
    },
    update: function() {        
        this.obj.text = this.obj.text + parseInt(Math.random()*3);
        this.obj.updateText();
        //this.obj.rotation += 0.1;
    }
}).implement(ObserverInterface);