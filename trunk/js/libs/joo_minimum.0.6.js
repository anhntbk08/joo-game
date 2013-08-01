/* This is minimum part of JOO framework 
 * foundation by Terrabook Team, mainly @DungBa and HieuBt contrubuted 
 * 
 */

(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

  /**
   * This class is abstracted and should not be used by developers
   * @class Base class for all JOO objects.
   */
  this.Class = function(){};
 
  /**
   * Extends the current class with new methods & fields
   * @param {Object} prop additional methods & fields to be included in new class
   * @static
   * @returns {Class} new class
   */
  Class.extend = function(prop) {    
    if (typeof updateTracker != 'undefined')
            updateTracker(1);
    var _super = this.prototype;
    var _parent = this;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    
    initializing = false;
    prototype.currentClass = this;
    prototype.ancestors = Array();
    if (this.prototype.ancestors) {
    	for(var i in this.prototype.ancestors) {
    		prototype.ancestors.push(this.prototype.ancestors[i]);
    	}
    }
    prototype.ancestors.push(this);
   
    for (var name in prop) {
      //console.log('_super[name] ',_super[name]);  
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn, prototype){
          return function() {
            var tmp = this._super;           
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            var ret = fn.apply(this, arguments);  
            this._super = tmp;
            //this._parent = prototype;
            return ret;
          };
        })(name, prop[name], prototype) :
        prop[name];
    }
  
    /**
     * Implements the current class with a set of interfaces
     * @param {InterfaceImplementor...} interfaces a set of interfaces to be implemented
     * @static
     * @returns {Class} current class
     */
    Class.implement = function() {
    	for(var i=0;i<arguments.length;i++) {
                var impl = new arguments[i]();
                impl.implement(Class);
    	}
    	return Class;
    };
   
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init ) {
        this.init.apply(this, arguments);
        if (typeof updateTracker != 'undefined')
    		updateTracker(this.tracker || 5, true);
      }
    }
   
    // Populate our constructed prototype object
    Class.prototype = prototype;
   
    // Enforce the constructor to be what we expect
    Class.constructor = Class;
    
    // And make this class extendable
    Class.extend = arguments.callee;
   
    return Class;
  };
})();





/**
 * @class Base class of all "interfaces"
 */
InterfaceImplementor = Class.extend(
/** @lends InterfaceImplementor# */	
{
	init: function(){
		
	},

	/**
	 * Implement a class. Subclass should modify the <code>prototype</code>
	 * of the class to add new features. See source code of subclass for 
	 * more details
	 * @param {Class} obj the class to be implemented
	 */
	implement: function(obj)	{
		
	}
});


SystemProperty = Class.extend(
/** @lends SystemProperty# */
{
	
	/**
	 * Initialize properties.
	 * @class A class to store system-wide properties
	 * @augments Class
	 * @constructs
	 */
	init: function()	{
		this.properties = Array();
	},
	
	/**
	 * Retrieve the value of a property.
	 * @param {String} property the name of the property to retrieve
	 * @param {Object} defaultValue the default value, used if the property is not found
	 * @returns {mixed} the property value, or the default value or undefined 
	 */
	get: function(property, defaultValue)	{
		var cookieValue = undefined;
		if (typeof $ != 'undefined' && typeof $.fn.cookie != 'undefined')
			cookieValue = $.cookie(property);
		if(cookieValue != undefined){
			return cookieValue;
		}else if(this.properties[property] != undefined){
			return this.properties[property];
		}else {
			return defaultValue;
		}
	},
	
	/**
	 * Store the value of a property.
	 * @param {String} property the name of the property to store
	 * @param {Object} value the new value
	 * @param {Boolean} persistent should the property be stored in cookie for future use
	 */
	set: function(property, value, persistent){
		if(!persistent){
			this.properties[property] = value;
		}else{
			$.cookie(property,value,{ expires: 1 });
		}
		var subject = SingletonFactory.getInstance(Subject);
		subject.notifyEvent("SystemPropertyChanged", property);
	},
	
	toString: function() {
		return "SystemProperty";
	}
});

ResourceManager = Class.extend(
/** @lends ResourceManager# */		
{
	/**
	 * Initialize resource locators.
	 * @class Manage resource using the underlying resource locator
	 * @augments Class
	 * @constructs
	 */
	init: function()	{
		this.resourceLocator = new JQueryResourceLocator();
		this.caches = {};
	},
	
	/**
	 * Change the current resource locator.
	 * @param {ResourceLocator} locator the resource locator to be used
	 */
	setResourceLocator: function(locator)	{
		this.resourceLocator = locator;
	},
	
	/**
	 * Get the current resource locator.
	 * @returns {ResourceLocator} the current resource locator
	 */
	getResourceLocator: function(locator)	{
		return this.resourceLocator;
	},
	
	/**
	 * Ask the underlying resource locator for a specific resource
	 * @param {String} type used as a namespace to distinct different resources with the same name
	 * @param {String} name the name of the resource
	 * @param {ResourceLocator} resourceLocator Optional. The resource locator to be used in the current request
	 * @param {Boolean} cache Optional. Should the resource be cached for further use
	 * @returns {Resource} the located resource
	 */
	requestForResource: function(type, name, resourceLocator, cache)	{
		if (type != undefined)
			name = type+"-"+name;
		
		if (cache && this.caches[name]) {
//			console.log('cache hit: '+name);
			return this.caches[name];
		}
		
		var rl = resourceLocator || this.resourceLocator;
		var res = rl.locateResource(name);
		if (cache)
			this.caches[name] = res;
		return res;
	},
	
	/**
	 * Ask the underlying resource locator for a custom resource
	 * @param {String} customSelector the selector used to retrieve the resource, depending on underlying the resource locator
	 * @param {Resource} resourceLocator Optional. The resource locator to be used in the current request
	 * @returns {Resource} the located resource
	 */
	requestForCustomResource: function(customSelector, resourceLocator)	{
		if (resourceLocator != undefined)	{
			return resourceLocator.locateResource(customSelector);
		}
		return this.resourceLocator.locateCustomResource(customSelector);
	},
	
	toString: function() {
		return "ResourceManager";
	}
});

/**
 * @class Locate resource
 * @augments Class
 */
ResourceLocator = Class.extend(
/** @lends ResourceLocator# */
{
	
	/**
	 * Locate a resource based on its ID.
	 * By default, this function do nothing
	 * @param {String} resourceID the resource ID
	 */
	locateResource: function(resourceID)	{
		
	}
});

/**
 * Create a new JQueryResourceLocator
 * @class JQuery Resource Locator.
 * @augments ResourceLocator
 */
JQueryResourceLocator = ResourceLocator.extend(
/** @lends JQueryResourceLocator# */
{
	locateResource: function(id)	{
		if (JOOUtils.isTag(id))
			return $(id);
//		if ($('#'+id).length > 0)	{
			return $('#'+id);
//		}
//		return undefined;
	},
	
	/**
	 * Locate resource based on the custom selector
	 * @param {String} custom the custom selector
	 * @returns {Resource} the located resource
	 */
	locateCustomResource: function(custom)	{
//		if ($(custom).length > 0)	{
			return $(custom);
//		}
//		return undefined;
	}
});


/**
 * @class Access object in a singleton way
 */
SingletonFactory = function(){};

/**
 * Get singleton instance of a class.
 * @methodOf SingletonFactory
 * @param {String} classname the className
 * @returns the instance
 */
SingletonFactory.getInstance = function(classname){
	if(classname.instance == undefined){
		classname.singleton = 0;
		classname.instance = new classname();
		classname.singleton = undefined;
	}
	return classname.instance;
};



/*
 * 
 */
