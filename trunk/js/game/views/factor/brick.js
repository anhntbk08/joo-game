Brick = BaseFactor.extend({
    setupDomObject: function(config) {
        this.inheritedCSSClasses = false;
        this._super(config);
        this.__state = "unactive";
    },
    toHtml: function() {
        return "<span draggable='false' class='joo-gem'> </span>";
    }    
});