/**
 * Created by Administrator on 2016/12/2 0002.
 */
window.onload = function () {
    var nav = $("nav");
    var navLis = getElementsByClassName(nav, "navTab");
    var navTabCar = $("navTabCar");
    var mask = $("mask");
    for (var i = 1; i < navLis.length; i++) {
        navLis[i].index = i;
        navLis[i].onmouseover = function () {
            this.className = "navTab on";
            this.children[1].style.display = "block";
        }
        navLis[i].onmouseout = function () {
            this.className = "navTab";
            this.children[1].style.display = "none";
        }
    }
    navLis[0].onmouseover = function () {
        this.className = "navTab on";
        mask.style.display = "block";//鼠标移入显示遮罩层
        mask.style.opacity = 0.8;
        animate(navTabCar, {"left": -270, "width": 1023}, 10);//调用缓动函数，移入窗口，并设置好宽度
    }
    //最初设置效果是先移入在移出，但出现问题，在移出的过程中，如果鼠标经过盒子会再次触发onmouseover事件
    //解决办法：先移入，后改用减小宽度为0，这样可以最大程度避免重复触发
    navLis[0].onmouseleave = function () {//碰到的问题：这里用onmouseout时会出现bug（移入这个li的子元素也会触发）
            this.className = "navTab";
            animate(navTabCar, {"width": 0}, 10, function () {//调用缓动函数，减小宽度，（注意要设置overflow:hidden）等减到0时回到初始位置
                navTabCar.style.left = -1450 + "px";
            });
            animate(mask, {"opacity": 0}, 10, function () {//鼠标移出后渐渐地变成透明，完成后隐藏
                mask.style.display = "none";//如果不隐藏依然占位会遮住底层的元素
            });
    }
    var f_rightNav = $("f_rightNav");
    var r_navs = f_rightNav.children[0].children;
    for (var i = 0; i < r_navs.length; i++) {
        r_navs[i].onmouseover = function () {
            animate(this, {"left": -100}, 10);
        }
        r_navs[i].onmouseout = function () {
            animate(this, {"left": 0}, 10);

        }
    }
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

    function animate(obj, json, speed, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / speed;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k));
                    var target = json[k];
                    var step = (target - leader) / 8;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader !== target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (typeof fn === "function") {
                    fn();
                }
            }
        }, 15);
    }
}