EventDispatcher = Class.extend(
/**
 * @lends EventDispatcher#
 */	
{

	/**
	 * Create a new EventDispatcher.
	 * @class Base class for all event dispatchers (such as DisplayObject)
	 * @constructs
	 * @augments Class
	 */
	init: function() {
		this.listeners = {};
	},
	
	/**
	 * Add a new listener for a specific event.
	 * @param {String} event the event to be handled. 
	 * @param {Function} handler the event handler. If you want to remove it
	 * at a later time, it must not be an anonymous function
	 */
	addEventListener: function(event, handler) {
		if (this.listeners[event] == undefined) {
			this.listeners[event] = Array();
		}
		this.listeners[event].push(handler);
	},
	
	/**
	 * Dispatch a event.
	 * @param {String} event the event to be dispatched.
	 */
	dispatchEvent: function(event) {
		if (!this.disabled && this.listeners && this.listeners[event] != undefined) {
			var handlers = this.listeners[event];
			var args = Array();
			for(var i=1; i<arguments.length; i++) {
				args.push(arguments[i]);
			}
			for(var i=0;i<handlers.length;i++) {
				var result = handlers[i].apply(this, args);
				if (result === false)
					return;
			}
		}
	},
	
	/**
	 * Remove a handler for a specific event.
	 * @param {String} event the event of handler to be removed 
	 * @param {Function} handler the handler to be removed
	 */
	removeEventListener: function(event, handler) {
		if (this.listeners && this.listeners[event] != undefined) {
			var index = this.listeners[event].indexOf(handler);
			if (index != -1)
				this.listeners[event].splice(index, 1);
		}
	},
	
	disable: function(disabled) {
		this.disabled = disabled;
	},
	
	toString: function() {
		return "EventDispatcher";
	},
	
	setupBase: function(config) {
		
	}
});

/**
 * @class Used for formalizing the observer design pattern,
 * especially in an event-based application
 * @interface
 */
