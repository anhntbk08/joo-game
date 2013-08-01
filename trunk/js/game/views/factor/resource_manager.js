/*
 * author anhnt
 *  This class take responbility for loading images, audio
 *  and show loading screen
 *  
 */

ResourceLoadingManager = Sketch.extend({
     init: function(config) {
        var _self = this;
        this._super(config);
        this.registerObserver();
        this.renderUIComposition();
        this.resources = config.resources || [];
        this.loadedResources = [];
        this.loaded = 0;    
     },
             
     /*
      * add resource to a pool to load
      * The resources is config on Model game files
      */
     startLoading:  function(){
        /*
         * show the avatar  on loading screen
         * 
         */
        var img = new Image();
        var _self = this;
        img.onload = function(){
            setTimeout(function(){
                _self.__loadAllResource();
            }, 2000);            
        };
        img.src = Models.resource.loading.avatar;
        
        
        
     },
     __loadAllResource: function(){
        var imageType = ["png", "jpg", "gif", "bmp"];
        this.__maxLength = 0;
        for (var ii in this.resources){
            for (var jj in this.resources[ii]){
                var type =  this.resources[ii][jj].slice(-3);
                if (imageType.indexOf(type) > -1)
                    type = "img"
                else
                    type = "audio";
                this.__maxLength++;
                this.__add(this.resources[ii][jj], type, jj);
            }            
        }
     },
     
     /*
      * auto refresh UI when a resource loaded
      * should be override depend on application
      * 
      */
     changeUI: function(val){       
        var w = 100*(val+1)/(this.__maxLength);
        if(w > 100) 
            return;
        this.loadingMask.access().css("height", (168*(100-w)/100 ) + "px") ;
        var bgSizeX = parseInt(this.waveLoading.access().css("background-size")) +1;
        this.waveLoading.access().css("background-size", bgSizeX + "% 90%");
        //this.progressBar.css('width', w + '%');
        this.percentage.access().html(parseInt(w) + '%');
                
        if (w == 100){
            var _self = this;
            setTimeout(function(){
                _self.dispatchEvent("complete");                
            },500);            
        }
     },
             
    /**
     * Resourcemanager.add(_resource, _type)
     * object resource, String/Number, String
     * adds a new resource for use and begins the process of loading
     **/
    __add: function(_resource, _type, _name) {
        var _self = this;
        var resource = {'path': _resource, 'type': _type, 'name': _name};        
        resource.path = _resource;

        if (_name === undefined) {
            _name = "";
        }

        if (_type == 1 || _type == "img" || _type == null) {
            if (_resource.nodeType === 1) {
                resource.source = _resource;
            } else {
                resource.source = new Image();
            }

            this.loadedResources.push({resource: resource, name: _name});
            resource.source.onload = function() {
                _self.loaded++;
                _self.changeUI(_self.loaded);
            };

            if (_resource.nodeType === 1) {
                resource.source.src = _resource.src;
            } else {
                resource.source.src = _resource;
            }

        } else if (_type == 2 || _type == "audio") {
            /*
            resource.source = new Audio();
            this.loadedResources.push({resource: resource, name: _name});
            resource.source.onload = function() {
                _self.loaded++;
                _self.changeUI(_self.loaded);
            };

            resource.source.src = _resource;
            */
        }

        return resource;
    },
   
    /**
     * Resourcemanager.getResource(name)
     * string/text
     * returns the resource by name if found
     **/
    __getResource: function(_name) {
        var resources = this.loadedResources;

        for (var i = 0, l = resources.length; i < l; i++) {
            if (resources[i].name == _name) {
                return resources[i].resource;
            }
        }
    }
}).implement(ObserverInterface).implement(CompositionRenderInterface);

