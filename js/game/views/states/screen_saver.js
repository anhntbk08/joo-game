ScreenSaverState = BaseState.extend({
    init: function(options) {
        options = options || {};
        this._super(options);
    },
    preRender: function(){
        this.aliens = new Aliens();
        JOOUtils.generateEvent("AddtoStage", {
            object: this.aliens.obj
        });
        this.listObject.push(this.aliens);
    }
    
}).implement(ObserverInterface);

