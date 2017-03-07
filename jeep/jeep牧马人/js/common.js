/**
 * Created by Administrator on 2016/12/2 0002.
 */
window.onload = function () {
    var nav = $("#nav")[0];
    var navLis = getElementsByClassName(nav, "navTab");
    var navTabCar = $("#navTabCar")[0];
    var mask = $("#mask")[0];
    var timer=null;
    var config=[
        {"width":1074,"left":0},
        {"width":90,"left":1077},
        {"width":90,"left":1167},
        {"width":90,"left":1259},
    ];//手风琴初始样式配置单
    var config1=[
        {"zIndex":2,"opacity":1},
        {"zIndex":1,"opacity":0}
    ];
    var config2=[
        {"zIndex":1,"opacity":0},
        {"zIndex":2,"opacity":1}
    ];
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
    //解决办法：先移入，后改用减小宽度为0，这样可以最大程度避免重复触发
    navLis[0].onmouseleave = function () {//碰到的问题：这里用onmouseout时会出现bug（移入这个li的子元素也会触发）
        mask.style.display = "none";
            this.className = "navTab";
            animate(navTabCar, {"width": 0}, 10, function () {//调用缓动函数，减小宽度，（注意要设置overflow:hidden）等减到0时回到初始位置
                navTabCar.style.left = -1450 + "px";
            });
            animate(mask, {"opacity": 0}, 10, function () {//鼠标移出后渐渐地变成透明，完成后隐藏
                mask.style.display = "none";//如果不隐藏依然占位会遮住底层的元素
            });
    }
    var wrightNav = $("#wrightNav")[0];
    var r_navs = wrightNav.children[0].children;
    for (var i = 0; i < r_navs.length; i++) {
        r_navs[i].onmouseover = function () {
            animate(this, {"left": -100}, 10);
        }
        r_navs[i].onmouseout = function () {
            animate(this, {"left": 0}, 10);

        }
    }
    var wSlider=document.getElementById("wSlider");
    var wul=wSlider.children[0];
    var wullis=wul.children;
    assign();
    var black=document.getElementById("black");
    animate(black,{"width":1073});
    for(var i=0;i<wullis.length;i++){
        wullis[i].style.backgroundImage="url('images/index/by" + (i + 1) + ".jpg')";
        wullis[i].onmouseover= function () {
            for(var j=0;j<wullis.length;j++){
                animate(wullis[j],{"width":100});
            }
            animate(this,{"width":1070});
        };
    }
  //手风琴特效的实现
    var kv=document.getElementById("kv");
    var kvul=kv.children[0];
    var ullis=kvul.children;
    //console.log(ullis);
    var clicBox=kv.children[1];
    var kvol=clicBox.children[0];
    var ollis=kvol.children;
    var k1=document.getElementById("k1");
    var k2=document.getElementById("k2");
    var o1=document.getElementById("o1");
    var o2=document.getElementById("o2");
    for(var i=0;i<ollis.length;i++){
                ollis[i].onclick= function () {
                    flag=false;
                    config2.unshift(config2.pop());
                    assign2();
                    for(var j=0;j<ollis.length;j++){
                        ollis[j].className="";
                    }
                    this.className=" current";
                }
            }
    //第一个弹出按钮
    /*var jkPup=document.getElementById("jkPup");
    var pupcon=jkPup.children[1];
    var midbox1=pupcon.children[0];
    var closepup=document.getElementById("closepup");
    var midboxshow=document.getElementById("midboxshow");
    open(midboxshow,jkPup);
    close(closepup,jkPup);*/
    //midboxshow.onclick= function () {
    //        jkPup.style.display="block";
    //
    //}
    //closepup.onclick= function () {
    //    jkPup.style.display="none";
    //
    //}
    //第二个弹出按钮


    function open(obj,target){
        obj.onclick= function () {
            target.style.display="block";

        }
    }
    function close(obj,target){
        obj.onclick= function () {
            target.style.display="none";

        }
    }
    //goAuto();
    //var timer=setInterval(goAuto,20);
    //function goAuto(){
    //    for(var i=0;i<ollis.length;i++){
    //        ollis[i].onclick= function () {
    //            flag=false;
    //            config2.unshift(config2.pop());
    //            assign2();
    //            for(var j=0;j<ollis.length;j++){
    //                ollis[j].className="";
    //            }
    //            this.className=" current";
    //        }
    //    }
    //}

    //o1.onclick= function () {
    //  flag=false;
    //    assign1();
    //    o1.className="oli1 current";
    //    o2.className="oli2";
    //}
    //o2.onclick= function () {
    //    flag=false;
    //    assign2();
    //    o1.className="oli1";
    //    o2.className="oli2 current";
    //
    //}

    function assign() {
        for (var i = 0; i < wullis.length; i++) {
            animate(wullis[i], config[i], function () {
                flag = true;
            });
        }
    }
    function assign1() {
        for (var i = 0; i < ullis.length; i++) {
            animate(ullis[i], config1[i], function () {
                flag = true;
            });
        }
    }
    function assign2() {
        for (var i = 0; i < ullis.length; i++) {
            animate(ullis[i], config2[i], function () {
                flag=true;
            });
        }
    }
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {//opacity要特殊处理
                    //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                    //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                    var leader = getStyle(obj, k) *100;
                    var target = json[k] *100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader/100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
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
                if (typeof fn === "function") {
                                    fn();
                                }
                }
        },30);
    }
    //function animate(obj, json, speed, fn) {
    //    clearInterval(obj.timer);
    //    obj.timer = setInterval(function () {
    //        var flag = true;
    //        for (var k in json) {
    //            if (k === "opacity") {
    //                var leader = getStyle(obj, k) * 100;
    //                var target = json[k] * 100;
    //                var step = (target - leader) / speed;
    //                step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //                leader = leader + step;
    //                obj.style[k] = leader / 100;
    //            } else if (k === "zIndex") {
    //                obj.style.zIndex = json[k];
    //            } else {
    //                var leader = parseInt(getStyle(obj, k));
    //                var target = json[k];
    //                var step = (target - leader) /10;
    //                step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //                leader = leader + step;
    //                obj.style[k] = leader + "px";
    //            }
    //            if (leader !== target) {
    //                flag = false;
    //            }
    //        }
    //        if (flag) {
    //            clearInterval(obj.timer);
    //            if (typeof fn === "function") {
    //                fn();
    //            }
    //        }
    //    }, 15);
    //}
}
//function autoGo1(){
//    o1.onclick();
//}
//function autoGo2(){
//    o2.onclick();
//}




