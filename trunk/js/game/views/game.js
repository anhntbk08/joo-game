/*
 *  - EventDispatcher is the base class for 
 *  event , we could addEventListener, removeEventListener  
 *  with implement(ObserverInterface) we could use
 *  capture an event from Global Event Pool
 *  - TO Push an event to Global Event Pool just using
 *    JOOUtils.generateEvent("eventName", data);
 */

Game = EventDispatcher.extend({
    init: function(options) {
        options = options || {};
        this._super(options);                        
        this.registerObserver();
        this.createEnvironment(options);                
        this.registerElements();
    },
            
    /*
     * * we using Pixi js to rendering everything
     * more detail can go here https://github.com/GoodBoyDigital/pixi.js
     * 
     * options could include
     *  width
     *  height
     *  base color
     *  
     */
     createEnvironment: function(options){
         this.width = options.width;
         this.height = options.height;
         
         // create an new instance of a pixi stage
        this.stage = new PIXI.Stage(0xFFFFFF, true);
        
        // create a renderer instance
	this.renderer = PIXI.autoDetectRenderer(this.width, this.height);
        
        // add the renderer view element to the DOM
	document.body.appendChild(this.renderer.view);
     },
             
     /*
      * -  register states
      * -  set default state
      * -  start game loop
      */
    registerElements: function() {
        //register all state        
        this.states = [];
        this.__addState("Loading", "loading");
        this.__addState("Landing", "landing");
        this.__addState("Game", "gaming");

        // set Default state
        this.changeState("loading");
        
        //start game looping
        var _self = this;
        requestAnimFrame(function() {
            _self.update();
        });
        
    },
    /*
     * add state to states pool
     */
    __addState: function(state, id, config){       
        var cls = window[state + "State"];
        this.states.push({
            state: new cls(config),
            id : id
        });                
    },
    
    /*
     * game loop and 
     * elements rerender  each loop
     */
    update: function() {
        var _self = this;        
        requestAnimFrame(function() {
            _self.update();            
        });
        
        this.currentState.state.update();
        _self.renderer.render(_self.stage);
    },
    /*
     * get current state 
     *   -  state object
     *   -  state id
     */
    getState: function() {
        return this.currentState;
    },
            
    /*
     * Change state to one state with input id
     * //TODO should we remove total the state or just detach it from screen
     * // still keep pointer
     * 
     */
    changeState: function(stateId) {
        if (this.currentState){
            this.currentState.state.remove();
        }
        for (var ii in this.states) {
            if (this.states[ii].id === stateId) {
                this.currentState = this.states[ii];
                this.currentState.state.preRender();
                break;
            }
        }
    },
            
     /*
      * Capturing addtostage event from global event pool 
      * add an dispaly object to stage for rener
      */
    onAddtoStage: function(data){
        this.stage.addChild(data.object);
        data.wrapper.dispatchEvent("afterRender");
    },
     /*
      * Capturing ChangeState event from global event pool 
      * add an dispaly object to stage for rener
      */
    onChangeState: function(data){
        this.changeState(data.id);
    },
     
     /*
      * Capturing removeFromStage event from global event pool 
      * remove an dispaly object to stage
      */
    onRemoveFromStage: function(data){
        this.stage.removeChild(data.object);
    },
            
    // TO DO : don't know how to clear viewport in PIXI -- just research it
    clearViewPort: function() {
        
    }    
}).implement(ObserverInterface);
