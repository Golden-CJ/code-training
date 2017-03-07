/**
 * Created by Administrator on 2016/12/9.
 */

var ccc = document.getElementById("cjqFt");
ccc.onmouseover = function () {
    this.style.backgroundImage = "url(images/Ft.png)";
}
ccc.onmouseout = function () {
        this.style.backgroundImage = "";
    }

var cscreen = document.getElementById("cscreen");
var cjq = document.getElementById("cjqLbt");
var timer = null;
timer = setInterval(play, 15);
cscreen.onmouseover = function () {
    clearInterval(timer);
};
cscreen.onmouseout = function () {
    timer = setInterval(play, 15);
};

function play() {
    var leader = cjq.offsetLeft;
    var step = -1;
    if (leader > -556) {
        leader = leader + step;
        cjq.style.left = leader + "px";
    } else {
        cjq.style.left = 0;
    }
}

