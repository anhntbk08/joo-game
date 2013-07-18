BaseFactor = EventDispatcher.extend({
    init: function(options) {     
        this._super(options);
        this.addEventListener("afterRender", function(){
           this.afterRender(); 
        });
    },    
    __preRender: function() {        

    },
    update: function() {
       
    },
    afterRender: function(){

    }    
});