ObserverInterface = InterfaceImplementor.extend({
	
	implement: function(obj)	{
		/**
		 * Called when the observer is notified of an event by the {@link Subject}.
		 * The default implementation forward the request
		 * @methodOf ObserverInterface#
		 * @name notify 
		 * @param {String} eventName the event name
		 * @param {Object} eventData the event data
		 * @returns {Boolean} whether the event is interested by this observer or not.
		 */
		obj.prototype.notify = obj.prototype.notify || function(eventName, eventData)	{

			var methodName = "on"+eventName;
			//console.log("this ",this);
			//console.log("methodName ",methodName);
			if (typeof this[methodName] != 'undefined')	{
				var method = this[methodName];
				method.call(this, eventData);
				return true;
			}
			return false;
		};
		
		/**
		 * Register this observer with the {@link Subject}.
		 * @methodOf ObserverInterface#
		 * @name registerObserver
		 */
		obj.prototype.registerObserver = obj.prototype.registerObserver || function()	{
			var subject = SingletonFactory.getInstance(Subject);
			subject.attachObserver(this);
		};
		
		/**
		 * Unregister this observer with the {@link Subject}.
		 * @methodOf ObserverInterface#
		 * @name unregisterObserver
		 */
		obj.prototype.unregisterObserver = obj.prototype.unregisterObserver || function()	{
			var subject = SingletonFactory.getInstance(Subject);
			subject.detachObserver(this);
		};
	}
});
DisplayObject = EventDispatcher.extend(
/**
 * @lends DisplayObject#
 */
{
	/**
	 * Create a new DisplayObject
	 * @constructs
	 * @class
	 * <p>Base class for all JOO UI components</p>
	 * <p>It supports the following configuration parameters:</p>
	 * <ul>
	 * 	<li><code>tooltip</code> The tooltip of the object</li>
	 * 	<li><code>absolute</code> Whether position remains intact or not</li>
	 * 	<li><code>x</code> X of component. The <code>absolute</code> parameter must be false</li>
	 * 	<li><code>y</code> Y of component. The <code>absolute</code> parameter must be false</li>
	 * 	<li><code>width</code> Width of component</li>
	 * 	<li><code>height</code> Height of component</li>
	 * 	<li><code>custom</code> Custom styles of component</li>
	 * </ul>
	 * @augments EventDispatcher
	 */
	init: function(config) {
		this._super();
		this.domEventBound = {};
		this.inheritedCSSClasses = true;
		this.classes = Array();
		if (config == undefined) config = {};
		this.config = config;
		this.setupBase(config);
		this.setupDisplay(config);
		this.setupDomObject(config);
		
		var objMgr = SingletonFactory.getInstance(Application).getObjectManager();
		objMgr.register(this);
	},
	
	/**
	 * Update the stage of current component.
	 * This method is not intended to be used by developers.
	 * It is called automatically from JOO when an object is added to a stage
	 * directly or indirectly.
	 * @private
	 * @param {Stage} stage new Stage of current component
	 */
	updateStage: function(stage) {
		if (stage != this.stage) {
			this.stage = stage;
			this.dispatchEvent("stageUpdated");
		}
	},

	/**
	 * Make this component sketched by another one
	 * @param {DisplayObject} parent the component that this component anchors to
	 */
	anchorTo: function(parent) {
		this.setLocation(0, 0);
		this.setStyle('width', parent.getWidth());
		this.setStyle('height', parent.getHeight());
	},

	addEventListener: function(event, handler) {
		if (this.domEventBound[event] != true) {
			this.access().bind(event, {_self: this, event: event}, this.bindEvent );
			this.domEventBound[event] = true;
		}
		this._super(event, handler);
	},
	
	dispatchEvent: function(event) {
		if (!this.disabled) {
			this._super.apply(this, arguments);
		}
	},
	
	bindEvent: function(e) {
		var event = e.data.event;
		var args = Array();
		args.push(event);
		for(var i=0; i<arguments.length; i++) {
			args.push(arguments[i]);
		}
		var _self = e.data._self;
		_self['dispatchEvent'].apply(_self, args);
	},
	
	_appendBaseClass: function(className) {
		this.classes.push(className);
	},

	/**
	 * Initialize variables
	 * @private
	 * @param {object} config configuration parameters
	 */
	setupBase: function(config) {
		this._appendBaseClass(this.className);
		for(var i=this.ancestors.length-1; i>=0; i--) {
			if (this.ancestors[i].prototype.className) {
				this._appendBaseClass(this.ancestors[i].prototype.className);
			}
		}
		this.id = this.id || config.id || generateId(this.className.toLowerCase());
		this._parent = undefined;
		this._super(config);
	},
	
	setupDisplay: function(config) {
		this.scaleX = this.scaleY = 1;
		this.rotation = 0;
		this.rotationCenter = {
			x: 0.5,
			y: 0.5
		};
		this.roundDeltaX = 0;
		this.roundDeltaY = 0;
		this.roundDeltaW = 0;
		this.roundDeltaH = 0;
	},

	/**
	 * Initialize UI
	 * @private
	 * @param {object} config configuration parameters
	 */
	setupDomObject: function(config) {
		this.domObject = JOOUtils.accessCustom(this.toHtml());
		this.setAttribute('id', this.id);
		var c = this.inheritedCSSClasses? this.classes.length : 1;
		for(var i=0; i<c; i++) {
			this.access().addClass('joo-'+this.classes[i].toLowerCase());
		}
		this.classes = undefined;
		this.access().addClass('joo-ui');	//for base styles, e.g: all DisplayObject has 'position: absolute'
		
		if (config.tooltip)
			this.setAttribute('title', config.tooltip);
		if (!config.absolute) {
			var x = config.x || 0;
			var y = config.y || 0;
			this.setLocation(x, y);
		}
		if (config['background-color'] != undefined)
			this.setStyle('background-color', config['background-color']);
		
		if (config.extclasses) {
			var cls = config.extclasses.split(',');
			for(var i=0; i<cls.length; i++) {
				this.access().addClass(cls[i]);
			}
		}

		if (config.width != undefined)
			this.setWidth(config.width);
		if (config.height != undefined)
			this.setHeight(config.height);
		
		if (config.custom != undefined) {
			for (var i in config.custom) {
				this.setStyle(i, config.custom[i]);
			}
		}
	},
	
	/**
	 * Change width of component
	 * @param {String|Number} w new width of component
	 */
	setWidth: function(w) {
		if (!isNaN(w) && w != '') {
			w = parseFloat(w);
			w += this.roundDeltaW;
			this.roundDeltaW = w - Math.floor(w);
			w = Math.floor(w);
		}
		this.setStyle('width', w);
	},

	/**
	 * Change height of component
	 * @param {String|Number} h new height of component
	 */
	setHeight: function(h) {
		if (!isNaN(h) && h != '') {
			h = parseFloat(h);
			h += this.roundDeltaH;
			this.roundDeltaH = h - Math.floor(h);
			h = Math.floor(h);
		}
		this.setStyle('height', h);
	},

	/**
	 * Get current width of component (without border, outline & margin)
	 * @returns {String|Number} width of component
	 */
	getWidth: function() {
		return this.access().width();
	},

	/**
	 * Get current height of component (without border, outline & margin)
	 * @returns {String|Number} height of component
	 */
	getHeight: function() {
		return this.access().height();
	},

	/**
	 * Get the current location of component
	 * @returns {Object} location of component
	 */
	getLocation: function() {
		return {x: this.getX(), y: this.getY()};
	},

	/**
	 * Change the location of component
	 * @param {String|Number} x new x coordinate
	 * @param {String|Number} y new y coordinate
	 */
	setLocation: function(x, y) {
		this.setX(x);
		this.setY(y);
	},
	
	/**
	 * Get the current x position of component
	 * @returns {String|Number} current x position
	 */
	getX: function() {
		var left = this.getStyle("left");
		if (left.length > 2)
			left = parseFloat(left.substr(0, left.length-2));
		if (isNaN(left))
			return this.access().position().left;
		return left;
	},
	
	/**
	 * Change the x position of component 
	 * @param {Number} the current x position 
	 */
	setX: function(x) {
		x = parseFloat(x);
		if (isNaN(x)) return;
		x += this.roundDeltaX;
		this.roundDeltaX = x - Math.floor(x);
		this.setStyle('left', Math.floor(x)+'px');
	},
	
	/**
	 * Get the current y position of component
	 * @returns {String|Number} current y position
	 */
	getY: function() {
		var top = parseFloat(this.getStyle('top'));
		if (top.length > 2)
			top = parseFloat(top.substr(0, top.length-2));
		if (isNaN(top))
			return this.access().position().top;
		return top;
	},
	
	/**
	 * Change the y position of component 
	 * @param {Number} the current y position 
	 */
	setY: function(y) {
		y = parseFloat(y);
		if (isNaN(y)) return;
		y += this.roundDeltaY;
		this.roundDeltaY = y - Math.floor(y);
		this.setStyle('top', Math.floor(y)+'px');
	},
	
	/**
	 * Get current rotation angle
	 * @returns {Number} current rotation (in degree)
	 */
	getRotation: function() {
		return this.rotation;
	},

	/**
	 * Change the rotation angle
	 * @param {Number} r the new rotation angle in degree
	 */
	setRotation: function(r) {
		this.rotation = r;
		this.setCSS3Style('transform', 'rotate('+r+'deg)');
	},
	
	/**
	 * Change DOM attribute
	 * @param {String} attrName the attribute name
	 * @param {String} value the attribute value
	 */
	setAttribute: function(attrName, value) {
		this.access().attr(attrName, value);
	},

	/**
	 * Get value of a DOM attribute
	 * @param attrName the attribute name
	 * @returns {String} the attribute value
	 */
	getAttribute: function(attrName) {
		return this.access().attr(attrName);
	},

	/**
	 * Get all DOM attributes mapped by name
	 * @returns {Object} the attributes map
	 */
	getAttributes: function() {
		return JOOUtils.getAttributes(this.access()[0]);
	},

	/**
	 * Remove a DOM attribute
	 * @param {String} name the attribute name
	 */
	removeAttribute: function(name) {
		this.access().removeAttr(name);
	},
	
	/**
	 * Whether a DOM attribute exists
	 * @param {String} name the attribute name
	 * @returns {Boolean} <code>true</code> if the attribute exists, otherwise returns <code>false</code>
	 */
	hasAttribute: function(name) {
		return this.access().attr(name) != undefined;
	},

	/**
	 * Change a style
	 * @param {String} k the style name
	 * @param {String} v the style value
	 * @param {Boolean} silent whether event is omitted or dispatched
	 */
	setStyle: function(k, v, silent) {
		if (silent)
			this.access().silentCss(k, v);
		else
			this.access().css(k, v);
	},

	/**
	 * Get value of a style
	 * @param {String} k the style name
	 * @returns {String} the style value
	 */
	getStyle: function(k) {
		return this.access().css(k);
	},

	/**
	 * Get the computed value of a style
	 * @param {String} k the style name 
	 * @returns {String} the style computed value
	 */
	getComputedStyle: function(k) {
		var s = this.access().getStyleObject()[k];
		if (s == undefined)
			return this.getStyle(k);
		return s;
	},
	
	/**
	 * Change a CSS3 style.
	 * It works by adding CSS3-prefixes to the style name
	 * @param {String} k the style name
	 * @param {String} v the style value
	 */
	setCSS3Style: function(k, v) {
		this.setStyle(k, v);
		this.setStyle('-ms-'+k, v);
		this.setStyle('-webkit-'+k, v);
		this.setStyle('-moz-'+k, v);
		this.setStyle('-o-'+k, v);
	},
	
	getScale: function() {
		return { scaleX: this.scaleX, scaleY:this.scaleY };
	},
	
	setScaleX: function(x, time) {
		if (time == undefined) time = 0;
		this.scaleX = x;
		this.access().effect('scale', { percent: x*100, direction: 'horizontal' }, time);
	},
	
	setScaleY: function(y, time) {
		if (time == undefined) time = 0;
		this.scaleY = y;
		this.access().effect('scale', { percent: y*100, direction: 'vertical' }, time);
	},
	
	setScale: function(s, time) {
		if (time == undefined) time = 0;
		this.access().effect('scale', { percent: s*100, direction: 'both' }, time);
	},
	
	getId: function() {
		return this.id;
	},
	
	/**
	 * Get the corresponding Resource object.
	 * @returns {Resource} the Resource object
	 */
	access: function() {
		return this.domObject;
	},

	/**
	 * Specify HTML content of current component.
	 * Subclass can override this method to specify its own content
	 * @returns {String}
	 */
	toHtml: function() {
		return "";
	},
	
	applyFont: function(font){
		if(font.fontFamily){
			this.setStyle("font-family", font.fontFamily);
		}
		
		if (font.fontSize) {
			this.setStyle('font-size', font.fontSize);
		}
		
		if(font.bold) {
			this.setStyle("font-weight", "bold");
		}

		if(font.italic || font.underline) {
			var font_style = "";
			if(font.italic){
				font_style += "italic ";
			}
			if(font.underline){
				font_style += "underline";
			}
			this.setStyle("font-style", font_style);
		}
		if(font.color){
			this.setStyle("color",font.color);
		}
	},

	/**
	 * Dispose the current component.
	 * <p>It is not intended to be used by developers, as this method
	 * does not remove the current component from its parent's <code>children</code> array.
	 * Developers should use the <code>selfRemove</code> method instead.</p>
	 * @private
	 */
	dispose: function() {
		this.dispatchEvent('dispose');
		
		this.access().remove();
		var objMgr = SingletonFactory.getInstance(Application).getObjectManager();
		objMgr.remove(this);
		this.listeners = undefined;
		this.config = undefined;
		this.dead = true;
		
		if (this.domEventBound != undefined) {
			for(var i in this.domEventBound) {
				this.access().unbind(i, this.bindEvent);
			}
			this.domEventBound = undefined;
		}
	},
	
	/**
	 * Dispose the current component and remove reference from its parent.
	 * This method can be called by developers.
	 * <p>Note that developers must also remove any extra references before
	 * disposing a component to prevent memory leaks</p>
	 */
	selfRemove: function() {
		if (this._parent != undefined)
			this._parent.removeChild(this);
		else
			this.dispose();
	},
	
	/**
	 * Enable/Disable current component. 
	 * Disabled component itself can still dispatch events but all of its
	 * event listeners are disabled
	 * @param {Boolean} disabled whether disable or enable the component
	 */
	disable: function(disabled) {
		//TODO check if the disabled flag is actually changed
		
		this.disabled = disabled;
		if (disabled) {
			this.access().addClass('disabled');
			this.setAttribute('disabled', 'disabled');
		} else {
			this.dispatchEvent('stageUpdated');
			this.access().removeClass('disabled');
			this.removeAttribute('disabled');
		}
	},
	
	toString: function() {
		return this.className;
	}
});

/**
 * This class is abstract and should be subclassed.
 * @class Base class for containers. A container is a component 
 * which contains other components.
 * <p>It supports additional configuration parameters:</p>
 * <ul>
 * 	<li><code>layout</code> The layout of current component. See <code>setLayout</code> method</li>
 * </ul>
 * @augments DisplayObject
 */
