MenuState = Stage.extend({
    setupDomObject: function(options) {
        options = options || {};
        this.name = "MenuState";
        this._super(options);
        this.renderUIComposition();
    },
    preRender: function() {
        this.playButton.addEventListener("click", function() {
            AnimationHelper.animate({
                type: "stableAnimations",
                actionName: "bounce",
                arg: {
                    originx: "50",
                    originy: "100",
                    soundname: null,
                    time: Models.animation.bounceAnimation.time
                },
                obj: this.access()
            });
            setTimeout(function() {
                JOOUtils.changeStage("landing-state", "opacity");
            }, Models.delayTime.switchFromLoadingPage);
        });

        this.connectFriendButton.addEventListener("click", function() {
            AnimationHelper.animate({
                type: "stableAnimations",
                actionName: "bounce",
                arg: {
                    originx: "50",
                    originy: "100",
                    soundname: null,
                    time: Models.animation.bounceAnimation.time
                },
                obj: this.access()
            });
        });
    }

}).implement(CompositionRenderInterface);
;

