BaseFactor = Sketch.extend({
    setupDomObject: function(config) {
        this.inheritedCSSClasses = false;
        this._super(config);
        
        this.addEventListener('click', function(e) {
            e.preventDefault();
            //this.onClick(e);
            //console.log("on click ...");
        });
        this.addEventListener('touchstart', function(e) {            
            e.preventDefault();
            this.onTouchStart(e);
            this.onClick(e);
        });
        this.addEventListener('touchmove', function(e) {
            this.onTouchMove(e);
        });
        this.addEventListener('touchend', function(e) {            
            e.preventDefault();
            this.onTouchEnd(e);
        });
        this.addEventListener('mouseover', function(e) {
            this.onMouseOver(e);
        });
    },
    onClick: function(e){
        
    },
    onTouchStart: function(e){
        
    },
    onTouchMove: function(e){
        
    },
    onTouchEnd: function(e){
        
    },
    onMouseOver: function(e){

    }     
});