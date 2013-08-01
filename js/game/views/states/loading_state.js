LoadingState = Stage.extend({
   setupDomObject: function(options) {
        options = options || {};
        this.name = "LoadingState";
        this._super(options);
        //this.preRender();
    },
    /*
     * show loading screen 
     * with a spin bunny and a loading text below
     * 
     */
    preRender: function() {        
        
       var loadingManager = new ResourceLoadingManager({
           resources: Models.resource,
           type : "avatar",
           isShowProgressBar: "true"
       });       
       this.addChild(loadingManager);
       loadingManager.addEventListener("complete", function(){
           setTimeout(function(){
               JOOUtils.changeStage("menu-state", "opacity");
           }, Models.delayTime.switchFromLoadingPage);           
       });
       loadingManager.addEventListener("failed", function(){
           
       });
       loadingManager.startLoading();
       
    }
});