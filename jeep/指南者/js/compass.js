/**
 * Created by wuxu on 2016/12/2.
 */
window.onload = function () {
    /* j-topnavli1 B */
    var j_header = getId("j_header");
    var j_main = getId("j_main");
    var j_txt9 = getId("j_txt9");
    var j_paopao = getId("j_paopao");
    var j_banner2 = getId("j_banner2");
    var j_topnavli1 = getId("j_topnavli1");
    var j_topnavli2 = getId("j_topnavli2");
    var j_topnavli4 = getId("j_topnavli4");
    var j_topnavli5 = getId("j_topnavli5");
    var j_topnavli8 = getId("j_topnavli8");
    var j_topnavli9 = getId("j_topnavli9");
    var j_ban2hov = getId("j_ban2hov");
    var j_lis1 = getClassName(j_header, "j_tnavli1")[0];
    var j_lis1bgc = getClassName(j_header, "j_tnavli1bgc")[0];
    var j_lis2 = getClassName(j_header, "j_tnavli2")[0];
    var j_lis4 = getClassName(j_header, "j_tnavli4")[0];
    var j_lis5 = getClassName(j_header, "j_tnavli5")[0];
    var j_lis8 = getClassName(j_header, "j_tnavli8")[0];
    var j_lis9 = getClassName(j_header, "j_tnavli9")[0];
    var j_header_main = getClassName(j_header, "j-header-main")[0];
    /*设置顶部导航栏鼠标经过显示内容盒子*/
    j_topnavli1.onmouseover = function(){
        j_lis1.style.display = "block";
        j_lis1bgc.style.display = "block";
    };
    mouseoverblock(j_topnavli2, j_lis2);
    mouseoverblock(j_topnavli4, j_lis4);
    mouseoverblock(j_topnavli5, j_lis5);
    mouseoverblock(j_topnavli8, j_lis8);
    mouseoverblock(j_topnavli9, j_lis9);
    /*设置顶部导航栏鼠标离开隐藏内容盒子*/
    j_topnavli1.onmouseout = function(){
        j_lis1.style.display = "none";
        j_lis1bgc.style.display = "none";
    };
    mouseoutnone(j_topnavli2, j_lis2);
    mouseoutnone(j_topnavli4, j_lis4);
    mouseoutnone(j_topnavli5, j_lis5);
    mouseoutnone(j_topnavli8, j_lis8);
    mouseoutnone(j_topnavli9, j_lis9);
    /*设置顶部导航栏固定效果*/
    window.onscroll = function () {
        if (scroll().top > 0) {
            j_header_main.className = "j-header-main j-fixed";
            j_main.style.paddingTop = "67px";
        } else {
            j_header_main.className = "j-header-main";
            j_main.style.paddingTop = 0;
        }
    };
    /* 导航栏input */
    /*鼠标聚集焦点时用户没有输入内容默认内容清除*/
    j_txt9.onfocus = function () {
        if (this.value === "全新自由光") {
            this.value = "";
        }
    };
    /*鼠标离开而且用户没有输入内容 加入默认内容*/
    j_txt9.onblur = function () {
        if (this.value === "") {
            this.value = "全新自由光";
            this.style.color = "#5d5a5c";
        }
    };
    /* j-topnavli1 E */
    /* j_banner2 B */
    //鼠标移动事件
    j_banner2.onmousemove = function (event) {
        //获取鼠标在j_banner2区域内的坐标
        var event = event || window.event;
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientX + document.documentElement.scrollTop;
        var posx = pageX - j_banner2.offsetLeft - j_paopao.offsetWidth / 2;
        var posy = pageY - j_banner2.offsetTop - j_paopao.offsetHeight / 2;
        //把获取到的坐标值赋值给定位后的背景图片，完成鼠标跟随移动的效果
        j_paopao.style.left = posx + "px";
        j_paopao.style.top = posy + "px";
    };
    var j_ban2anniu = j_ban2hov.children[0];
    var j_ban2cen = j_ban2hov.children[2];
    /*黄色按钮渐变效果*/

    /*设置鼠标放置显示广告内容*/
    mouseoverblock(j_ban2anniu, j_ban2cen);
    /*设置鼠标离开隐藏广告内容*/
    mouseoutnone(j_ban2anniu, j_ban2cen);
    /* j_banner2 B */

    /* j_banner3,4,6 鼠标移入移除事件 B */
    var j_ban3hov = getId("j_ban3hov");
    var j_ban3anniu = j_ban3hov.children[0];
    var j_ban3cen = j_ban3hov.children[1];
    var j_ban4hov = getId("j_ban4hov");
    var j_ban4anniu = j_ban4hov.children[0];
    var j_ban4cen = j_ban4hov.children[1];
    var j_ban6hov = getId("j_ban6hov");
    var j_ban6anniu1 = j_ban6hov.children[0];
    var j_ban6cen1 = j_ban6hov.children[1];
    var j_ban6anniu2 = j_ban6hov.children[2];
    var j_ban6cen2 = j_ban6hov.children[3];
    /*设置鼠标放置显示广告内容*/
    mouseoverblock(j_ban3anniu, j_ban3cen);
    mouseoverblock(j_ban4anniu, j_ban4cen);
    mouseoverblock(j_ban6anniu1, j_ban6cen1);
    mouseoverblock(j_ban6anniu2, j_ban6cen2);
    /*设置鼠标离开隐藏广告内容*/
    mouseoutnone(j_ban3anniu, j_ban3cen);
    mouseoutnone(j_ban4anniu, j_ban4cen);
    mouseoutnone(j_ban6anniu1, j_ban6cen1);
    mouseoutnone(j_ban6anniu2, j_ban6cen2);
    /* j_banner3,4,6 鼠标移入移除事件 E */

    /* j_banner5 手风琴效果 B */
    var ul = getId("j_banner5");
    var lis = ul.children;
    for (var i = 0; i < lis.length; i++) {
        //添加事件 鼠标经过所有元素宽度变30px
        lis[i].onmouseover = function () {
            for (var j = 0; j < lis.length; j++) {
                animate(lis[j], {"width": 30});
            }
            animate(this, {"width": 1216});
        };
        //鼠标离开整个盒子 元素回到原始状态
        ul.onmouseout = function () {
            for (var j = 0; j < lis.length; j++) {
                animate(lis[j], {"width": 228});
            }
        };
    }
    /* j_banner5 手风琴效果 E */


    /* 拉动按钮图片宽度跟随移动 B */
    var j_ban6btn = getId("j_ban6btn");
    var j_ban6tu = getId("j_ban6tu");
    var j_ban3btn = getId("j_ban3btn");
    var j_ban3tu = getId("j_ban3tu");
    var j_ban4btn = getId("j_ban4btn");
    var j_ban4tu = getId("j_ban4tu");
    function mousevemove(clickele,wigthele) {
        clickele.onmousedown = function (event) {
            var event = event || window.event;
            var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
            var boxx = pageX - clickele.offsetLeft - clickele.offsetWidth / 2;
            document.onmousemove = function (event) {
                var event = event || window.event;
                var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
                var boxX = pageX - boxx;
                if (boxX < 0) {
                    boxX = 0;
                }
                if (boxX > 1366) {
                    boxX = 1366;
                }
                event.preventDefault && event.preventDefault();
                clickele.style.left = boxX + "px";
                wigthele.style.width = boxX + "px";
            };
        };
        document.onmouseup = function(){
            document.onmousemove = null;
        };
    }
    mousevemove(j_ban6btn,j_ban6tu);
    mousevemove(j_ban3btn,j_ban3tu);
    mousevemove(j_ban4btn,j_ban4tu);

    /* 拉动按钮图片宽度跟随移动 E */




    /*  from B  */
    var j_name = getId("j_name");
    var regName = /^[\u4e00-\u9fa5]{2,6}$/;
    var j_phone = getId("j_phone");
    var regPhone = /^(13[0-9]|14[79]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
    var jf_close = getId("jf_close");
    var j_pup = getId("j_pup");
    var j_b7 = getId("j_b7");
    var kv_joinin = getId("kv_joinin");
    j_name.onblur = function(){
        var next = this.nextSibling.nextSibling;
        if(regName.test(this.value)){
            next.innerHTML = "";
        }else{
            next.innerHTML = "请输入姓名";
        }
    };
    j_phone.onblur = function(){
        var next = this.nextSibling.nextSibling;
        if(regPhone.test(this.value)){
            next.innerHTML = "";
        }else{
            next.innerHTML = "请输入11位手机号码";
        }
    };
    j_b7.onclick = function(){
        j_pup.style.display = "block";
    };
    kv_joinin.onclick = function(){
        j_pup.style.display = "block";
    };
    jf_close.onclick = function(){
        j_pup.style.display = "none";
    };
    document.onkeyup = function(event){
        if(event.keyCode === 27){
        j_pup.style.display = "none";
        }
    };
    /*  from E  */

    /* 函数封装 B */
    /*获取id元素*/
    function getId(ID) {
        return document.getElementById(ID);
    }

    /*通过类名获取元素封装*/
    function getClassName(element, className) {
        if (element.getElementsByClassName) {
            return element.getElementsByClassName(className);
        } else {
            var elements = element.getElementsByTagName("*");
            var arr = [];
            for (var i = 0; i < elements.length; i++) {
                if (element[i].className.indexOf(className) !== 1) {
                    arr.push(element[i]);
                }
            }
        }
        return arr;
    }

    /*封装scroll函数*/
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }

    /*封装缓动动画框架*/
    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 15;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (typeof fn == "function") {
                    fn();
                }
            }
        }, 10);
    }

    /*获取任意对象属性封装*/
    function getStyle(obj, arrt) {
        if (window.getComputedStyle(obj, null)[arrt]) {
            return window.getComputedStyle(obj, null)[arrt];
        } else {
            return obj.currentStyle[arrt];
        }
    }

    /*让任意对象 移动到 任意位置*/
    function animate(obj, josn, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in josn) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = josn[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = josn[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = josn[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (typeof fn == "function") {
                    fn();
                }
            }
        }, 15);
    }

    /*获取任意对象计算后 任意属性*/
    function getStyle(obj, arrt) {
        if (window.getComputedStyle(obj, null)[arrt]) {
            return window.getComputedStyle(obj, null)[arrt];
        } else {
            return obj.currentStyle[arrt];
        }
    }

    /*鼠标经过显示*/
    function mouseoverblock(obj1, obj2) {
        obj1.onmouseover = function () {
            obj2.style.display = "block";
        };
    }

    /*鼠标离开隐藏*/
    function mouseoutnone(obj1, obj2) {
        obj1.onmouseout = function () {
            obj2.style.display = "none";
        };
    }

    /* 函数封装 E */

};




