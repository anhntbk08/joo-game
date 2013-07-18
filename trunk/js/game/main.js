$(document).ready(function(){
    $(this).bind("touchmove", function(e){
        e.preventDefault();
    });
    var game = new Game({width: Models.screen.width, height :Models.screen.height});
});

