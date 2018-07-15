var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function(){
    animateDiv("#circle1");
    animateDiv("#circle2");
    animateDiv("#circle3");
    animateDiv("#circle4");
    animateDiv("#circle5");
    animateDiv("#circle6");
    animateDiv("#circle7");
    animateDiv("#circle8");
    animateDiv("#circle9");
    animateDiv("#circle10");
    animateDiv("#circle11");

});

function makeNewPosition(circleID){

    var h;
    var w;

    // Get viewport dimensions (remove the dimension of the div)
    if (circleID === "#circle1" || circleID === "#circle2" || circleID === "#circle3") {
      h = winH - 300;
      w = winW - 250;
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);

    } else if (circleID === "#circle4" || circleID === "#circle5") {
      h = winH;
      w = winW - 250;
      var min = h;
      var max = h + 450;

      var nh = Math.floor(Math.random() * (max - min) + min);
      var nw = Math.floor(Math.random() * w);

    } else if (circleID === "#circle6") {
      h = winH + 800;
      w = winW - 250;
      var min = h;
      var max = h + 450;

      var nh = Math.floor(Math.random() * (max - min) + min);
      var nw = Math.floor(Math.random() * w);

    } else if (circleID === "#circle7" || circleID === "#circle8") {
      h = winH + 1500;
      w = winW - 250;
      var min = h;
      var max = h + 450;

      var nh = Math.floor(Math.random() * (max - min) + min);
      var nw = Math.floor(Math.random() * w);

    } else if (circleID === "#circle9" || circleID === "#circle10" || circleID === "#circle11") {
      h = winH + 2300;
      w = winW - 250;
      var min = h;
      var max = h + 450;

      var nh = Math.floor(Math.random() * (max - min) + min);
      var nw = Math.floor(Math.random() * w);

    }

    console.log($(window).height());
    return [nh,nw];

}

function animateDiv(thing){
    var newq = makeNewPosition(thing);
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
