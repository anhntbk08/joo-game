BasePresenter = Class.extend({
	
	init: function(stage) {
		this.stage = stage;
		this.registerObserver();
                this.initValue();
	},
        initValue: function(){
    
        },
	
	dispose: function() {
		this.unregisterObserver();
		this.stage = undefined;
	}
}).implement(ObserverInterface);