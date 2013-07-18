/*
 * idea - original class(effect) : DungBa / Nhung
 * form to class : anhnt
 * extend effect : phuongvm
 * 
 * @ the shortcoming of this is almost using css3 transform animation which is running smothly on mobile device
 *  but when we use multiple of transform animation , the object just relize the relative position to original position
 *  
 */
AnimationTypesHelper = {
        rollAndFly : {
            name : "Roll and Fly",
            action : "rollAndFly",
            type : "flyOrJumpAnimations",
            config :{
                time: 1100,
                height: 200,
                soundname: ""
            }
        },
        flyAndRoll : {
            name : "Fly And Roll",
            action : "flyAndRoll",
            type : "flyOrJumpAnimations",
            config :{
                time: 1100,
                height: 200,
                soundname: ""
            }
        },
        ballFlyRoll: {
            name : "Ball Fly Roll",
            action: "ballFlyRoll",
            type : "flyOrJumpAnimations",
            config :{
                time: 1300,
                height: 200,
                soundname: ""
            }
        },
        realJump : {
            name : "Real Jump",
            action : "realJump",
            type : "flyOrJumpAnimations",
            config :{
                time: 1000,
                originx: 50,
                originy: 100,
                height: 100,
                soundname: ""
            }
        },
        simpleJump : {
            name : "Simple Jump",
            action : "simpleJump",
            type : "flyOrJumpAnimations",
            config :{
                time: 800,
                height: 80,
                soundname: ""
            }
        },
        magicFly : {
            name : "Magic Fly",
            action : "magicFly",
            type : "flyOrJumpAnimations",
            config :{
                time: 9300,
                originx: 50,
                originy: 100,
                height: 350,
                soundname: ""
            }
        },
        flyAndShake:{
            name : "Fly And Shake",
            action : "flyAndShake",
            type : "flyOrJumpAnimations",
            config :{
                time: 2100, 
                height: 50,
                soundname: ""
            }
        },
        ballEffect :{
            name : "Ball effect",
            action : "ballEffect",
            type : "flyOrJumpAnimations",
            config :{
                height: 100, 
                time: 500,
                soundname: ""
            }
        },
//    },
//    stableAnimations : {
		playSprite: {
			name : "Play (Sprite/Audio/Video)",
            action : "playSprite",
            type : "stableAnimations",
            config : {
                time: 2000,
                soundname: ""
            }
		},
        rollOnly: {
            name : "Roll Only",
            action : "rollOnly",
            type : "stableAnimations",
            config :{
                time: 1300,
                originx: 50,
                originy: 0,
                soundname: ""
            }
        },
        treeShake : {
            name : "Tree Shake",
            action: "treeShake",
            type : "stableAnimations",
            config :{
                time:2050, 
                originx: 50,
                originy: 100,
                soundname: ""
            }
        },
        leafFalling : {
            name : "Leaf Falling ",
            action: "leafFalling",
            type : "stableAnimations",
            config :{
                time: 10810,
                height: 500,
                direct: 'left',
                soundname: ""
            }
        },
        bounce : {
            name : "Bounce",
            action : "bounce",
            type : "stableAnimations",
            config : {
                time: 800,
                originx: 50,
                originy: 100,
                soundname: ""
            }
        },
        pendulum : {
            name : "Pendulum ",
            action : "pendulum",
            type : "stableAnimations",
            config : {
                time: 3600,
                originx: 50,
                originy: 0,
                soundname: ""
            }
        },
        pureOpacity :{
        	name : "pureOpacity",
            action : "pureOpacity",
            type : "stableAnimations",
            config : {
                starttime: 500,
				opacity1 :0,
				endtime :500,
				opacity2 :1,
				datetime :1000,
				count :1,
                soundname: ""
            }
        },
//    },
//    opacityAnimations : {
        appearOneTime :{
            name : "Appear one time",
            action : "appearOneTime",
            type : "opacityAnimations",
            config : {
                time: 1000,
                soundname: ""
            }
        },
       
        flyThenDisappear : {
            name : "Fly then disappear",
            action : "flyThenDisappear",
            type : "opacityAnimations",
            config :{
                time: 1000,
                transx: 80,
                transy: -150,
                soundname: ""
            }
        },
       
        flyThenAppearAgain : {
            name : "Fly then appear again ",
            action : "flyThenAppearAgain",
            type : "opacityAnimations",
            config :{
                time: 800,
                transx: 200,
                transy: 400,
                soundname: ""
            }
        },
        
        wheelRotate : {
            name : "Wheel rotate ",
            action : "wheelRotate",
            type : "stableAnimations",
            config :{
                time: 1000,
				status:1,
                speed: 1000,
                soundname: ""
            }
        },
        waveHand :{
        	name : "Wave hand",
        	action : "waveHand",
        	 type : "stableAnimations",
            config :{
                time: 1000,
                originx: 50,
                originy: 100,
                degfirst : 20,
                deglast : -10,
                count :1,
                soundname: ""
            }
        },
         scaleUpDown :{
            name : "Scale up down",
            action : "scaleUpDown",
            type : "stableAnimations",
            config : {
                time: 1000,
                soundname: ""
            }
        },
        moveNewPosition :{
        	name : "Move new position",
        	action : "moveNewPosition",
        	 type : "stableAnimations",
            config :{
                time: 1000,
               	posx : 0,
               	posy : 0,
				posz : 0,
                soundname: ""
                
            }
        },
        moveThenComeBack :{
        	name : "Move then come back",
        	action : "moveThenComeBack",
        	 type : "stableAnimations",
            config :{
                time: 1000,
               	posx : 0,
               	posy : 0,
				posz : 0,
                soundname: ""
                
            }
        },
        moveSmooth :{
        	name : "Move Smooth",
        	action : "moveSmooth",
        	 type : "stableAnimations",
            config :{
                time: 1000,
               	posx : 0,
               	posy : 0,
				posz : 0,
               	count: 1,
                soundname: ""
                
            }
        },
        jumpOnTime :{
        	name : "Jump on Time  ",
        	action : "jumpOnTime",
        	 type : "stableAnimations",
            config :{
                time: 1000,
               	count : 1,
               	height : 20,
                soundname: ""
                
            }
        },
        rotateDeg :{
        	name : "Rotate deg",
        	action : "rotateDeg",
        	 type : "stableAnimations",
            config :{
                time: 1000,
               	rotatex : 0 ,
				rotatey : 0,
				rotate : 0,
               	originx: 50,
               	originy: 0,
                soundname: ""
                
            }
        },
         moveAndRoll:{
        	name : "Move and roll ",
        	action : "moveAndRoll",
        	 type : "stableAnimations",
            config :{
                time: 1000,
               	positionx : 100,
               	positiony : 100,
                soundname: ""
                
            }
        },
        scaleObject:{
        	name: "Scale Object",
        	action : "scaleObject",
        	type : "stableAnimations",
            config :{
                time: 1000,
               	scalex : 1,
               	scaley : 1,
				scalez : 1,
               	originx : 50,
               	originy : 100,
               	count : 1,
                soundname: ""
                
            }
        },
        flyThenScale:{
        	name: "Fly then scale",
        	action : "flyThenScale",
        	type : "stableAnimations",
            config :{
                time: 1000,
               	scalex : 1,
               	scaley : 1,
				scalez : 1,
               	posx :100,
               	posy :100,
               	count : 1,
                soundname: ""
                
            }
        },
        scaleObjectOnly:{
        	name: "Scale object Only",
        	action : "scaleObjectOnly",
        	type : "stableAnimations",
            config :{
                time: 1000,
                originx:50,
                originy:50,
               	scalex : 1,
               	scaley : 1,
				scalez : 1,
                soundname: ""
        }
        
        },

        opacityObject :{
        	name: "Opacity Object",
        	action : "opacityObject",
        	type : "stableAnimations",
            config :{
                time: 1000,
                opacity:0,
                soundname: ""
        }
        },
		textScale:{
			name: "Text Scale",
        	action : "textScale",
        	type : "stableAnimations",
            config :{
                time: 1000,
				originx:50,
				originy:50,
                count:1,
                soundname: ""
        }
		},
		textScaleRevert:{
			name: "Text Scale Revert",
        	action : "textScaleRevert",
        	type : "stableAnimations",
            config :{
                time: 1000,
				originx:50,
				originy:50,
                count:1,
                soundname: ""
        }
		},
		moveThenComebackOnTime:{
			name :"Move Then Comeback On Time",
			action :"moveThenComebackOnTime",
			type:"stableAnimations",
			config :{
				time: 1000,
               	posx : 100,
               	posy : 100,
				posz : 0,
				endtime :1000,
				count : 1,
                soundname: ""
			}
		},
        doNothing:{
			name :"Do Nothing",
			action :"doNothing",
			type:"stableAnimations",
			config :{
				time: 1000
        	}
		},
		springEffect:{
			name :"Spring Effect",
			action :"springEffect",
			type:"stableAnimations",
			config :{
				time :1000,
				originx :50,
				originy :100,
				height :200,
				count :1,
				soundname: ""
			}
		},
		rotateDegThenComeback:{
			name:"RotateDeg then comeback",
			action:"rotateDegThenComeback",
			type:"stableAnimations",
			config:{
				time : 1000,
				endtime :100,
				originx : 50,
				originy : 50,
				rotatex : 30,
				rotatey : 0,
				rotatez : 0, 
				count : 1,
				soundname : ""
			}
		},
		springBounce:{
			name:"Spring Bounce",
			action:"springBounce",
			type:"stableAnimations",
			config:{
				time:1000,
				originx:50,
				originy:100,
				height:10,
				count:1,
				soundname : ""
			}
		},
		flyThenRotate:{
			name:"Fly Then Rotate",
			action :"flyThenRotate",
			type:"stableAnimations",
			config:{
				time:1000,
				originx:50,
				originy:100,
				posx:0,
				posy:-100,
				posz:0,
				rotatex:0,
				rotatey:0,
				rotate:30,
				count:1,
				soundname : ""
			}
		},
//    customAnimations : {
        customAnimations : {
            name : "Custom animation yourself",
            action : "customAnimations",
            config :{
                time: 0,
                soundname: ""
            }
        }
//    }
}



