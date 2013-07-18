LandingState = BaseState.extend({
    init: function(options) {
        options = options || {};
        this._super(options);
        this.registerObserver();
    },
    preRender: function(){
       this.bunny = new Bunny();
       JOOUtils.generateEvent("AddtoStage", {
            wrapper: this.bunny,
            object : this.bunny.obj
        });
        this.listObject.push(this.bunny);
    }
    
}).implement(ObserverInterface);