DisplayObjectContainer = DisplayObject.extend(
/**
 * @lends DisplayObjectContainer#
 */
{
	updateStage: function(stage) {
		this._super(stage);
		for(var i=0; i<this.children.length; i++) {
			this.children[i].updateStage(this.stage);
		}
	},
	
	setupBase: function(config)	{
		this.children = new Array();
		this._super(config);
	},
	
	setupDomObject: function(config) {
		this._super(config);
		if (config.layout == undefined)
			config.layout = 'block';
		this.setLayout(config.layout);
	},
	
	disable: function(disabled) {
		for(var i=0; i<this.children.length; i++) {
			this.children[i].disable(disabled);
		}
		this._super(disabled);
	},
	
	changeTransformOrigin: function(option) {
		if (this.transformOrigin == option) return;
		var pos = this.transformedOffset();
		var selfPos = this.virtualNontransformedOffset();
		var deltaX = pos.x - selfPos.x;
		var deltaY = pos.y - selfPos.y;
		
		switch (option) {
			case 'topLeft':{
				this.setStyle('-webkit-transform-origin', '0 0');
				this.setLocation(this.getX() + deltaX, this.getY() + deltaY);
				break;
			}
			case 'center': {
				this.setStyle('-webkit-transform-origin', "50% 50%");
				this.setLocation(this.getX() - deltaX, this.getY() - deltaY);
				break;
			}
			default: return;
		}
		this.transformOrigin = option;
	},
	
	getRotationCenterPoint: function() {
		var selfPos = this.offset();
		var width = parseFloat(this.getWidth());
		var height = parseFloat(this.getWidth());
		return getPositionFromRotatedCoordinate({
			x : width * this.rotationCenter.x,
			y : height * this.rotationCenter.y
		}, 0, selfPos);
	},
	
	/**
	 * Offset (top-left coordinate) relative to the document 'as if' the object is not transformed
	 * @private
	 */
	virtualNontransformedOffset: function() {
		var width = parseFloat(this.getWidth());
		var height = parseFloat(this.getHeight());
		return getPositionFromRotatedCoordinate({
			x : -width * this.rotationCenter.x,
			y : -height * this.rotationCenter.y
		}, 0, this.getRotationCenterPoint());
	},

	/**
	 * Offset (top-left coordinate) relative to the document assuming the object is transformed
	 * @private
	 */
	transformedOffset: function() {
		var width = parseFloat(this.getWidth());
		var height = parseFloat(this.getHeight());
		return getPositionFromRotatedCoordinate({
			x : -width * this.rotationCenter.x,
			y : -height * this.rotationCenter.y
		}, this.getRotation() * Math.PI / 180, this.getRotationCenterPoint());
	},
	
	/**
	 * Same as virtualNontransformedOffset
	 * @private
	 */
	offset: function() {
		var x = 0, y = 0;
		var obj = document.getElementById(this.getId());
		if(obj) {
			x = obj.offsetLeft;
			y = obj.offsetTop;
			var body = document.getElementsByTagName('body')[0];
			while(obj.offsetParent && obj != body) {
				x += obj.offsetParent.offsetLeft;
				y += obj.offsetParent.offsetTop;
				obj = obj.offsetParent;
			}
		}
		return {
			x: x,
			y: y
		};
	},

	/**
	 * Add a component before a Resource object.
	 * @param {DisplayObject} obj the component to be added 
	 * @param {Resource} positionObj the Resource object
	 */
	addChildBeforePosition: function(obj, positionObj)	{
		this._prepareAddChild(obj);
		obj.access().insertBefore(positionObj);
		obj.updateStage(this.stage);
	},
	
	/**
	 * Add a component at the end of current container.
	 * @param {DisplayObject} obj the component to be added 
	 */
	addChild: function(obj)	{
		this._prepareAddChild(obj);
		obj.access().appendTo(this.access());
		obj.updateStage(this.stage);
	},
	
	_prepareAddChild: function(obj) {
		this.children.push(obj);
		if (obj._parent != undefined)
			obj._parent.detachChild(obj);
		obj._parent = this;
	},
	
	/**
	 * Remove a child component.
	 * @param {DisplayObject} object the component to be removed
	 */
	removeChild: function(object)	{
		for(var i=0;i<this.children.length;i++)	{
			var obj = this.children[i];
			if (obj.getId() == object.getId())	{
				this.children.splice(i, 1);
				object.dispose();
			}
		}
	},
	
	/**
	 * Remove a child component at specific index. 
	 * @param {Number} index the index of the component to be removed
	 */
	removeChildAt: function(index) {
		var object = this.children[index];
		this.children.splice(index, 1);
		object.dispose();
	},
	
	removeAllChildren: function() {
		for(var i=this.children.length-1; i>=0; i--) {
			this.children[i].dispose();
		}
		this.children = Array();
	},

	/**
	 * Detach (but not dispose) a child component.
	 * The component will be detached from DOM, but retains
	 * its content, listeners, etc.
	 * @param {DisplayObject} object the object to be detached
	 */
	detachChild: function(object)	{
		for(var i=0;i<this.children.length;i++)	{
			var obj = this.children[i];
			if (obj.getId() == object.getId())	{
				this.children.splice(i, 1);
				obj.access().detach();
			}
		}
	},

	/**
	 * Get all children of the container.
	 * @returns {Array} an array of this container's children
	 */
	getChildren: function()	{
		return this.children;
	},
	
	/**
	 * Get a child component with specific id.
	 * @param {Number} id the id of the child component
	 * @returns {DisplayObject} the child component with specified id
	 */
	getChildById: function(id) {
		for(var i in this.children) {
			if (this.children[i].getId() == id)
				return this.children[i];
		}
		return undefined;
	},
	
	/**
	 * Change the layout of this container.
	 * <p>Supported layouts are:</p>
	 * <ul>
	 * 	<li><code>absolute</code>: All children have absolute position</li>
	 * 	<li><code>flow</code>: All children have relative position</li>
	 * 	<li><code>vertical</code>: All children have block display</li>
	 * </ul>
	 * @param {String} layout new layout
	 */
	setLayout: function(layout) {
		if (this.layout != undefined)
			this.access().removeClass('joo-layout-'+this.layout);
		this.access().addClass('joo-layout-'+layout);
		this.layout = layout;
	},
	
	dispose: function() {
		for(var i=0;i<this.children.length;i++) {
			this.children[i].dispose();
		}
		this._super();
	}
});

/**
 * @class A component with custom HTML.
 * <p>It supports additional configuration parameters:</p>
 * <ul>
 * 	<li><code>html</code> Custom HTML</li>
 * </ul>
 * @augments DisplayObjectContainer
 */
CustomDisplayObject = DisplayObjectContainer.extend({

	setupDomObject: function(config) {
		this.domObject = JOOUtils.accessCustom(config.html);
	}
});

/**
 * @class A component into which can be painted.
 * @augments DisplayObject
 */
Graphic = DisplayObject.extend(
/** @lends Graphic# */
{
	
	setupDomObject: function(config) {
		this._super(config);
		this.repaint(config.html);
	},
	
	/**
	 * Clear & repaint the component.
	 * @param {String} html content to be repainted
	 */
	repaint: function(html) {
		this.access().html(html);
	},
	
	/**
	 * Paint (append) specific content to the component.
	 * @param {String} html content to be painted
	 */
	paint: function(html) {
		this.access().append(html);
	},

	/**
	 * Clear the current content.
	 */
	clear: function() {
		this.access().html("");
	},
	
	toHtml: function() {
		return "<div></div>";
	}
});

/**
 * Create a new Sketch
 * @class A concrete subclass of DisplayObjectContainer.
 * It is a counterpart of <code>HTML DIV</code> element
 * @augments DisplayObjectContainer
 */
Sketch = DisplayObjectContainer.extend(
/** @lends Sketch# */
{
	setupDomObject: function(config) {
		this._super(config);
	},
	
	toHtml: function()	{
		return "<div></div>";
	}
});


Subject = Class.extend(
/** @lends Subject# */	
{
	
	/**
	 * Initialize observers
	 * @class <code>Subject</code> is the central of Observer pattern. It maintains a list
	 * of observers, and notifies them automatically of new events. <code>Subject</code> is
	 * a <code>singleton</code> class.
	 * @augments Class
	 * @constructs
	 */
	init: function()	{
		this.observers = Array();
	},
	
	/**
	 * Attach an observer
	 * @param {ObserverInterface} observer the observer to be attached
	 */
	attachObserver: function(observer)	{
		this.observers.push(observer);
	},
	
	/**
	 * Detach an observer
	 * @param {ObserverInterface} observer the observer to be detached
	 */
	detachObserver: function(observer)	{
		if (observer == undefined)
			return;
		var index = this.observers.indexOf(observer);
		if (index > 0)	{
			this.observers.splice(index, 1);
		}
	},
	
	/**
	 * Notify an event to all observers
	 * @param {String} eventName the name of the event which should contains characters only
	 * @param {Object} eventData the data associated with the event
	 */
	notifyEvent: function(eventName, eventData)	{
               var count = 0;
		for(var i=0;i<this.observers.length;i++){
			try {
				var result = this.observers[i].notify(eventName, eventData);
				
				if (result == true)	{
					count++;
				}
			} catch (err)	{
				log(err);
			}
		}
	},
	
	toString: function() {
		return "Subject";
	}
});


