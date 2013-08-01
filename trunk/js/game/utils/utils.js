/*
* Default layout those stages are vertical
* so default change page effect is transition from bottom to top or
* top to bottom
* 
*/

JOOUtils = JOOUtils || {};
JOOUtils.selectStage = function(state){
    this.currentStage = state;
    this.top = $("#"+state).offset().top;
    $("#"+state).parent().css({
        top: - parseInt(top)
    })
}
JOOUtils.changeStage = function(state, type){   
    var top = $("#"+state).offset().top;
    var currentTop = $("#"+this.currentStage).offset().top;
        
    JOOUtils.generateEvent("StartSwitchState", {
        state : state
    });
    if (type == "slide"){
        AnimationHelper.animate({
            type: "stableAnimations",
            actionName: "moveNewPosition",
            arg: {
                posx: "0",
                posy: this.top + parseInt(currentTop) - parseInt(top),
                posz: "0",
                soundname: null,
                time: Models.animation.switchPageAnimation.time 
            },
            obj: $("#"+state).parent()
        });
    }else if (type == "opacity"){
        AnimationHelper.animate({
            type: "stableAnimations",
            actionName: "opacityObject",
            arg: {
                opacity: "1",
                soundname: null,
                time: "1000",
                time: Models.animation.switchPageAnimation.time 
            },
            obj: $("#"+state)
        });
        AnimationHelper.animate({
            type: "stableAnimations",
            actionName: "opacityObject",
            arg: {
                opacity: "0",
                soundname: null,
                time: Models.animation.switchPageAnimation.time 
            },
            obj: $("#"+this.currentStage)
        });
    };
    
    this.currentStage = state;
    this.top += parseInt(currentTop) - parseInt(top);
    setTimeout(function(){        
         JOOUtils.generateEvent("EndSwitchState", {
            state : state
        });
    }, Models.animation.switchPageAnimation.time + 10);
};

JOOUtils.generateIdEffect = function(data){
    if (!this.effectNumberIndex)    
        this.effectNumberIndex = 0;
    this.effectNumberIndex++;

    for (var ii in data.MainFrame.ShowFrame){
        if (!data.MainFrame.ShowFrame[ii].id)
             continue;   
        if (data.MainFrame.ShowFrame[ii].id.split(":").length > 1){
            data.MainFrame.ShowFrame[ii].id = this.effectNumberIndex + ":" + data.MainFrame.ShowFrame[ii].id.split("-")[1];
        }
        else
            data.MainFrame.ShowFrame[ii].id = this.effectNumberIndex + ":" +data.MainFrame.ShowFrame[ii].id
    }
    for (var ii in data.tags){
        //data.tags[ii].id = this.effectNumberIndex + "-" +data.tags[ii].id
        if (data.tags[ii].id.toString().split(":").length > 1){
            data.tags[ii].id = this.effectNumberIndex + ":" + data.tags[ii].id.toString().split("-")[1]
        }
        else
            data.tags[ii].id = this.effectNumberIndex + ":" +data.tags[ii].id.toString()
    }
    return data;
}

JOOUtils.getElementNumber = function(obj){
    return Object.keys(Models.resource.texture).length;    
}