AnimationHelperFactory = {

	createHelper : function(name, config) {
		name = name.substring(0, 1).toUpperCase() + name.substring(1);
		var cls = window[name + "AnimationHelper"];
		if (!cls)
			throw new Error("Animation of type '" + name + "' is not defined");
		config = config || {};
		var helper = new cls(config);
		return helper;
	}
};

AnimationUtils = {
	animation: function (obj, time, att, originx, originy, scax, scay, scaz, rotatez, rotatey, rotatex, transx, transy, transz) {
		obj.setStyle('-webkit-transition', '-webkit-transform '+time+'ms '+att+'');
		if (originx && (typeof(originx) != 'string' || originx.indexOf('px') == -1)) {
			originx += '%';
		}
		//console.log("originy animationUtils : ",originy);
		if (originy && (typeof(originy) != 'string' || originy.indexOf('px') == -1)) {
			originy += '%';
		}
		obj.setStyle('-webkit-transform-origin',originx+' ' +originy);
		obj.setStyle('-webkit-transform','translate3d('+transx+'px,' +transy+'px,' +transz+'px) scale3d('+scax+',' +scay+','+scaz+') rotateX('+rotatex+'deg) rotateY('+rotatey+'deg) rotateZ('+rotatez+'deg) ');
	},
	setOrigin : function(obj,originx,originy){
		if (originx && (typeof(originx) != 'string' || originx.indexOf('px') == -1)) {
			originx += '%';
		}
		//console.log("originy animationUtils : ",originy);
		if (originy && (typeof(originy) != 'string' || originy.indexOf('px') == -1)) {
			originy += '%';
		}
		obj.setStyle('-webkit-transform-origin',originx+' ' +originy);
	},
	setOpacity: function(obj, time, att, opac){
		obj.setStyle('-webkit-transition', 'opacity '+time+'ms '+att+'');
		obj.setStyle('opacity',+opac);
	},
	
	rotateOnly: function(obj, time, att, originx, originy, rotate){
		obj.setStyle('-webkit-transition', '-webkit-transform '+time+'ms '+att+'');
		if (originx && (typeof(originx) != 'string' || originx.indexOf('px') == -1)) {
			originx += '%';
		}
		if (originy && (typeof(originy) != 'string' || originy.indexOf('px') == -1)) {
			originy += '%';
		}
		obj.setStyle('-webkit-transform-origin',originx+' ' +originy);
		obj.setStyle('-webkit-transform','rotate('+rotate+'deg)');
	},
	
	scaleOnly: function(obj, time, att, originx, originy, scax, scay){
		if (originx && (typeof(originx) != 'string' || originx.indexOf('px') == -1)) {
			originx += '%';
		}
		if (originy && (typeof(originy) != 'string' || originy.indexOf('px') == -1)) {
			originy += '%';
		}
		obj.setStyle('-webkit-transition', '-webkit-transform '+time+'ms '+att+'');
		obj.setStyle('-webkit-transform-origin',originx+' ' +originy);
		obj.setStyle('-webkit-transform','scale('+scax+',' +scay+')');
	},
	
	moveOnly: function(obj, time, att, transx, transy){
		obj.setStyle('-webkit-transition', '-webkit-transform '+time+'ms '+att+'');
		obj.setStyle('-webkit-transform-origin','50% 50%');
		obj.setStyle('-webkit-transform','translate3d('+transx+'px,' +transy+'px, 0px)');
	},
	
	runUtilsAnimation: function(actionName, arg, obj) {
		if (obj._interacting) return;
		obj._interacting = true;
                
		var fn = AnimationUtils[actionName];
		arg.unshift(obj);
		fn.apply(undefined, arg);
        
		setTimeout(function() {
			obj._interacting = false;
			obj.setStyle('-webkit-transition', '');
			obj.setStyle('-webkit-transform', '');
			obj.setStyle('opacity', '1');
		}, 1500);
	},
	
	runDefaultAnimation: function(actionName, arg, obj) {
		if (arg.soundname) {
			if (obj._interacting)
				return;
			var sound = new Audio();
			sound.src = arg.soundname;
			sound.play();
			if (arg.time) {
				obj._interacting = true;
				setTimeout(function() {
					obj._interacting = false;
				}, arg.time);
			}
		}
	},
	
	runFlyJumpAnimation: function(actionName, arg, obj) {
		var helper = AnimationHelperFactory.createHelper(actionName, arg);
		helper.animate(obj);
	},
	
	runStableAnimation: function(actionName, arg, obj) {
		var helper = AnimationHelperFactory.createHelper(actionName, arg);
		helper.animate(obj);
	},
	
	runOpacityAnimation: function(actionName, arg, obj) {
		var helper = AnimationHelperFactory.createHelper(actionName, arg);
		helper.animate(obj);	
		return;
		setTimeout(function() {			
			obj.setStyle('-webkit-transition', '');
			obj.setStyle('-webkit-transform', '');
			obj.setStyle('opacity', '1');
		}, 1500);
	}
}

AbstractAnimationHelper = Class.extend({

	init : function(config) {
		this.config = config || {};
	},

	animate : function(obj, config) {
		if (obj._interacting) return;
		obj._interacting = true;
		if (config) {
			for(var i in config)
				this.config[i] = config[i];
		}
		if (this.config.origin)
			obj.setStyle('-webkit-transform-origin', this.config.origin.x + '% ' + this.config.origin.y + '%');
		if (this.config.soundname) {
			var audio = new Audio();
			audio.src = this.config.soundname;
			audio.play();
		}
		
		this.doAnimate(obj, config);
	},
	
	animation: function (obj, time, att, originx, originy, scax, scay, scaz, rotatez, rotatey, rotatex, transx, transy, transz) {
		AnimationUtils.animation(obj, time, att, originx, originy, scax, scay, scaz, rotatez ,rotatey, rotatex, transx, transy, transz);
	},
	
	setOpacity: function(obj, time, att, opac){
		AnimationUtils.setOpacity(obj, time, att, opac);
	},
		
	doAnimate: function(obj, config) {
	}
});	

DefaultAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		_self.config.time = _self.config.time || 2000;
		_self.config.maxScale = _self.config.maxScale || 1.3;
		_self.config.minScale = _self.config.minScale || 0.8;
		
		_self.animation(obj, _self.config.time/4, 'linear', 50, 50, _self.config.maxScale, _self.config.maxScale, 1, 0, 0, 0, 0, 0, 0);
		setTimeout(function() {
			_self.animation(obj, _self.config.time/4, 'linear', 50, 50, _self.config.minScale, _self.config.minScale, 1, 0, 0, 0, 0, 0, 0);
			setTimeout(function() {
				_self.animation(obj, _self.config.time/4, 'linear', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
				setTimeout(function() {
					obj._interacting = false;
				}, _self.config.time / 4);
			}, _self.config.time / 2);
		}, _self.config.time / 2);
	}
});

TransparentAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		_self.config.time = _self.config.time || 800;
		_self.config.maxScale = _self.config.maxScale || 1.5;
		
		_self.animation(obj, _self.config.time, 'ease-out', 50, 50, _self.config.maxScale, _self.config.maxScale, 1, 0, 0, 0, 0, 0, 0);
		_self.setOpacity(obj, _self.config.time, 'ease-out', 0);
		setTimeout(function() {
			_self.animation(obj, 1, 'ease-out', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
			_self.setOpacity(obj, 1, 'ease-out', 0.85);
			obj._interacting = false;
		}, _self.config.time);
	}
});

BounceAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		_self.config.time = _self.config.time || 800;
		_self.config.originx = _self.config.originx || 50;
		_self.config.originy = _self.config.originy || 100;
		_self.animation(obj, _self.config.time/2, 'ease-out', _self.config.originx, _self.config.originy, 1.1, 0.8, 1, 0, 0, 0, 0, 0, 0);
		setTimeout(function(){
			_self.animation(obj, _self.config.time/4, 'ease-in', _self.config.orriginx, _self.config.originy, 0.9, 1.2, 1, 0, 0, 0, 0, 0, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/4, 'ease-in', _self.config.originx, _self.config.originy, 1, 1, 1, 0, 0, 0, 0, 0, 0);
				setTimeout(function(){
					obj._interacting = false;
				}, _self.config.time/4+10);
			}, _self.config.time/4+10);
		}, _self.config.time/2+10);
	}
});

RollAndFlyAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		obj._countRollFly = obj._countRollFly || 0;
		_self.config.time = _self.config.time || 1100;
		_self.config.height = _self.config.height || 300;
		if(obj._countRollFly == 0){
			obj._countRollFly = 1;
			_self.animation(obj, _self.config.time/1.375, 'ease-out',50, 100, 1, 1, 1, 360, 0, 0, 0, -_self.config.height, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/3.667, 'ease-in',50, 100, 1, 1, 1, 360, 0, 0, 0, 0, 0);
				setTimeout(function() {
					obj._interacting = false;
				}, _self.config.time/3.667);
			}, _self.config.time/1.375);
		}
		else if(obj._countRollFly == 1){
			obj._countRollFly = 0;
			_self.animation(obj, _self.config.time/1.375, 'ease-out',50, 100, 1, 1, 1, 0, 0, 0, 0, -_self.config.height, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/3.667, 'ease-in',50, 100, 1, 1, 1,0, 0, 0, 0, 0, 0);
				setTimeout(function() {
					obj._interacting = false;
				}, _self.config.time/3.667);
			}, _self.config.time/1.375);
		}	
	}
});


FlyAndRollAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		obj._countFlyRoll = obj._countFlyRoll || 0;
		_self.config.time = _self.config.time || 1050;
		_self.config.height = _self.config.height || 300;
		if( obj._countFlyRoll == 0){			
			obj._countFlyRoll = 1;
			_self.animation(obj, _self.config.time/3.5, 'ease-in',50, 100, 1, 1, 1, 0, 0, 0, 0, -_self.config.height, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/1.4, 'ease-in',50, 100, 1, 1, 1, 360, 0, 0, 0, 0, 0);
				setTimeout(function() {
					obj._interacting = false;
				}, _self.config.time/1.4+10);
			}, _self.config.time/3.5+10);
		}
		else if(obj._countFlyRoll == 1){
			obj._countFlyRoll = 0;
			_self.animation(obj, _self.config.time/3.5, 'ease-in',50, 100, 1, 1, 1, 360, 0, 0, 0, -_self.config.height, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/1.4, 'ease-in',50, 100, 1, 1, 1, 0, 0, 0, 0, 0, 0);
				setTimeout(function() {
					obj._interacting = false;
				}, _self.config.time/1.4+10);
			}, _self.config.time/3.5+10);
		}			
	}
});

BallFlyRollAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		obj._countBallFly = obj._countBallFly || 0;
		_self.config.time = _self.config.time || 1300;
		_self.config.height = _self.config.height || 300;	
		if( obj._countBallFly == 0){
			obj._countBallFly = 1;
			_self.animation(obj, _self.config.time/1.444, 'ease-out',50, 50, 1, 1, 1, 720, 0, 0, 0, -_self.config.height, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/3.25, 'ease-in',50, 50, 1, 1, 1, 720, 0, 0, 0, 0, 0);
				setTimeout(function() {
					obj._interacting = false;
				}, _self.config.time/3.25+10);
			}, _self.config.time/1.444+10);
		}
		else if(obj._countBallFly == 1){
			obj._countBallFly = 0;
			_self.animation(obj, _self.config.time/1.444, 'ease-out',50, 50, 1, 1, 1, 0, 0, 0, 0, -_self.config.height, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/3.25, 'ease-in',50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
				setTimeout(function() {
					obj._interacting = false;
				}, _self.config.time/3.25+10);
			}, _self.config.time/1.444+10);
		}			 
	}
});

FlyAndShakeAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		_self.config.time = _self.config.time || 2100;
		_self.config.height = _self.config.height || 300;			
		_self.animation(obj, _self.config.time/5.25, 'ease-out', 50, 50, 1, 1, 1, 0, 0, 0, 0, -_self.config.height, 0);
		setTimeout(function(){
			_self.animation(obj, _self.config.time/7, 'linear', 50, 50, 1, 1, 1, -20, 0, 0, 0, -_self.config.height, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/7, 'linear', 50, 50, 1, 1, 1, 15, 0, 0, 0, -_self.config.height, 0);
				setTimeout(function(){
					_self.animation(obj, _self.config.time/7, 'linear', 50, 50, 1, 1, 1, -10, 0, 0, 0, -_self.config.height, 0);
					setTimeout(function(){
						_self.animation(obj, _self.config.time/7, 'linear', 50, 50, 1, 1, 1, 5, 0, 0, 0, -_self.config.height, 0);
						setTimeout(function(){
							_self.animation(obj, _self.config.time/7, 'linear', 50, 50, 1, 1, 1,0, 0, 0, 0, -_self.config.height, 0);
							setTimeout(function(){
								_self.animation(obj, _self.config.time/10.5, 'ease-in', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
								setTimeout(function() {
									obj._interacting = false;
								}, _self.config.time/10.5+10);
							}, _self.config.time/7+10);
						}, _self.config.time/7+10);
					}, _self.config.time/7+10);
				}, _self.config.time/7+10);
			}, _self.config.time/7+10);
		}, _self.config.time/5.25+10);
	}
});

RollOnlyAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		obj._countRoll = obj._countRoll || 0;
		_self.config.time = _self.config.time || 1300;
		_self.config.originx = _self.config.originx || 50;	
		_self.config.originy = _self.config.originy || 0;
		if( obj._countRoll == 0){
			obj._countRoll = 1;
			_self.animation(obj, _self.config.time, 'ease-out', _self.config.originx, _self.config.originy, 1, 1, 1, 360, 0, 0, 0, 0, 0);			
			setTimeout(function() {
				obj._interacting = false;
			}, _self.config.time/1+10);
		}
		else if(obj._countRoll == 1){
			obj._countRoll = 0;
			_self.animation(obj, _self.config.time, 'ease-out',_self.config.originx, _self.config.originy, 1, 1, 1, 0, 0, 0, 0, 0, 0);
			setTimeout(function() {
				obj._interacting = false;
			}, _self.config.time/1+10);			
		}			
	}
});

RealJumpAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		_self.config.time = _self.config.time || 1000;
		_self.config.originx = _self.config.originx || 50;	
		_self.config.originy = _self.config.originy || 100;	
		_self.config.height = _self.config.height || 300;	
		_self.animation(obj, _self.config.time/5, 'ease-in', _self.config.originx, _self.config.originy, 1, 0.8, 1, 0, 0, 0, 0, 0, 0);
		setTimeout(function(){
			_self.animation(obj, _self.config.time/1.82, 'ease-out', _self.config.originx, _self.config.originy, 1, 1.2, 1, 0, 0, 0, 0, -_self.config.height, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/4, 'ease-in', _self.config.originx, _self.config.originy, 1, 0.8, 1, 0, 0, 0, 0, 0, 0);
				setTimeout(function(){
					_self.animation(obj, _self.config.time/5, 'ease-in', _self.config.originx, _self.config.originy, 1, 1, 1, 0, 0, 0, 0, 0, 0);
					setTimeout(function() {
						obj._interacting = false;
					}, _self.config.time/5+10);
				}, _self.config.time/4+10);
			},_self.config.time/1.82+10);
		}, _self.config.time/5+10);
	}
});

SimpleJumpAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		_self.config.time = _self.config.time || 800;
		_self.config.height = _self.config.height || 300;	
		_self.animation(obj, _self.config.time/1.82, 'ease-out', 50, 50, 1, 1, 1, 0, 0, 0, 0, -_self.config.height, 0);
		setTimeout(function(){
			_self.animation(obj, _self.config.time/5, 'ease-in', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);	
			setTimeout(function() {
				obj._interacting = false;
			}, _self.config.time/4+10);		
		},_self.config.time/1.82+10);
	}
});

TreeShakeAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		_self.config.time = _self.config.time || 2050;
		_self.config.originx = _self.config.originx || 50;	
		_self.config.originy = _self.config.originy || 100;	
		_self.animation(obj, _self.config.time/4.1, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1, -20, 0, 0, 0, 0, 0);
		setTimeout(function(){
			_self.animation(obj, _self.config.time/4.1, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1, 20, 0, 0, 0, 0, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/5.125, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1,-20, 0, 0, 0, 0, 0);
				setTimeout(function(){
					_self.animation(obj, _self.config.time/6.833, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1, 10, 0, 0, 0, 0, 0);
					setTimeout(function(){
						_self.animation(obj, _self.config.time/10.25, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1, -10, 0, 0, 0, 0, 0);
						setTimeout(function(){
							_self.animation(obj, _self.config.time/13.667, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1, 0, 0, 0, 0, 0, 0);
							setTimeout(function() {
								obj._interacting = false;
							}, _self.config.time/13.667+10);		
						}, _self.config.time/10.25);
					}, _self.config.time/6.833);
				}, _self.config.time/5.125);
			}, _self.config.time/4.1);
		}, _self.config.time/4.1);
	}
});

MagicFlyAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		_self.config.time = _self.config.time || 7300;
		_self.config.originx = _self.config.originx || 50;	
		_self.config.originy = _self.config.originy || 100;
		_self.config.height = _self.config.height || 400;	
		_self.animation(obj, _self.config.time/3.65, 'ease-out', _self.config.originx, _self.config.originy, 1, 1, 1, 0, 0, 0, 0, -_self.config.height, 0);
		setTimeout(function(){
			_self.animation(obj, _self.config.time/9.125, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1, 20, 0, 0, 20, -_self.config.height+_self.config.height/10, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/6.083, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1, -20, 0, 0, -20, -_self.config.height+_self.config.height/3.3, 0);
				setTimeout(function(){
					_self.animation(obj, _self.config.time/4.867, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1, 20, 0, 0,20, -_self.config.height+_self.config.height/1.6, 0);
					setTimeout(function(){
						_self.animation(obj, _self.config.time/4.055, 'linear', _self.config.originx, _self.config.originy, 1, 1, 1, 1, 0, 0, 0, -_self.config.height+_self.config.height/1, 0);						
						setTimeout(function() {
							obj._interacting = false;
						}, _self.config.time/4.055+5);		
					}, _self.config.time/4.867);
				}, _self.config.time/6.083);
			}, _self.config.time/9.125);
		}, _self.config.time/3.65);
	}
});

LeafFallingAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		obj._leafOffset = obj.offset();
		_self.config.time = _self.config.time || 10810;
		_self.config.height = _self.config.height || 800;	
		_self.config.direct = _self.config.direct || 'left';	
		if(_self.config.direct == 'left'){			
			_self.animation(obj,  _self.config.time/9.01, 'ease-in-out',-40, -150, 1, 1, 1, 30, 0, 0,  0, _self.config.height-_self.config.height/1.1, 0);
			setTimeout(function(){
				_self.animation(obj,  _self.config.time/5.405, 'ease-in-out', -40, -150, 1, 1, 1, -50, 0, 0, 0, _self.config.height-_self.config.height/1.5, 0);
				setTimeout(function(){
					_self.animation(obj,  _self.config.time/4.324, 'ease-in-out', -40, -150, 1, 1, 1, 70, 0, 0, 0, _self.config.height-_self.config.height/2.2, 0);
					setTimeout(function(){
						_self.animation(obj,  _self.config.time/3.857, 'ease-in-out', 140, -150, 1, 1, 1, -80, 0, 0, 0, _self.config.height- _self.config.height/8, 0);
						setTimeout(function(){
							_self.animation(obj,  _self.config.time/5.405, 'ease-in-out', 140, -150, 1, 1, 1, 0, 0, 0, 0, _self.config.height, 0);
							_self.setOpacity(obj,  _self.config.time/5.405, 'linear', 0);
							setTimeout(function(){
								_self.animation(obj, 10, 'ease-out',50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
								setTimeout(function(){
									_self.setOpacity(obj, 300, 'linear', 1);
									setTimeout(function() {
										obj._interacting = false;
									}, 305);		
								},10); 
							},  _self.config.time/5.405+10);
						},  _self.config.time/3.857+10);
					},  _self.config.time/4.324+10);
				},  _self.config.time/5.405+10);
			},  _self.config.time/9.01+10);
		}
		else if(_self.config.direct == 'right'){
			_self.animation(obj,  _self.config.time/9.01, 'ease-in-out', obj._leafOffset.x + 50, obj._leafOffset.y-300, 1, 1, 1, -30, 0, 0, 0, _self.config.height-_self.config.height/1.1, 0);
			setTimeout(function(){
				_self.animation(obj,  _self.config.time/5.405, 'ease-in-out', obj._leafOffset.x + 50, obj._leafOffset.y-300, 1, 1, 1, 45,0, 0, 0, _self.config.height-_self.config.height/1.2, 0);
				setTimeout(function(){
					_self.animation(obj,  _self.config.time/4.324, 'ease-in-out', obj._leafOffset.x + 50, obj._leafOffset.y-300, 1, 1, 1, -60, 0, 0, 0, _self.config.height-_self.config.height/2, 0);
					setTimeout(function(){
						_self.animation(obj, _self.config.time/3.857, 'ease-in-out', obj._leafOffset.x + 50, obj._leafOffset.y-300, 1, 1,1, 60, 0, 0, 0, _self.config.height- _self.config.height/8, 0);
						setTimeout(function(){
							_self.animation(obj,  _self.config.time/5.405, 'ease-in-out', obj._leafOffset.x + 50, obj._leafOffset.y-300, 1, 1, 1, 0, 0, 0, 0, _self.config.height, 0);
							_self.setOpacity(obj,  _self.config.time/5.405, 'linear', 0);
							setTimeout(function(){
								_self.animation(obj, 10, 'ease-out',50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
								setTimeout(function(){
									_self.setOpacity(obj, 300, 'linear', 1);
									setTimeout(function() {
										obj._interacting = false;
									}, 305);		
								},10); 
							},  _self.config.time/5.405+10);
						},  _self.config.time/3.857+10);
					},  _self.config.time/4.324+10);
				},  _self.config.time/5.405+10);
			},  _self.config.time/9.01+10);
		}
	}
});

PendulumAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		_self.config.time = _self.config.time || 3600;
		_self.config.originx = _self.config.originx || 50;	
		_self.config.originy = _self.config.originy || 0;	
		_self.animation(obj, _self.config.time/6, 'ease-out', _self.config.originx, _self.config.originy, 1, 1, 1, -25, 0, 0, 0, 0, 0);
		setTimeout(function(){
			_self.animation(obj, _self.config.time/6, 'ease-out', _self.config.originx, _self.config.originy, 1, 1, 1, 20, 0, 0, 0, 0, 0);
			setTimeout(function(){
				_self.animation(obj, _self.config.time/6, 'ease-out', _self.config.originx, _self.config.originy, 1, 1, 1, -15, 0, 0, 0, 0, 0);
				setTimeout(function(){
					_self.animation(obj, _self.config.time/6, 'ease-out', _self.config.originx, _self.config.originy, 1, 1, 1,10, 0, 0, 0, 0, 0);
					setTimeout(function(){
						_self.animation(obj, _self.config.time/6, 'ease-out', _self.config.originx, _self.config.originy, 1, 1, 1,-5, 0, 0, 0, 0, 0);
						setTimeout(function(){
							_self.animation(obj, _self.config.time/6, 'ease-out', _self.config.originx, _self.config.originy, 1, 1, 1, 0,0, 0, 0, 0, 0);
							setTimeout(function(){
								obj._interacting = false;
							}, _self.config.time/6);
						}, _self.config.time/6+10);
					}, _self.config.time/6+10);
				}, _self.config.time/6+10);
			}, _self.config.time/6+10);
		}, _self.config.time/6+10);
	}
});

AppearOneTimeAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		obj._flagAppear = obj._flagAppear || true;
		_self.config.time = _self.config.time || 1000;
		if(obj._flagAppear == true){
			obj._flagAppear = false;
			_self.animation(obj, 1, 'ease-out', 50, 50, 0, 0, 1, 0, 0, 0, 0, 0, 0);		
			setTimeout(function(){
				_self.setOpacity(obj, _self.config.time/1.25, 'ease-out', 1);
				_self.animation(obj, _self.config.time/1.25, 'ease-out', 50, 50, 1.2, 1.2, 1, 0, 0, 0, 0, 0, 0);	
				setTimeout(function(){
					_self.animation(obj, _self.config.time/5, 'ease-in', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);	
					setTimeout(function() {
						obj._interacting = false;
					}, _self.config.time/5+10);	
				}, _self.config.time/1.25+10);
			}, 2);
		}
		else
			return;		
	}
	
});

FlyThenDisappearAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		var time = this.config.time || 800;
		var transx = this.config.transx || 200;
		var transy = this.config.transy || 400;
		_self.animation(obj, time, 'ease-in', 50, 50, 0, 0, 1, 0, 0, 0,  transx, transy, 0);
		setTimeout(function(){
			_self.setOpacity(obj, 10, 'linear', 0);
			_obj.setStyle('display','none');
			obj._interacting = false;
		},time/10);
		

	}
});

FlyThenAppearAgainAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		var time = this.config.time != undefined ? this.config.time : 800;
		var transx = this.config.transx != undefined ? this.config.transx : 200;
		var transy = this.config.transy != undefined ? this.config.transy : 400;
		
		_self.animation(obj, time, 'ease-in', 50, 50, 0, 0, 1, 0, 0, 0, transx, transy, 0);
		setTimeout(function(){
			_self.animation(obj, 1, 'ease-in', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);	
				setTimeout(function(){
					obj._interacting = false;
				}, 150);
		}, (parseInt(time))+100);
	}
});

OnOffAnimationHelper = AbstractAnimationHelper.extend({

	doAnimate : function(obj) {
		var _self = this;
		obj._countOnOff = obj._countOnOff || 0;
		if(obj._countOnOff == 0){
			obj._countOnOff = 1;
			_self.setOpacity(obj, 10, 'linear', 1);
		}
		else if (obj._countOnOff = 1){
			obj._countOnOff = 0;
			_self.setOpacity(obj, 10, 'linear', 0);
		}	
	}
});

BallEffectAnimationHelper = AbstractAnimationHelper.extend({

	init : function(config) {
		this._super(config);
	},

	doAnimate : function(obj) {
		this.animateBall(obj, this.config.height || 300, this.config.time || 500, 0);
	},

	animateBall : function(obj, height, time, count) {
		if (count == 6)
			return;
		var _self = this;
		var scale = 1 - (5 - count) * 0.05;
		_self.animation(obj, time, 'ease-out', 50, 50, scale, 1, 1, 0, 0, 0, 0, height, 0);
		setTimeout(function() {
			_self.animation(obj, time, 'ease-in', 50, 50, 1, scale, 1, 0, 0, 0, 0, 0, 0);
			height = height / 2;
			if (height >= 8) {
				setTimeout(function() {
					_self.animateBall(obj, height, time / 1.2, count + 1);
				}, time);
			} else {
				obj._interacting = false;
			}
		}, time);
	}
});

ScaleUpDownAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var _self = this;
		var time = _self.config.time || 1000;
		
		_self.animation(obj, time/2, 'ease-in', 50, 50, 1.2, 1.2, 1, 0, 0, 0, 0, 0, 0);
		setTimeout(function() {
			_self.animation(obj, time/2, 'ease-in', 50, 50, 0.7, 0.7, 1, 0, 0, 0, 0, 0, 0);
			setTimeout(function() {
			_self.animation(obj, time/2, 'ease-in', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
				setTimeout(function(){
					obj._interacting = false;
				},time/2+10);
			}, time/2+10);
		}, time/2+10);
	}
});

HarmoniacScaleAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var _self =this;
		var time = this.config.time || 1500;
		_self.animation(obj, time/3, 'ease-in', 50, 50, 1, 1.4, 1, 0, 0, 0, 0, 0, 0);
		setTimeout(function() {
			_self.animation(obj, time/3.75, 'ease-in', 50, 50, 1, 0.7, 1, 0, 0, 0, 0, 0, 0);
			setTimeout(function() {
				_self.animation(obj, time/5, 'ease-in', 50, 50, 1, 1.2, 1, 0, 0, 0, 0, 0, 0);
				setTimeout(function() {
					_self.animation(obj, time/7, 'ease-in', 50, 50, 1, 0.9, 1, 0, 0, 0, 0, 0, 0);
					setTimeout(function() {
						_self.animation(obj, time/14, 'ease-in', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
						setTimeout(function() {
							obj._interacting = false;
						}, time/14+10);
					}, time/7+10);
				}, time/5+10);
			}, time/3.75+10);
		}, time/3+10);
	}
});

TextScaleAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1200;
		var count = this.config.count != undefined ? this.config.count : 1;
		var originx = this.config.originx != undefined ?this.config.originx : 50;
		var originy =this.config.originy != undefined ?this.config.originy : 50;
		this.textscaleanimate(obj,time,originx,originy,count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	textscaleanimate :function(obj,time,originx,originy,count){
		if(count<=0)
		return;
		var _self=this;
		_self.animation(obj, time/3, 'linear', originx ,originy , 0.7, 0.7, 1, 0, 0, 0, 0, 0, 0);
		setTimeout(function() {
	 		_self.animation(obj, time/3, 'linear', originx ,originy , 1.2, 1.2, 1, 0, 0, 0, 0, 0, 0);
			setTimeout(function(){
					_self.animation(obj, time/3, 'linear', originx ,originy , 1, 1, 1, 0, 0, 0, 0, 0, 0);
					this.timeout = setTimeout(function() {
					_self.textscaleanimate(obj,time,originx,originy,count-1);
					}, parseInt(time/2));
			}, time/3);
		}, time/3);
	}
	
});

TextScaleRevertAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1200;
		var count = this.config.count != undefined ? this.config.count : 1;
		var originx = this.config.originx != undefined ?this.config.originx : 50;
		var originy =this.config.originy != undefined ?this.config.originy : 50;
		this.textscalerevertanimate(obj,time,originx,originy,count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	textscalerevertanimate :function(obj,time,originx,originy,count){
		if(count<=0)
		return;
		var _self = this;
		_self.animation(obj, time/3, 'linear', originx, originy , 2.5, 2.5, 1, 0, 0, 0, 0, 0, 0);
		setTimeout(function() {
	 		_self.animation(obj, time/3, 'linear', originx, originy , 0.7, 0.7, 1, 0, 0, 0, 0, 0, 0);
			setTimeout(function(){
					_self.animation(obj, time/3, 'linear', originx, originy , 1, 1, 1, 0, 0, 0, 0, 0, 0);	
					this.timeout = setTimeout(function() {
					_self.textscalerevertanimate(obj,time,originx,originy,count-1);
					}, parseInt(time/2));
			}, time/3);
		}, time/3);
	}
	
});

/*FakeTransitionAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var posX = this.config.posX || 0;
		var posY = this.config.posY || 0;
		
		obj.setStyle('-webkit-transition', '-webkit-transform '+(time/2)+'ms ease-in');
		obj.setStyle('-webkit-transform', 'translate3d('+posX+'px, '+posY+'px, 0)');
		setTimeout(function() {
			obj.setStyle('-webkit-transition', '0ms ease-in');
			obj.setStyle('-webkit-transform', 'translate3d('+(-posX)+'px, '+(-posY)+'px, 0)');
			setTimeout(function() {
				obj.setStyle('-webkit-transition', '-webkit-transform '+(time/2)+'ms ease-in');
				obj.setStyle('-webkit-transform', 'translate3d(0, 0, 0)');
				setTimeout(function() {
					obj._interacting = false;
				}, time/2+100);
			}, 50);
		}, time/2+100);
	}
});*/

PureOpacityAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var starttime = this.config.starttime != undefined ? this.config.starttime : 500;
		var endtime = this.config.endtime != undefined ? this.config.endtime : 500;
		var datetime = this.config.datetime != undefined ? this.config.datetime : 1000;
		var opacity1 = this.config.opacity1 != undefined ? this.config.opacity1 :0;
		var opacity2 = this.config.opacity2 != undefined ? this.config.opacity2 :1;
		var count = this.config.count ||1;
		this.pureanimate(obj, starttime, opacity1, endtime, opacity2 , datetime , count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, starttime * count);
	},
	pureanimate :function(obj, starttime, opacity1, endtime, opacity2 , datetime , count){
		if (count <= 0)
			return;
		var _self = this;
		if(opacity2==0){
			obj.setStyle('pointer-events','inherit');
			obj.setStyle('-webkit-transition','opacity '+starttime+'ms linear');
			obj.setStyle('opacity',opacity1);
			setTimeout(function() {
				obj.setStyle('-webkit-transition','opacity '+endtime+'ms linear');
				obj.setStyle('opacity', opacity2);
				setTimeout(function(){
					obj.setStyle('pointer-events','none');
					this.timeout = setTimeout(function() {
					_self.pureanimate(obj, starttime, opacity1, endtime, opacity2 , datetime , count-1);
					}, parseInt(datetime/2));
				},parseInt(starttime/100));
			}, parseInt(datetime));
			
		}
		else {
			obj.setStyle('pointer-events','inherit');
			obj.setStyle('-webkit-transition','opacity '+starttime+'ms linear');
			obj.setStyle('opacity',opacity1);
			setTimeout(function() {
				obj.setStyle('-webkit-transition','opacity '+endtime+'ms linear');
				obj.setStyle('opacity', opacity2);
				this.timeout = setTimeout(function() {
				_self.pureanimate(obj, starttime, opacity1, endtime, opacity2 , datetime , count-1);
				}, parseInt(datetime/2));
			}, parseInt(datetime));
		}
	}
	
});

WheelRotateAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		// obj.access().addClass('wheelfx');
		var status = this.config.status != undefined ? this.config.status :1;
		if(status==1){
		obj.setStyle('-webkit-animation', this.config.speed+'ms wheel-fx linear infinite');
		if (this.config.time != -1) {
			setTimeout(function(){
				obj.setStyle('-webkit-animation', '');
				// obj.access().removeClass('wheelfx');
				obj._interacting = false;
			},this.config.time/1);
		}
		}
		else if(status==-1){
			obj.setStyle('-webkit-animation', this.config.speed+'ms unwheel-fx linear infinite');
			if (this.config.time != -1) {
				setTimeout(function(){
					obj.setStyle('-webkit-animation', '');
					// obj.access().removeClass('wheelfx');
					obj._interacting = false;
				},this.config.time/1);
			}
		}
	}
});

MoveNewPositionAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var _self = this;
		var time = this.config.time || 1000;
		var posx = this.config.posx || 0;
		var posy = this.config.posy || 0;
		var posz = this.config.posz || 0;
		
		_self.animation(obj, time, 'linear' , 50, 50, 1, 1, 1, 0, 0, 0, posx, posy, posz);
		setTimeout(function(){
			obj._interacting = false;	
		},time/1);
	}
});
MoveThenComeBackAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var posx = this.config.posx || 0;
		var posy = this.config.posy || 0;
		var posz = this.config.posz || 0;
		var _self = this;
		
		_self.animation(obj, time, 'linear ' , 50, 50, 1, 1, 1, 0, 0, 0, posx, posy, posz);
		setTimeout(function(){
			_self.animation(obj, 0, 'linear ' , 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
			obj._interacting = false;
		},parseInt(time)+10);
	}
});

RotateDegAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time  = this.config.time || 1000;
		var originx = this.config.originx != undefined ?this.config.originx : 50;
		var originy =this.config.originy != undefined ?this.config.originy : 0;
		var rotatex = this.config.rotatex || 0;
		var rotatey = this.config.rotatey || 0;
		var rotatez = this.config.rotate || 0;
		
		obj.setStyle('-webkit-transition','-webkit-transform '+time+'ms linear' );
		AnimationUtils.setOrigin(obj,originx,originy);
		obj.setStyle('-webkit-transform','rotateX('+rotatex+'deg) rotateY('+rotatey+'deg) rotateZ('+rotatez+'deg)');
		setTimeout(function() {
			obj._interacting = false;
		}, time/1);
	}
});


JumpOnTimeAnimationHelper =AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var count = this.config.count != undefined ? this.config.count : 1;
		var height = this.config.height || 20;
		height = -height/1;
		this.jumpanimate(obj, time, height, count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	
	jumpanimate :function(obj, time, height, count){
		if (count <= 0)
			return;
		var _self = this;
		_self.animation(obj, time/2, 'ease-in', 50, 100, 1, 1, 1, 0, 0, 0, 0, height, 0);
		setTimeout(function(){
			_self.animation(obj, time/2, 'linear', 50, 100, 1, 1, 1, 0, 0, 0, 0, 0, 0);
			this.timeout = setTimeout(function() {
				_self.jumpanimate(obj, time, height, count-1);
			}, parseInt(time/2));
		}, parseInt(time/2));
	}
});