ExpressionUtils = {
		
	express: function(obj, expression) {
		var s = expression ? "obj."+expression : "obj";
		try {
			return eval(s);
		} catch (err) {
			log("Expression failed: "+err);
		}
	},
	
	expressSetter: function(obj, expression, value) {
		if (typeof value == 'string') {
			value = value.replace(/'/g, "\\'");
		}
		var s = "obj."+expression+" = '"+value+"'";
		try {
			eval(s);
		} catch (err) {
			log("Expression failed: "+err);
		}
	},
		
	getMutatorMethod: function(obj, prop) {
		var methodName = "set"+prop.substr(0, 1).toUpperCase()+prop.substr(1);
		return obj[methodName];
	},
	
	getAccessorMethod: function(obj, prop) {
		var methodName = "get"+prop.substr(0, 1).toUpperCase()+prop.substr(1);
		return obj[methodName];
	}
};

 /*
  * Generate Events
  */
JOOUtils = {
		
	isTag: function(q) {
		var testTag = /<([\w:]+)/;
		return testTag.test(q);
	},
	
	getApplication: function() {
		return SingletonFactory.getInstance(Application);
	},
	
	getSystemProperty: function(x) {
		return SingletonFactory.getInstance(Application).getSystemProperties().get(x);
	},
	
	getResourceManager: function() {
		return SingletonFactory.getInstance(Application).getResourceManager();
	},
	
	access: function(name, type, resourceLocator) {
		return SingletonFactory.getInstance(Application).getResourceManager().requestForResource(type, name, resourceLocator, true);
	},
	
	accessCustom: function(custom, resourceLocator) {
		return SingletonFactory.getInstance(Application).getResourceManager().requestForCustomResource(custom,resourceLocator);
	},
	
	generateEvent: function(eventName, eventData) {
	    var subject = SingletonFactory.getInstance(Subject);
	    subject.notifyEvent(eventName, eventData);
	},
	
	getAttributes: function(element) {
		var attrs = {};
		var attributes = element.attributes;
		for(var i=0; i<attributes.length; i++) {
			attrs[attributes[i].nodeName] = attributes[i].nodeValue;
		}
		return attrs;
	}
};


/**
 * @class A context (or popup) menu. It can be attached to any other components
 * @augments Sketch
 */
JOOContextMenu = Sketch.extend({
	
	setupBase: function(config)	{
		this.items = new Array();
		this._super(config);
	},

	/**
	 * Add a menu item
	 * @param {JOOMenuItem} item a menu item to be added
	 */
	addItem: function(item) {
		this.items.push(item);
		var _self = this;
		item.addEventListener('click', function() {
			_self.hide();
		});
		this.addChild(item);
	},

	/**
	 * Get all menu items
	 * @returns {Array} an array of menu items of this context menu
	 */
	getItems: function() {
		return this.items;
	},

	/**
	 * Show the context menu at specific position
	 * @param {String|Number} x x position
	 * @param {String|Number} y y position
	 */
	show: function(x, y) {
		var subject = SingletonFactory.getInstance(Subject);
		subject.notifyEvent('ContextMenuShown', this);
		this.setLocation(x, y);
		this.access().show();
	},
	
	/**
	 * Hide the context menu
	 */
	hide: function() {
		this.access().hide();
	}
});


/**
 * @class A menu item, which is attached with a command and 
 * can be added to a {@link JOOMenu} or {@link JOOContextMenu}
 * <p>It supports additional configuration parameters:</p>
 * <ul>
 * 	<li><code>command</code> A function which is called automatically when
 * 		the menu item is clicked
 * 	</li>
 * </ul>
 * @augments Sketch 
 */
JOOMenuItem = Sketch.extend(
/** @lends JOOMenuItem# */		
{
	
	setupDomObject: function(config) {
		this._super(config);
		if (config.label == undefined) {
			config.label = this.id;
		}
		this._outputText(config.label);
		if (config.command != undefined)
			this.onclick = config.command;
		this.addEventListener('click', this.onclick);
	},
	
	_outputText: function(label) {
		this.access().html(label);
	},

	/**
	 * The default command, if no command is attached to this menu
	 * @param e
	 */
	onclick: function(e) {}
});


ContextableInterface = InterfaceImplementor.extend({
	
	implement: function(obj) {
		obj.prototype.setupContextMenu = obj.prototype.setupContextMenu || function() {
			if (!this.contextMenu) {
				this.contextMenu = new JOOContextMenu();
			}
		};
		
		obj.prototype.getContextMenu = obj.prototype.getContextMenu || function() {
			return this.contextMenu;
		};
		
		obj.prototype.contextMenuHandler = obj.prototype.contextMenuHandler || function(e) {
			e.preventDefault();
			this.getContextMenu().show(e.clientX+2, e.clientY+2);
			this.dispatchEvent("showContextMenu", e);
		};
		
		obj.prototype.attachContextMenu = obj.prototype.attachContextMenu || function(useCapturePhase) {
			this.addChild(this.contextMenu);
			this.contextMenu.hide();
			this.addEventListener('contextmenu', function(e) {
				this.contextMenuHandler(e);
				e.stopPropagation();
			}, useCapturePhase);
			this.getContextMenu().addEventListener('click', function(e) {
				e.stopPropagation();
			}, useCapturePhase);
		};
	}
});


/**
 * @class Abstract base class for other UI controls. All UIComponent subclasses
 * is equipped with a {@link JOOContextMenu}
 * @augments DisplayObjectContainer
 */
UIComponent = DisplayObjectContainer.extend({
	
	setupDomObject: function(config) {
		this._super(config);
		this.setupContextMenu();
	},
	
	toHtml: function() {
		return "<div></div>";
	}
}).implement(ContextableInterface);

AjaxInterface = InterfaceImplementor.extend({
	
	implement: function(obj)	{
		obj.prototype.onAjax = obj.prototype.onAjax || function(url, params, type, callbacks, cache, cacheTime)	{
			if (type == undefined)
				type = 'GET';
			var success = callbacks.onSuccess;
			var fail = callbacks.onFailure;
			var accessDenied = callbacks.onAccessDenied;
			
			var memcacheKey = 'ajax.'+url;
			for(var k in params)	{
				var v = params[k];
				memcacheKey += '.'+k+'.'+v;
			}

			//var root = SingletonFactory.getInstance(Application).getSystemProperties().get('host.root');
			//var url = root+'/'+controller+'/'+action;
			//try to get from mem cached
			if (type == 'GET' && cache == true)	{
				var memcache = SingletonFactory.getInstance(Memcached);
				var value = memcache.retrieve(memcacheKey);
				if (value != undefined)	{
					var now = new Date();
					var cacheTimestamp = value.timestamp;
					if ((now.getTime() - cacheTimestamp) < cacheTime)	{
						var subject = SingletonFactory.getInstance(Subject);
						subject.notifyEvent('AjaxQueryFetched', {result: value.ret, url: url});
						AjaxHandler.handleResponse(value.ret, success, fail, url);
						return;
					} else {
						memcache.clear(memcacheKey);
					}
				}
			}
			
			var subject = SingletonFactory.getInstance(Subject);
			subject.notifyEvent('AjaxBegan');
			$.ajax({
				dataType: 'json',
				url: url,
				type: type,
				data: params,
				success: function(ret)	{
					subject.notifyEvent('AjaxFinished');
					// alert("ret " + JSON.stringify(ret));
					if (ret != null)	{
						if (type == 'GET' && cache == true)	{
							//cache the result
							var memcache = SingletonFactory.getInstance(Memcached);
							var now = new Date();
							memcache.store(memcacheKey, {'ret': ret, 'timestamp': now.getTime()});
						}
						subject.notifyEvent('AjaxQueryFetched', {result: ret, url: url});
						AjaxHandler.handleResponse(ret, success, fail, url);
					}
				},
				error: function(ret, statusText, errorCode)	{
					fail.call(undefined, statusText, errorCode);
					subject.notifyEvent('AjaxError', {ret: ret, statusText: statusText, errorCode: errorCode});
					subject.notifyEvent('AjaxFinished');
				},
				statusCode: {
					403: function()	{
						//console.log('access denied at '+url);
						if (accessDenied != undefined)
							accessDenied.call(undefined);
					}
				}
			});
		};
	}
});

/**
 * @class An interface enabling UI Components to be rendered
 * this shoulb be fixed
 * @interface
 */
CompositionRenderInterface = InterfaceImplementor.extend({
	
	implement: function(obj) {
		var _self = this;
		
		/**
		 * Render the UI Component.
		 * @methodOf CompositionRenderInterface#
		 * @name renderUIComposition
		 */
		obj.prototype.renderUIComposition = obj.prototype.renderUIComposition || function(model) {
			model =  model || this.config.model || {};
                        var temp =tmpl(this.className+"View", model);
			var composition = $(temp)[0];
			_self.processElement(this, this, composition, model);
		};
	},
	
	processElement: function(root, obj, composition, model) {
		var $composition = $(composition);
		var tagName = composition.tagName.toLowerCase();
		var children = $composition.children();
		var currentObject = obj;
		var config = JOOUtils.getAttributes(composition);
		var handlers = {};
		var bindings = undefined; 
		
		for(var i in config) {
			if (i.indexOf('handler:') != -1) {
				var event = i.substr(8);
				var fn = config[i];
				handlers[event] = new Function(fn);
				delete config[i];
			} else if (config[i].indexOf('#{') == 0) {				
				var expression = config[i].substr(2, config[i].length-3);
				config[i] = ExpressionUtils.express(model, expression);
				bindings = expression;
			}
		}
		
		switch(tagName) {
                    case "joo:composition":
                            for(var i in config) {
                                    var mutator = ExpressionUtils.getMutatorMethod(currentObject, i);
                                    mutator.call(currentObject, config[i]);
                            }
                            break;
                    case "joo:var":
                            var varName = $composition.attr('name');
                            currentObject = obj[varName];
                            break;
                    default:
                            /*
                            if (config.custom) {
                                    config.custom = eval('('+config.custom+')');
                            }
                            */
                            if (config.extstyles) {
                                    var temp = config.extstyles.split(";");
                                    var result = "{";
                                    for (var ii in temp){
                                        //console.log("temp[", ii, "] ",temp[ii].split(":"));
                                        if (temp[ii].split(":").length > 1 ){
                                            result += "'" + temp[ii].split(":")[0] + "':" + "'" + temp[ii].split(":")[1] + "', ";
                                        }
                                    }
                                    result += "}";
                                    config.custom = eval('('+result+')');                                
                            }
                            var className = ClassMapping[tagName.split(':')[1]];
                            if (window[className])
                                currentObject = new window[className](config);
                            else{
                                return {
                                    type: "pureHTML",
                                    html: composition
                                }
                            }
		}
		
		for(var i in handlers) {
			(function(i) {
				currentObject.addEventListener(i, function() {
					handlers[i].apply(root, arguments);
				})
			})(i);
		}
		
		if (bindings) {
			currentObject.dataBindings = bindings;
			currentObject.addEventListener('change', function() {
				root.dispatchEvent('bindingchanged', currentObject);
			});
		}
		
		var varName = $composition.attr('varName');
		if (varName) {
			root[varName] = currentObject;
		}
		
		for(var i=0; i<children.length; i++) {
			var child = this.processElement(root, currentObject, children[i], model);
                        if (child.type === "pureHTML"){
                            currentObject.access().append(child.html);
                        }
                        else{
                            currentObject.addChild(child);
                        }
		}
		return currentObject;
	}
});


Stage = UIComponent.extend(
/** @lends Stage# */
{
	setupBase: function(config){
		this.stage = this;
		this.id = config.id;
		this.allowMultiSelect = config.allowMultiSelect || true;
		this.selectedObjects = Array();
		this._super(config);
                this.registerObserver();
	},
        preRender: function(){
    
        },
	
	/**
	 * Get a list of current selected objects.
	 * @returns {Array} current selected objects
	 */
	getSelectedObjects: function() {
		return this.selectedObjects;
	},
	
	/**
	 * Delete all selected objects.
	 */
	deleteSelectedObjects: function() {
		for(var i=0;i<this.selectedObjects.length;i++) {
			this.selectedObjects[i].stageDeselect();
			this.selectedObjects[i].selfRemove();
		}
		this.selectedObjects = Array();
		this.dispatchEvent('selectedChange');
	},

	/**
	 * Deselect specific selected object.
	 * <p>Usually developers should use the {@link SelectableInterface} 
	 * rather than calling this method directly
	 * </p>
	 * @param {SelectableInterface} obj the object to be deselected.
	 * It <b>should</b> be a selected object.
	 */
	removeSelectedObject: function(obj) {
		if (typeof obj['stageDeselect'] == 'undefined')
			throw 'Object '+obj+' is not deselectable';
		var index = this.selectedObjects.indexOf(obj);
		if (index != -1) {
			obj.selected = false;
			obj.stageDeselect();
			this.selectedObjects.splice(index, 1);
			this.dispatchEvent('selectedChange');
/*			
			var subject = SingletonFactory.getInstance(Subject);
			subject.notifyEvent('ObjectDeselected', obj);*/
		}
	},
	
	/**
	 * Deselect all objects, which is previously selected under this Stage.
	 */
	deselectAllObjects: function() {
		for(var i=0;i<this.selectedObjects.length;i++) {
			this.selectedObjects[i].stageDeselect();
		}
		this.selectedObjects = Array();
		this.dispatchEvent('selectedChange');
		
/*		var subject = SingletonFactory.getInstance(Subject);
		subject.notifyEvent('AllObjectDeselected');*/
	},

	/**
	 * Add a component to the list of selected objects.
	 * It will call the <code>stageSelect</code> method
	 * of the component automatically.
	 * <p>
	 * If either <code>isMultiSelect</code> or <code>allowMultiSelect</code>
	 * is <code>false</code>, previously selected objects will be deselected.
	 * </p>
	 * @param {SelectableInterface} obj the object to selected
	 * @param {Boolean} isMultiSelect whether this selection is a multi-selection
	 */
	addSelectedObject: function(obj, isMultiSelect) {
		if (typeof obj['stageSelect'] == 'undefined')
			throw 'Object '+obj+' is not selectable';
		if (this.selectedObjects.indexOf(obj) != -1)
			return;
		
		if (isMultiSelect == undefined) isMultiSelect = false;
		if (!this.allowMultiSelect || !isMultiSelect) {
			this.deselectAllObjects();
		}
		obj.selected = true;
		obj.stageSelect();
		this.selectedObjects.push(obj);
		this.dispatchEvent('selectedChange');
		
		var subject = SingletonFactory.getInstance(Subject);
		subject.notifyEvent('ObjectSelected', obj);
	},
	
	setupDomObject: function(config) {
                // **TODO: This for making ui in xml 
		//this.domObject = JOOUtils.access(this.id);
                this.domObject = JOOUtils.accessCustom(this.toHtml());
		this.setAttribute('id', this.id);
		this.access().addClass('joo-'+this.className.toLowerCase());
		this.access().addClass('joo-uicomponent joo-stage');

		if (config.layout == undefined)
			config.layout = 'block';
		this.setLayout(config.layout);
		this.setupContextMenu();
	},
        onEndSwitchState: function(e){
            if (Models.pages.states[e.state] == this.name){
                this.onPageStartShow();
            }
        },                
        onPageStartShow: function(){
            //console.log("page " + this.name + " start show");
        },
        onStartSwitchState: function(e){
    
        }
}).implement(ObserverInterface);

JOOButton = UIComponent.extend(
/** @lends JOOButton# */		
{
	
	setupDomObject: function(config) {
		this._super(config);
		if (config.lbl != undefined) {
			this.access().html(config.lbl);
		}
		this.addEventListener('click', function(e) {
			this.onclick(e);
		});
//		this.addEventListener('mousedown', function(e) {
//			this.access().addClass('focus');
//		});
	},
	
	toHtml: function()	{
		return "<a></a>";
	},
	
	/**
	 * Command attached to the button.
	 * @param e the event object
	 */
	onclick: function(e) {}
});

JOOLabel = UIComponent.extend	(
/** @lends JOOLabel# */		
{
	setupDomObject: function(config) {
		this._super(config);
		this.access().html(config.lbl);
	},
	
	toHtml: function()	{
		return "<label></label>";
	},
	
	/**
	 * Get the text of the label
	 * @returns {String} the label's text
	 */
	getText: function()	{
		return this.access().html();
	},
	
	/**
	 * Change the text of the label
	 * @param {String} txt the new text
	 */
	setText: function(txt)	{
		this.access().html(txt);
	}
});



AjaxHandler = {
		
	handleResponse: function(ret, success, fail, url)	{
		/*
			audio service 
		*/
		
		var result = ret;
		// if (ret.contents == ""  || ret.contents == null || ret.contents == undefined){
			// result.Status = false;
		// }
		// else
		// if (ret.contents instanceof String){
			// result.Status = true;
			// result.Data = ret.contents;		
		// }
		// else{
			// /*
				// other service
			// */
			// result = ret.contents;	
		// }
		success.call(undefined, ret);
		/*
		if (result.Status)	{
			if (success != undefined)	{
				try {
					success.call(undefined, result.Data);
				} catch (err)	{
					log(err+" - "+url);
				}
			}
		} else if (result == 'internal-error') {
			var subject = SingletonFactory.getInstance(Subject);
			subject.notifyEvent('NotifyError', ret.message);
		} else {
			if (fail != undefined)	{
				try {
					fail.call(undefined, ret.message, ret.detail);
				} catch (err)	{
					log(err);
				}
			}
		}
		*/
	}
};
 
 /*
  * JOOService 
  */
 Service = EventDispatcher.extend({
	
	init: function(endpoint, method) {
		this._super();
		this.name = "DefaultService";
		this.endpoint = endpoint || "";
		this.method = method || "get";
	},
	
	run: function(params) {
		var _self = this;
		this.onAjax(this.endpoint, params, this.method, {
			onSuccess: function(ret) {
				ret = _self.parse(ret);
				_self.dispatchEvent('success', ret);
				//JOOUtils.generateEvent('ServiceSuccess', this.name, ret);
			},
			onFailure: function(msg) {
				msg = _self.parseError(msg);
				_self.dispatchEvent('failure', msg);
				//JOOUtils.generateEvent('ServiceFailure', this.name, msg);
			}
		});
	},
	
	parse: function(ret) {
		return ret;
	},
	
	parseError: function(msg) {
		return msg;
	},
	
	getEndPoint: function() {
		return this.endpoint;
	}
}).implement(AjaxInterface);

ObjectManager = Class.extend(
/** @lends ObjectManager# */
{
	/**
	 * Initialize fields
	 * @class Manage a set of objects. 
	 * @augments Class
	 * @constructs
	 */
	init: function()	{
		this.objects = new Array();
		this.context = null;
		this.mainObjects = new Array();
	},

	/**
	 * Register an object to be managed by this
	 * @param {Object} obj the object to register
	 */
	register: function(obj)	{
		this.objects.push(obj);
	},
	
	/**
	 * Register a context
	 * @param {Object} obj the context to register
	 */
	registerContext: function(obj)	{
		this.context = obj;
	},
	
	/**
	 * Register main object.
	 * Main object is the one visualizing the idea, a main object usually is a collection of main image
	 * and other thing support for the display
	 * @param {Object} obj the main object
	 */
	registerMainObjects: function(obj)	{
		this.mainObjects.push(obj);
	},
	
	/**
	 * Retrieve main objects.
	 * @returns {mixed} the main objects
	 */
	getMainObjects: function(){
		return this.mainObjects;
	},

	/**
	 * Remove object from the list.
	 * @param {Object} obj the object to be removed
	 */
	remove: function(obj)	{
		/*
		* remove from display
		*/
		var i = this.findIndex(obj.id);
		if (i != -1)	{
			this.objects.splice(i, 1);
		}
		/*
		* remove from mainObjects array
		*/
		for(var j=0;j<this.mainObjects.length;j++)	{
			if(obj.id == this.mainObjects[j].id)		{
				this.mainObjects.splice(j,1);
			}
		}
	},
	
	/**
	 * Find an object using its ID.
	 * @param {mixed} objId the id of the object to be found
	 * @returns {mixed} the object or undefined
	 */
	find: function(objId)	{
		var i = this.findIndex(objId);
		if (i == -1)
			return undefined;
		return this.objects[i];
	},
	
	/**
	 * Find the index of the object having specific ID
	 * @param {Object} objId the id of the object to be found
	 * @returns {mixed} the index of the object or -1
	 */
	findIndex: function(objId)	{
		for(var i=0;i<this.objects.length;i++)	{
			if (objId == this.objects[i].id)	{
				return i;
			}
		}
		return -1;
	}
});




Application = Class.extend(
/** @lends Application# */
{
	/**
	 * Initialize fields
	 * @class This class is the entrypoint of JOO applications. 
	 * @singleton
	 * @augments Class
	 * @constructs
	 * @see SingletonFactory#getInstance
	 */
	init: function(){
		if(Application.singleton == undefined){
			throw "Singleton class, can not be directly created !";
			return undefined;
		}
		this.systemProperties = new SystemProperty();
		this.resourceManager = new ResourceManager();
	},
	
	/**
	 * Access the application's resource manager
	 * @returns {ResourceManager} the application's resource manager
	 */
	getResourceManager: function()	{
		return this.resourceManager;
	},
	
	/**
	 * Change the application's resource manager
	 * @param {ResourceManager} rm the resource manager to be used
	 */
	setResourceManager: function(rm)	{
		this.resourceManager = rm;
	},
	
	/**
	 * Get the system properties array
	 * @returns {SystemProperty} the system properties
	 */
	getSystemProperties: function()	{
		return this.systemProperties;
	},
		
	/**
	 * Start the application. This should be called only once
	 */
	begin: function(){            
            this.page = new Page();
            this.page.access().appendTo("#Application-Main");
            this.page.run();
	},

	/**
	 * Get the application's object manager
	 * @returns {ObjectManager} the application's object manager
	 */
	getObjectManager: function()	{
		if (this.objMgr == undefined)
			this.objMgr = new ObjectManager();
		return this.objMgr;
	}
});

Page = DisplayObjectContainer.extend(
/** @lends Page# */
{
	/**
	 * Adds & loads portlets to the page.
	 * It will also handle portlets lifecycle. Portlets which are no longer needed
	 * will be unloaded. Portlets which exists between multiple pages will be
	 * reloaded.
	 */
        init: function(config)	{
		this._super(config);
	},
        
	attachStages: function(){
            this.stages = [];            
            for (var ii in Models.pages.states){
                var fn = window[Models.pages.states[ii]];                
                var fnPresenter = window[Models.pages.presenter[ii]];                 
                this.stages[ii] = new fn({id: ii});
                if (fnPresenter){
                    var presenter = new fnPresenter(this.stages[ii]);
                }                
                this.stages[ii].preRender();
                this.addChild(this.stages[ii]);
            }
            JOOUtils.selectStage(Models.pages["default-state"]);    
	},
	/**
	 * Attach plugins to the page. 
	 * Plugins are treated the same way as portlets.
	 */
	attachPlugins: function(){
		
	},

	/**
	 * Called when the page begins its routine.
	 * Parse the layout and attach plugins.
	 * @param {String} pagename the page name
	 */
	onBegin: function(pagename){
//		var data = this.generateData(pagename);
//		if (data == undefined)
//			return;
//		this.pagename = pagename;
//		this.layout = data.layout;
//		this.plugins = data.plugins;S
		this.attachPlugins();
		JOOUtils.generateEvent("PageBegan");
	},
	
	/**
	 * Execute the page, attach portlets.
	 */
	run: function()	{
		this.attachStages();
		JOOUtils.generateEvent("AllStagesAdded");		
	},
	
	onEnd: function(){
		
	},
	
	dispose: function(){
		
	},
	
	toString: function() {
		return "Page";
	},
        toHtml: function(){
            return "<div>";
        }
});

PluginManager = Class.extend(
/** @lends PluginManager# */	
{
	/**
	 * Initialize fields
	 * @class Manages all registered plugins
	 * @singleton
	 * @augments Class
	 * @implements ObserverInterface
	 * @constructs
	 */
	init: function()	{
		if(PluginManager.singleton == undefined){
			throw "Singleton class, can not be directly created !";
			return undefined;
		}
		var subject = SingletonFactory.getInstance(Subject);
		subject.attachObserver(this);
		this.plugins = Array();
	},
	
	/**
	 * Add plugin to the manager
	 * @param {PluginInterface} plugin the plugin to be added
	 * @param {Boolean} delay whether the plugin should not be loaded after added
	 */
	addPlugin: function(plugin, delay)	{
		if (delay != true)
			plugin.onLoad();
		this.plugins.push(plugin);
	},
	
	/**
	 * Remove plugin at the specified index
	 * @param {Number} index the index of the plugin to be removed
	 */
	removePlugin: function(index)	{
		var plugin = this.plugins[index];
		if (plugin != undefined)	{
			plugin.onUnload();
			this.plugins.splice(index, 1);
		}
	},
	
	/**
	 * Get all plugins
	 * @returns {Array} the current maintained plugins
	 */
	getPlugins: function()	{
		return this.plugins;
	},
	
	/**
	 * Remove every plugins managed by this manager
	 */
	removeAllPlugins: function()	{
		for(var i=0;i<this.plugins.length;i++)	{
			var plugin = this.plugins[i];
			if (plugin.isLoaded())	{
				plugin.onUnload();
			}
		}
		this.plugins = Array();
	},
	
	/**
	 * Triggered by the Subject and in turn triggers all plugins that it manages
	 * @param {String} eventName the event name
	 * @param {Object} eventData the event data
	 */
	notify: function(eventName, eventData)	{
		for(var i=0;i<this.plugins.length;i++)	{
			var plugin = this.plugins[i];
			if (plugin.isLoaded())	{
				var methodName = "on"+eventName;
				if (typeof plugin[methodName] != 'undefined')	{
					var method = plugin[methodName];
					method.call(plugin, eventData);
				}
			}
		}
	},
	
	toString: function() {
		return "PluginManager";
	}
}).implement(ObserverInterface);

/**
 * @class The plugin interface. Every plugins must implement this interface.
 * A plugin is a class which provides extra functions via "Event Hook". It
 * registers a list of hooks which is called automatically in the corresponding
 * events.
 * @augments ObserverInterface
 * @interface
 */
PluginInterface = InterfaceImplementor.extend({
	implement: function(obj)	{

		obj.prototype.toString = obj.prototype.toString || function() {
			return this.name;
		};
		
		/**
		 * Get the init parameters supplied by configuration.
		 * This is usually configured in a <code>layout.txt</code>
		 * @methodOf PluginInterface#
		 * @name getInitParameters 
		 * @returns {Array} the init parameters supplied by configuration
		 */
		obj.prototype.getInitParameters = obj.prototype.getInitParameters || function()	{
			if (this.initParams == undefined)
				this.initParams = Array();
			return this.initParams;
		};
		
		/**
		 * Change the init parameters. This method is not intended to be used
		 * by developers.
		 * @methodOf PluginInterface#
		 * @name setInitParameters 
		 * @param {Object} params the init parameters
		 */
		obj.prototype.setInitParameters = obj.prototype.setInitParameters || function(params)	{
			this.initParams = params;
		};

		/**
		 * Test if the plugin is loaded.
		 * @methodOf PluginInterface#
		 * @name isLoaded 
		 * @param {Boolean} <code>true</code> if the plugin is successfully loaded
		 */
		obj.prototype.isLoaded = obj.prototype.isLoaded || function()	{
			if (this.loaded == undefined)
				this.loaded = false;
			return this.loaded;
		};
		
		/**
		 * Get the plugin name.
		 * @methodOf PluginInterface#
		 * @name getName
		 * @param {String} the name of the plugin
		 */
		obj.prototype.getName = obj.prototype.getName || function()	{
			return this.className;
		};
		
		/**
		 * Called automatically by {@link PluginManager} when the plugin is
		 * loaded . Change the status of the plugin and call the 
		 * <code>onBegin</code> method. Developers should override the 
		 * <code>onBegin</code> method instead.
		 * @methodOf PluginInterface#
		 * @name onLoad
		 */
		obj.prototype.onLoad = obj.prototype.onLoad || function()	{
			this.loaded = true;
			this.onBegin();
		};
		
		/**
		 * Called inside <code>onLoad</code> method. Developers can override this
		 * method to do some stuffs when the plugin is loaded.
		 * @methodOf PluginInterface#
		 * @name onBegin
		 */
		obj.prototype.onBegin = obj.prototype.onBegin || function() {};
		
		/**
		 * Called inside <code>onUnload</code> method. Developers can override this
		 * method to release resources before the plugin is unloaded.
		 * @methodOf PluginInterface#
		 * @name onEnd
		 */
		obj.prototype.onEnd = obj.prototype.onEnd || function() {};
		
		/**
		 * Called automatically by {@link PluginManager} when the plugin is
		 * no longer need. Change the status of the plugin and call the 
		 * <code>onEnd</code> method. Developers should override the 
		 * <code>onEnd</code> method instead.
		 * @methodOf PluginInterface#
		 * @name onUnload
		 */
		obj.prototype.onUnload = obj.prototype.onUnload || function()	{
			this.loaded = false;
			this.onEnd();
		};
		
		//super interfaces
		new ObserverInterface().implement(obj);
	}
});



function log(msg, omitStackTrace)	{
	if (window["console"] != undefined)	{
		console.error(msg);
		if (!omitStackTrace) {
			printStackTrace(msg);
		}
	}
}

function printStackTrace(e) {
	var callstack = [];
	var isCallstackPopulated = false;

	console.log('Stack trace: ');
	if (e.stack) { //Firefox
		var lines = e.stack.split('\n');
	    for (var i=0, len=lines.length; i<len; i++) {
//	    	if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
//	    		callstack.push(lines[i]);
//	    	} else {
//	    		var index = lines[i].indexOf(')');
//	    		if (index != -1)
//	    			lines[i] = lines[i].substr(index);
	    		callstack.push(lines[i]);
//	    	}
	    }
	    //Remove call to printStackTrace()
	    callstack.shift();
	    isCallstackPopulated = true;
	} else if (window.opera && e.message) { //Opera
		var lines = e.message.split('\n');
		for (var i=0, len=lines.length; i<len; i++) {
			if (lines[i].match(/^\s*[A-Za-z0-9\-_\$]+\(/)) {
				var entry = lines[i];
				//Append next line also since it has the file info
				if (lines[i+1]) {
		            entry += ' at ' + lines[i+1];
		            i++;
				}
				callstack.push(entry);
	        }
		}
	    //Remove call to printStackTrace()
	    callstack.shift();
	    isCallstackPopulated = true;
	}
	if (!isCallstackPopulated) { //IE and Safari
		var currentFunction = arguments.callee.caller;
		while (currentFunction && callstack.length <= 100) {
			isCallstackPopulated = true;
			var fn = currentFunction.toString();
		    var fname = fn.substring(fn.indexOf('function') + 8, fn.indexOf('{')) || 'anonymous';
		    callstack.push(fname);
		    currentFunction = currentFunction.caller;
		}
	}
	for(var i=0; i<callstack.length; i++) {
		console.log(callstack[i]);
	}
}

function tmpl(tmpl_id,data) {
	try {
		if ( typeof tmpl.cache == 'undefined' ) {
			tmpl.cache = new Array();
	    }
		if( tmpl.cache[tmpl_id]!=null ){
			var fn = tmpl.cache[tmpl_id];
			return fn(data);
		}
		str = document.getElementById(tmpl_id).innerHTML;
		str = str.replace(/\\/g, "@SPC@");
		str = str.replace(/'/g, "&apos;");
		fnStr = "var p=[],print=function(){p.push.apply(p,arguments);};" +
	    
	    // Introduce the data as local variables using with(){}
	    "with(obj){p.push('" +
	    
	    // Convert the template into pure JavaScript
	    str
	      .replace(/[\r\t\n]/g, " ")
	      .split("<%").join("\t")
	      .replace(/((^|%>)[^\t]*)'/g, "$1\r")
	      .replace(/\t=(.*?)%>/g, "',$1,'")
	      .split("\t").join("');")
	      .split("%>").join("p.push('")
	      .split("\r").join("\\'")
	  + "');}return p.join('');";
		fnStr = fnStr.replace(/@SPC@/g, "\\");
		var fn = new Function("obj", fnStr);
		tmpl.cache[tmpl_id] = fn;
		return fn(data);
	} catch (e) {
		log(e+":"+tmpl_id, 'rendering');
		return "";
	}
}
utils_items = {};

/**
 * Generate an unique ID
 * @param {String} type the type used for generation
 * @returns an unique ID
 */
function generateId(type)	{
	if (!isPropertySet(utils_items, type))	{
		setProperty(utils_items, type, 0);
	}
	setProperty(utils_items, type, getProperty(utils_items, type)+1);
	return type+"-"+getProperty(utils_items, type);
}

function setProperty(obj, prop, val)	{
	obj.prop = val;
}

function getProperty(obj, prop)	{
	return obj.prop;
}

function isPropertySet(obj, prop)	{
	if (typeof obj.prop != 'undefined')	{
		return true;
	}
	return false;
}
