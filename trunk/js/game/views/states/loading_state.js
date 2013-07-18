LoadingState = BaseState.extend({
    init: function(options) {
        options = options || {};
        this._super(options);
        this.registerObserver();
    },
    /*
     * show loading screen 
     * with a spin bunny and a loading text below
     * 
     */
    preRender: function() {
        // create a new loader
        loader = new PIXI.AssetLoader(Models.resource.assetsToLoader);
        loader.onComplete = function() {
            JOOUtils.generateEvent("ChangeState", {
                id: "gaming"
            });
        };

        loader.onProgress = function() {

        };
        loader.load();

        // add an spin bunny
        this.bunny = new Bunny();
        JOOUtils.generateEvent("AddtoStage", {
            wrapper: this.bunny,
            object: this.bunny.obj
        });
        this.listObject.push(this.bunny);        
        
        this.funtext = new FunText();
        JOOUtils.generateEvent("AddtoStage", {
            wrapper: this.funtext,
            object: this.funtext.obj
        });
        this.listObject.push(this.funtext);
    }
}).implement(ObserverInterface);