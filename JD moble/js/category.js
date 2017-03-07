/**
 * Created by L$L on 2016/12/27.
 */
window.onload = function(){
    leftSwipe();
    rightSwipe();
}

var lis = document.querySelectorAll(".JD_category > .categoryLeft > ul > li")
var ul = document.querySelector(".JD_category > .categoryLeft > ul")
var box = document.querySelector(".JD_category > .categoryLeft")
var maxY = 0;
var minY = box.offsetHeight - ul.offsetHeight;
console.log(minY);
var maxSwipe = maxY + 100;
var minSwipe = minY - 100;
var startY = 0;
var moveY = 0;
var distanceY = 0;
var isMove = false;
var currY = 0;


/*定义公用的方法*/
var addTransition = function () {
    ul.style.webkitTransition = "all .2s";
    ul.style.transition = "all .2s";
}
var removeTransition = function () {
    ul.style.webkitTransition = "none";
    ul.style.transition = "none";
}
var setTranslateY = function (y) {
    ul.style.webkitTransform = "translateY(" + y + "px)";
    ul.style.transform = "translateY(" + y + "px)";
}

function leftSwipe() {
    /*绑定事件*/
    ul.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
    });
    ul.addEventListener('touchmove', function (e) {
        moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
        /*清除过度*/
        removeTransition();
        /*设置定位*/
        if ((currY + distanceY) < maxSwipe && (currY + distanceY) > minSwipe) {
            setTranslateY(currY + distanceY);
        }

    });
    window.addEventListener('touchend', function (e) {
        /*当往下滑的时候 大于 最大定位*/
        if (( currY + distanceY) > maxY) {
            currY = maxY;
            addTransition();
            setTranslateY(currY);
        }
        /*当往上滑的时候 小于 最小定位*/
        else if (( currY + distanceY) < minY) {
            currY = minY;
            addTransition();
            setTranslateY(currY);
        }
        else {
            /*记录当前的定位   上一次当前的定位 + 这一次改变的定位*/
            currY = currY + distanceY;
        }

        /*重置所有的参数  不重置currY */
        startY = 0;
        moveY = 0;
        distanceY = 0;
        isMove = 0;
    })
    wcj.tap(ul, function (e) {
        var li = e.target.parentNode;
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = " ";
            lis[i].index = i;
        }
        li.className = "show";
        var translateY = -li.index * 50;
        /*判断当前的定位要大于  定位区间的  最小定位*/
        if(translateY > minY){
            currY = translateY;
            addTransition();
            setTranslateY(currY);
        }
        else{
            currY = minY;
            addTransition();
            setTranslateY(currY);
        }
    })
};


function rightSwipe(){
    itcast.iScroll({
        swipeDom:document.querySelector('.categoryRight'),
        swipeType:'y',/*滑动的方向*/
        swipeDistance:100/*缓冲的距离*/
    });
}
