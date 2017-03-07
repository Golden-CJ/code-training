/**
 * Created by L$L on 2016/12/24.
 */

window.onload = function () {
    search();
    banner();
}

/** 顶部搜索栏 **/
function search() {
    var searchBox = document.querySelector(".JD_headerBox");
    var bannerBox = document.querySelector(".JD_banner");
    var bannerhight = bannerBox.offsetHeight;
    window.onscroll = function () {
        var top = document.body.scrollTop;
        var opacity = 0;
        if (top > bannerhight) {
            opacity = 0.85
        } else(
            opacity = 0.85 * (top / bannerhight)
        )
        searchBox.style.background = "rgba(201,21,35," + opacity + ")"
    }
}


/**轮播图**/
function banner() {
    var banner = document.querySelector(".JD_banner")
    var bannerWidth = banner.offsetWidth;
    var imageBox = document.querySelector(".JD_banner > ul")
    var pointBox = document.querySelector(".JD_banner > ol")
    var points = pointBox.querySelectorAll("li")

    function addTransition() {
        imageBox.style.transition = "all .5s";
        imageBox.style.webkitTransition = "all .5s";
    }

    function setTranslateX(x) {
        imageBox.style.transform = "translateX(" + x + "px)";
        imageBox.style.webkitTransform = "translateX(" + x + "px)";
    }

    function removeTransition() {
        imageBox.style.transition = "none";
        imageBox.style.webkitTransition = "none";
    }

    var index = 1
    var timer = setInterval(function () {
        index++;
        addTransition()
        setTranslateX(-bannerWidth * index);
    }, 2000)


    imageBox.addEventListener("webkitTransitionEnd", function () {
        if (index >= 9) {
            index = 1;
            removeTransition();
            setTranslateX(-index * bannerWidth);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTranslateX(-index * bannerWidth);
        }
        setPoint()
    })

    var setPoint = function () {
        for (var i = 0; i < points.length; i++) {
            points[i].className = " ";
        }
        points[index - 1].className = "show";
    }

    /*滑动部分*/
    var startX = 0
    var moveX = 0
    var distanceX = 0
    var isMove = false
    imageBox.addEventListener("touchstart", function (a) {
        clearInterval(timer);
        startX = a.touches[0].clientX;
    })
    imageBox.addEventListener("touchmove", function (b) {
        isMove = true;
        moveX = b.touches[0].clientX;
        distanceX = moveX - startX;
        removeTransition()
        setTranslateX(-index * bannerWidth + distanceX)
    })
    window.addEventListener("touchend", function (c) {
        if (Math.abs(distanceX) > (bannerWidth / 3) && isMove) {
            if (distanceX < 0) {
                index++;
            } else {
                index--;
            }
            addTransition()
            setTranslateX(-index * bannerWidth)
        } else {
            addTransition()
            setTranslateX(-index * bannerWidth)
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            addTransition();
            setTranslateX(-bannerWidth * index);
        }, 1000)
    })


    /*秒杀倒计时部分*/
    var spans = document.querySelectorAll(".time")
    var time = 5 * 60 * 60;
    var timerr = setInterval(function () {
        time--;
        if (time < 0) {
            clearInterval(timerr);
            return false;
        }
        var h = Math.floor(time / 3600)
        var m = Math.floor((time % 3600) / 60);
        var s = time % 60

        spans[0].innerHTML = Math.floor(h / 10)
        spans[1].innerHTML = h % 10
        spans[2].innerHTML = Math.floor(m / 10)
        spans[3].innerHTML = m % 10
        spans[4].innerHTML = Math.floor(s / 10)
        spans[5].innerHTML = s % 10
    }, 1000)
}