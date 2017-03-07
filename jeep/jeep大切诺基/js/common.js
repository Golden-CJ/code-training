/**
 * Created by Administrator on 2016/12/2 0002.
 */
function fzy_common() {
    //导航栏开始
    var nav = $("#nav")[0];
    var navLis = getElementsByClassName(nav, "navTab");
    var navTabCar = $("#navTabCar")[0];
    for (var i = 1; i < navLis.length; i++) {
        navLis[i].index = i;
        navLis[i].onmouseenter = function () {
            var _this = this;//申明一个变量保存this，然后可以传递给定时器
            this.timer = setTimeout(function () {
                _this.className = "navTab on";
                _this.children[1].style.display = "block";
            }, 500);
        }
        navLis[i].onmouseleave = function () {
            clearTimeout(this.timer);
            this.className = "navTab";
            this.children[1].style.display = "none";
        }
    }
    navLis[0].onmouseenter = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            _this.className = "navTab on";
            animate(navTabCar, {"left": -250, "height": 542});//调用缓动函数，移入窗口，并设置好高度
        }, 300);
    }
    navLis[0].onmouseleave = function () {//碰到的问题：这里用onmouseout时会出现bug（移入这个li的子元素也会触发）
        clearTimeout(this.timer);
        this.className = "navTab";
        animate(navTabCar, {"height": 0}, function () {//调用缓动函数，减小宽度，（注意要设置overflow:hidden）等减到0时回到初始位置
            navTabCar.style.left = 1450 + "px";
        });
    }
    //导航栏结束
    //右边栏开始
    /*var audio = new Audio()
     audio.controls = true  //这样控件才能显示出来
     audio.src = 'xxxxx'  //音乐的路径*/
    var overMusic = new Audio('media/over.wav');
    overMusic.volume = 0.9;
    var f_rightNav = $("#f_rightNav")[0];
    var r_navs = f_rightNav.children[0].children;
    for (var i = 0; i < r_navs.length; i++) {
        r_navs[i].onmouseenter = function () {//mouseover 和 mouseout 因为这两个事件在移入子元素时会触发，所以改用mouseenter和mouseleave
            overMusic.play();
            animate(this, {"left": -100});
        }
        r_navs[i].onmouseleave = function () {
            animate(this, {"left": 0});
        }
    }
    //new 一个Audio对象
    //var bgMusic=new Audio('music/Faded.mp3');
    var bgMusic = new Audio('music/Gala.mp3');
    bgMusic.volume=0.9;
    //假设现在没有播放
    var playFlag = false;
    //点击调用对象的play方法
    r_navs[r_navs.length - 1].onclick = function () {
        if (!playFlag) {//没有播放会进来播放，然后标记变为true
            bgMusic.play();
            playFlag = true;
        } else {
            bgMusic.pause();
            playFlag = false;
        }
    }
    //右边栏结束
    //logo部分移入效果开始
    var wcMusic = new Audio('media/over.wav');
    wcMusic.volume = 0.9;
    var logo = $("#logo")[0];
    var wcFlag = false;//欢迎语没出来过
    var wcUl = $("#wellcome")[0];
    var wcArr=["W","e","l","l","c","o","m","e","&nbsp;","t","o","&nbsp;","J","e","e","p"];
    for (var i=0;i<wcArr.length;i++){
        var li=document.createElement("li");
        li.innerHTML=wcArr[i];
        wcUl.appendChild(li);
    }
    var wlis = wcUl.children;
    var j = 0;
    var regWord=/^\S*$/;//正则，可见字符返回true
    logo.onmouseenter = function () {//logo鼠标移入 欢迎语出
        if (!wcFlag) {
            this.timer = setTimeout(function () {
                wcFlag = true;//欢迎过了
                wcUl.style.display = "block";
                animate2(wlis[j], {"left": 100}, well);
            }, 300);
        }
    }
    logo.onmouseleave = function () {
        clearTimeout(this.timer);
    }
    function well() {
        if (regWord.test(wlis[j].innerText)){
            console.log(wlis[j].innerText);
            wcMusic.play();
        }
        if (j < wlis.length - 1) {
            j++;
            animate2(wlis[j], {"left": wlis[j - 1].offsetWidth + wlis[j - 1].offsetLeft}, well);
        }else {
            animate2(wlis[j], {"left": wlis[j - 1].offsetWidth + wlis[j - 1].offsetLeft}, function () {
                setTimeout(function () {
                    animateys(wcUl, {"left": 1500}, function () {
                        wcUl.style.display = "none";
                        wcUl.style.left = 0;
                        for (var i = 0; i < wlis.length; i++) {
                            wlis[i].style.left = -100 + "px";
                        }
                    });
                }, 500);
            });
        }
    }
    //logo部分移入效果结束
}
addLoadEvent(fzy_common);//添加给window.onload