MoveAndRollAnimationHelper  = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var _self = this;
		var time  = this.config.time || 1000;
		var positionx = this.config.positionx != undefined ? this.config.positionx : 100;
		var positiony = this.config.positiony != undefined ? this.config.positiony : 100;
		
		_self.animation(obj, time, 'ease-out', 50, 50, 1, 1, 1, 360, 0, 0, positionx/2, positiony/2, 0);
		setTimeout(function(){
			_self.animation(obj, time, 'ease-out', 50, 50, 1, 1, 1, 720, 0, 0, positionx, positiony, 0);
			setTimeout(function(){
					_self.animation(obj, time, 'ease-out', 50, 50, 1, 1, 1, 1080, 0, 0, positionx*2, positiony*2, 0);
				setTimeout(function(){
					_self.animation(obj, time, 'ease-out', 50, 50, 1, 1, 1, 360, 0, 0, positionx/2, positiony/2, 0);
					setTimeout(function(){
						_self.animation(obj, time, 'ease-out', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
						obj._interacting = false;
					},parseInt(time)+10);
				},parseInt(time)+10)
			},parseInt(time)+10)
		},parseInt(time)+10);
		
	}
});

ScaleObjectAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var count = this.config.count != undefined ? this.config.count : 1;
		var scalex = this.config.scalex != undefined ? this.config.scalex : 1;
		var scaley = this.config.scaley != undefined ? this.config.scaley : 1;
		var scalez = this.config.scalez != undefined ? this.config.scalez :1;
		var originx = this.config.originx != undefined ? this.config.originx : 50;
		var originy = this.config.originy != undefined ? this.config.originy : 100;
		
		this.scaleobjectanimate(obj, time, scalex, scaley, scalez, originx, originy, count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	
	scaleobjectanimate :function(obj, time, scalex, scaley, scalez, originx, originy, count){
		if (count <= 0)
			return;
		var _self = this;
		_self.animation(obj, time/2, 'linear', originx, originy, scalex, scaley, scalez, 0, 0, 0, 0, 0, 0);
		setTimeout(function(){
			_self.animation(obj, time/2, 'linear', originx, originy, 1, 1, 1, 0, 0, 0, 0, 0, 0);
			this.timeout = setTimeout(function() {
				_self.scaleobjectanimate(obj, time, scalex, scaley ,scalez, originx, originy, count-1);
			}, parseInt(time/2));
		}, parseInt(time/2));
	}
});

WaveHandAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var originx = this.config.originx != undefined ? this.config.originx : 50;
		var originy = this.config.originy != undefined ? this.config.originy : 100;
		var degf = this.config.degfirst || 20;
		var degl = this.config.deglast || -10 ;
		var count = this.config.count || 1;
	
		this.wavehandanimation(obj,time,originx,originy,degf,degl,count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	wavehandanimation : function(obj,time,originx,originy,degf,degl,count){
		if (count <=0) 
			return;
		var _self =this;
		_self.animation(obj, time/2, 'linear', originx, originy, 1, 1, 1, degf, 0, 0, 0, 0, 0);
		setTimeout(function(){
				_self.animation(obj, time/2, 'linear', originx, originy, 1, 1, 1, degl, 0, 0, 0, 0, 0);
				setTimeout(function(){
					_self.animation(obj, time/2, 'linear', originx, originy, 1, 1, 1, 0, 0, 0, 0, 0, 0);
					this.timeout = setTimeout(function() {
						_self.wavehandanimation(obj,time,originx,originy,degf,degl,count-1);
					}, parseInt(time/2));
				}, parseInt(time/2));
		},parseInt(time/2));
	}
});
FlyThenScaleAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var scalex = this.config.scalex != undefined ? this.config.scalex : 1;
		var scaley = this.config.scaley != undefined ? this.config.scaley : 1;
		var scalez = this.config.scalez != undefined ? this.config.scalez : 1;
		var height = this.config.posx != undefined ?this.config.posx : 100;
		var width = this.config.posy !=undefined ? this.config.posy : 100;
		var count = this.config.count || 1;
		
		this.flythenscaleanimation(obj,time,scalex,scaley, scalez, height,width,count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	flythenscaleanimation : function(obj,time,scalex,scaley, scalez, height,width,count){
		if (count <=0) 
			return;
		var _self = this;
		_self.animation(obj, time/2, 'linear',50, 100, 1, 1, 1, 0, 0, 0, width, height, 0);
		setTimeout(function(){
				_self.animation(obj, time/6, 'linear',50, 100, scalex, scaley, scalez, 0, 0, 0, width, height, 0);
				setTimeout(function(){
					_self.animation(obj, time/4, 'linear',50, 100, 1, 1, 1, 0, 0, 0, 0, 0, 0);
					setTimeout(function(){
						_self.animation(obj, time/6, 'linear',50, 100, scalex, scaley, scalez, 0, 0, 0, 0, 0, 0);
						setTimeout(function(){
							_self.animation(obj, time/6, 'linear',50, 100, 1, 1, 1, 0, 0, 0, 0, 0, 0);
							this.timeout = setTimeout(function() {
							_self.flythenscaleanimation(obj,time,scalex,scaley,scalez, height,width,count-1);
							}, parseInt(time/2));
						},parseInt(time/6));
					}, parseInt(time/6));
				}, parseInt(time/4)+10);
		},parseInt(time/6));
	}
});
ScaleObjectOnlyAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var originx = this.config.originx != undefined ? this.config.originx : 50;
		var originy= this.config.originy != undefined ?  this.config.originy : 100;
		var scalex = this.config.scalex != undefined ? this.config.scalex : 1;
		var scaley = this.config.scaley != undefined ? this.config.scaley : 1;
		var scalez = this.config.scalez != undefined ? this.config.scalez : 1;
		var _self = this;
		_self.animation(obj, time,'ease-in', originx, originy, scalex, scaley, scalez, 0, 0, 0, 0, 0, 0);
		obj._interacting = false;
		
	}
});
MoveSmoothAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var posx = this.config.posx != undefined ? this.config.posx : 0;
		var posy = this.config.posy != undefined ? this.config.posy : 0;
		var posz = this.config.posz ||0;
		var count = this.config.count || 1;
		
		this.movesmoothanimation(obj,time,posx,posy,posz,count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	movesmoothanimation : function(obj,time,posx,posy,posz,count){
		if (count <=0) 
			return;
		var _self = this;
		_self.animation(obj, time/2, 'ease-out', 50, 50, 1, 1, 1, 0, 0, 0, posx, posy, posz);
		setTimeout(function(){
				_self.animation(obj, time/2, 'ease-out', 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
					this.timeout = setTimeout(function() {
					_self.movesmoothanimation(obj,time,posx,posy,posz,count-1);
					}, parseInt(time/2));
		},parseInt(time/2));
	}
});


OpacityObjectAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time != undefined ? this.config.time:1000;
		var opacity = this.config.opacity != undefined ? this.config.opacity :0;
		if(time==0) {
			obj.setStyle('display','block');
			obj.setStyle('opacity', opacity);
			obj._interacting = false;
			if(opacity == 0){
				setTimeout(function(){
					obj.setStyle('display','none');
				},1);
			}
		}
		else {
			obj.setStyle('display','block');
			obj.setStyle('-webkit-transition','opacity '+time+'ms linear');
			obj.getStyle('top');
			obj.setStyle('opacity', opacity);
			obj._interacting = false;
			if(opacity == 0){
				setTimeout(function(){
					obj.setStyle('display','none');
				},time-10);
			}
			
		}
		
		
	}
});
PlaySpriteAnimationHelper = AbstractAnimationHelper.extend({
	
	doAnimate: function(obj) {
		var time = this.config.time || 2000;
		obj.loop = true;
		if (typeof obj.play == 'function') {
			obj.play();
			setTimeout(function() {
				obj.stop();
				obj._interacting = false;
			}, time/1);
		} else {
			obj._interacting = false;
		}
	}
});
MoveThenComebackOnTimeAnimationHelper = AbstractAnimationHelper.extend({
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var posx = this.config.posx != undefined ? this.config.posx : 100;
		var posy = this.config.posy != undefined ? this.config.posy : 100;
		var posz = this.config.posz ||0;
		var endtime = this.config.endtime || 1000;
		var count = this.config.count || 1;
		this.movethencomebackontimeanimation(obj,time,posx,posy,posz,endtime,count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	movethencomebackontimeanimation : function(obj,time,posx,posy,posz,endtime,count){
		if (count <=0) 
			return;
			var _self = this;
			_self.animation(obj, time, 'ease-out ' , 50, 50, 1, 1, 1, 0, 0, 0, posx, posy, posz);
			setTimeout(function(){
			setTimeout(function(){
				_self.setOpacity(obj,50,'ease-out',0);
				setTimeout(function(){
					_self.animation(obj, 1, 'ease-in ' , 50, 50, 1, 1, 1, 0, 0, 0, 0, 0, 0);
					setTimeout(function(){
						_self.setOpacity(obj,50,'ease-in',1);
						this.timeout = setTimeout(function() {
							_self.movethencomebackontimeanimation(obj,time,posx,posy,posz,endtime,count-1);
						}, parseInt(time/2));
					},50);
				}, parseInt(time/2));
				},50);
			},parseInt(time)+parseInt(endtime));
			
	}
});
DoNothingAnimationHelper = AbstractAnimationHelper.extend({
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		setTimeout(function(){
			obj._interacting = false;
		},time+100);
	}
});
SpringEffectAnimationHelper = AbstractAnimationHelper.extend({
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var originx = this.config.originx ||50;
		var originy = this.config.originy ||100;
		var height = this.config.height || 200;
		var count = this.config.count ||1;
		
		this.springeffectanimation(obj, time, originx, originy, height, count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	springeffectanimation :function(obj, time, originx, originy, height, count){
		if(count<1)
		return;
		var _self = this;
		_self.animation(obj, time, 'ease-out ' , originx, originy, 1, 1, 1, 0, 0, 0, 0, height, 0);
		setTimeout(function(){
			_self.animation(obj, time/2, 'ease-in ' , originx, originy, 1, 1, 1, 0, 0, 0, 0, height/2, 0);
			setTimeout(function(){
				_self.animation(obj, time/2, 'ease-in ' , originx, originy, 1, 1, 1, 0, 0, 0, 0, (height*4)/3, 0);
				setTimeout(function(){
					_self.animation(obj, time/2, 'ease-in ' , originx, originy, 1, 1, 1, 0, 0, 0, 0, height/2, 0);
					setTimeout(function(){
						_self.animation(obj, time/2, 'ease-in ' , originx, originy, 1, 1, 1, 0, 0, 0, 0, (height*2)/3, 0);
						this.timeout = setTimeout(function() {
							_self.springeffectanimation(obj, time, originx, originy, height, count-1);
						}, parseInt(time/2));
					},time/2);
				},time/2);
			},time/2);
		},time);
	}
});

RotateDegThenComebackAnimationHelper = AbstractAnimationHelper.extend({
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var originx = this.config.originx || 50;
		var originy = this.config.originy || 50;
		var rotatex = this.config.rotatex || 30;
		var rotatey = this.config.rotatey || 0;
		var rotatez = this.config.rotatez || 0;
		var endtime = this.config.endtime || 1000;
		var count = this.config.count || 1;
		
		this.rotatedegthencomebackanimation(obj, time, originx, originy, rotatex,rotatey,rotatez,endtime,count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	rotatedegthencomebackanimation :function(obj, time, originx, originy, rotatex, rotatey, rotatez, endtime, count){
		if(count<1)
		return;
		var _self = this;
		_self.animation(obj, time, 'ease-out', originx, originy, 1, 1, 1, rotatez, rotatey, rotatex, 0, 0, 0);
		setTimeout(function(){
			_self.animation(obj, time , 'ease-in' , originx, originy, 1, 1, 1, 0, 0, 0, 0, 0, 0);
			this.timeout = setTimeout(function() {
			_self.rotatedegthencomebackanimation(obj, time, originx, originy, rotatez, rotatey, rotatex, endtime, count-1);
			}, parseInt(time/2));
		},endtime);
	}
});

SpringBounceAnimationHelper = AbstractAnimationHelper.extend({
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var originx = this.config.originx  || 50;
		var originy = this.config.originy || 100;
		var height = this.config.height ||10;
		var count = this.config.count || 1;
		
		this.springbounceanimation(obj, time, originx, originy, height, count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	springbounceanimation :function(obj, time, originx, originy, height, count){
		if(count<1)
		return;
		var _self = this;
		_self.animation(obj, time/2, 'ease-out', originx, originy, 1, 1.2, 1, 0, 0, 0, 0, height, 0);
		setTimeout(function(){
			_self.animation(obj, time/4, 'ease-in', originx, originy, 1, 0.7, 1, 0, 0, 0, 0, height, 0);
			setTimeout(function(){
				_self.animation(obj, time/4, 'ease-in', originx, originy, 1, 1.1, 1, 0, 0, 0, 0, height, 0);
				setTimeout(function(){
					_self.animation(obj, time/4, 'ease-in', originx, originy, 1, 0.7, 1, 0, 0, 0, 0, height, 0);
					setTimeout(function(){
						_self.animation(obj, time/4, 'ease-in', originx, originy, 1, 1, 1, 0, 0, 0, 0, height, 0);
						this.timeout = setTimeout(function(){
							_self.springbounceanimation(obj, time, originx, originy, height, count-1);
						}, parseInt(time/2));
					},time/4+10);
				},time/4+10);
			},time/4+10);
		},time/2+10);
	}
});
FlyThenRotateAnimationHelper = AbstractAnimationHelper.extend({
	doAnimate: function(obj) {
		var time = this.config.time || 1000;
		var originx = this.config.originx  || 50;
		var originy = this.config.originy || 100;
		var posx = this.config.posx ||0;
		var posy = this.config.posy ||-100;
		var posz = this.config.posz ||0;
		var rotatex  = this.config.rotatex ||0;
		var rotatey  = this.config.rotatey ||0;
		var rotatez  = this.config.rotate ||30;
		var count = this.config.count || 1;
		
		this.flythenrotateanimation(obj, time, originx, originy, posx, posy, posz, rotatex, rotatey, rotatez , count);
		var _self = this;
		setTimeout(function() {
			clearTimeout(_self.timeout);
			obj._interacting = false;
		}, time * count);
	},
	flythenrotateanimation :function(obj, time, originx, originy, posx, posy, posz, rotatex, rotatey, rotatez , count){
		if(count<1)
		return;
		var _self = this;
		_self.animation(obj, time, 'linear', originx, originy, 1, 1, 1, rotatez, rotatey, rotatex, posx, posy, posz);
		setTimeout(function(){
			_self.animation(obj, time, 'linear', originx, originy, 1, 1, 1, 0, 0, 0, 0, 0, 0);
			this.timeout = setTimeout(function(){
				_self.flythenrotateanimation(obj, time, originx, originy, posx, posy, posz, rotatex, rotatey, rotatez , count-1);
			}, parseInt(time/2));
		},time);
	}
});

/*
 * Please have a look at the top of this file , the AnimationTypesHelper
 * this object inlcude all animation/config for animation at the moment 
 * param : 
 * type :
 * 
 */
AnimationHelper = {};
AnimationHelper.animate = function(type, actionName, arg, obj) {
        switch (type) {
                case "singleAnimations" :
                        AnimationUtils.runUtilsAnimation(actionName, arg, obj);
                        break;
                case "flyOrJumpAnimations" :
                        AnimationUtils.runFlyJumpAnimation(actionName, arg, obj);
                        break;
                case "stableAnimations" :
                        AnimationUtils.runStableAnimation(actionName, arg, obj);
                        break;
                case "opacityAnimations" :
                        AnimationUtils.runOpacityAnimation(actionName, arg, obj);
                        break;
                default:
                        AnimationUtils.runDefaultAnimation(actionName, arg, obj);
                        break;
        }
};
