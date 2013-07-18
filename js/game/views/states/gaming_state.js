GameState = BaseState.extend({
    init: function(options) {
        options = options || {};
        this._super(options);
    },
    preRender: function(){
        this.aliens = new Aliens();
        JOOUtils.generateEvent("AddtoStage", {
            wrapper: this.aliens,
            object: this.aliens.obj
        });
        this.listObject.push(this.aliens);
    },
    
}).implement(ObserverInterface);

