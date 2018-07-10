$(document).ready(function(){
    animateDiv("#circle1");
    animateDiv("#circle2");
    animateDiv("#circle3");
    animateDiv("#circle4");
    animateDiv("#circle5");
    animateDiv("#circle6");
    animateDiv("#circle7");
    animateDiv("#circle8");

});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(thing){
    var newq = makeNewPosition();
    var oldq = $(thing).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $(thing).animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv(thing);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
