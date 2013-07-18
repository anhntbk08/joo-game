BaseState = EventDispatcher.extend({
    init: function(options) {
        options = options || {};
        this._super(options);
        this.listObject = [];
        this.listStaticObject = [];
    },
    update: function() {
        for(var ii in this.listObject){
            this.listObject[ii].update();  
        }        
    },
    remove : function(){
        for(var ii in this.listObject){
            JOOUtils.generateEvent("RemoveFromStage", {
                object : this.listObject[ii].obj
            });
        }
        for(var ii in this.listStaticObject){
            JOOUtils.generateEvent("RemoveFromStage", {
                object : this.listStaticObject[ii]
            });
        }
        
    }
}).implement(ObserverInterface);