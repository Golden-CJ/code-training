/**
 * Created by ThinkPad on 2016/12/5.
 */
window.onload = function () {
    //打开工具栏的下拉菜单
    function fn1() {
        menu.style.display = "none";
        $("open").style.height = 120 + "px";
        $("open").style.backgroundColor = "#cf1132";
        $("open").children[0].style.backgroundPosition = "0 0";
    }

    var time1 = null;
    var time2 = null;
    var time3 = null;
    $("open").onclick = function () {
        clearInterval(time1);
        clearInterval(time2);
        if ($("menu").style.display === "none") {
            this.style.backgroundColor = "#282b2d";
            this.style.height = 100 + "px";
            this.children[0].style.backgroundPosition = "-34px 0"
            $("menu").style.display = "block";


            time1 = setInterval(function () {

                var leader = parseInt(getStyle($("menu"), "height"));
                var target = 847;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                $("menu").style.height = leader + "px";
                if (step === 0) {
                    clearInterval(time2);
                }
            }, 25);


        } else {


            time1 = setInterval(function () {

                var leader = parseInt(getStyle($("menu"), "height"));
                var target = 0;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                $("menu").style.height = leader + "px";
                if (step === 0) {
                    clearInterval(time1);
                    fn1()
                }
            }, 25);
        }


    };
    $("topClose").onclick = function () {
        clearInterval(time1);
        clearInterval(time2);
        clearInterval(time3);
        time3 = setInterval(function () {

            var leader = parseInt(getStyle($("menu"), "height"));
            var target = 0;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            $("menu").style.height = leader + "px";
            if (step === 0) {
                clearInterval(time3);
                fn1()
            }
        }, 25);
    }
    //开始banner图左右按钮
    var t = null;
    var lis = $("btn_nav").children;
    var divs = $("banner_box").getElementsByClassName("banner-img");
    var pic = 0;
    var square = 0;
    var flag1 = true;
    $("next").onclick = function () {
        //if(flag1){
        //    flag1 = false;
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.display = "none";
                lis[i].children[0].removeAttribute("class", " ");
                animate(divs[i], {"opacity": 0.7});
            }
            if (pic === divs.length-1) {
                pic = -1;

            }
            $("small_img").setAttribute("src", "images/bj"+1+ (pic + 3) + ".jpg");
            pic++;
            divs[pic].style.display = "block";
            animate(divs[pic], {"opacity": 1});
            if (square === divs.length-1) {
                square = -1;
            }
            square++;
            lis[square].children[0].setAttribute("class", "current");




        //}
        //function fn5(){
        //    flag1 = true;
        //}

        //for (var i = 0; i < divs.length; i++) {
        //    divs[i].style.display = "none";
        //    lis[i].children[0].removeAttribute("class", " ");
        //    animate(divs[i], {"opacity": 0.7});
        //}
        //if (pic === divs.length-1) {
        //    pic = -1;
        //
        //}
        //$("small_img").setAttribute("src", "images/bj"+1+ (pic + 3) + ".jpg");
        //pic++;
        //divs[pic].style.display = "block";
        //if (square === divs.length-1) {
        //    square = -1;
        //}
        //square++;
        //lis[square].children[0].setAttribute("class", "current");
        //
        //animate(divs[pic], {"opacity": 1},fn5);


    }

    $("last").onclick = function () {
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = "none";
            animate(divs[i], {"opacity": .7});
            lis[i].children[0].removeAttribute("class", " ");
        }
        if (pic === 0) {
            pic = divs.length;

        }

        $("small_img1").setAttribute("src", "images/bj"+1+ (pic -1) + ".jpg");
        pic--;
        divs[pic].style.display = "block";
        animate(divs[pic], {"opacity": 1});
        if (square === 0) {
            square = divs.length;
        }
        square--;
        lis[square].children[0].setAttribute("class", "current");

    };
    //开始banner圆圈按钮
    for (var j = 0; j < lis.length; j++) {
        lis[j].index = j;
        lis[j].onclick = function () {
            clearInterval(t);
            $("next").onclick();
            pic = square = this.index-1;
        };


    };
    //
    //所有移出，移入事件2秒后执行

    t = setInterval(function () {
        $("next").onclick();
    }, 5000);
    $("banner_box").onmouseover = function () {
        clearInterval(t);
    };
    setTimeout(function () {

        $("banner_box").onmouseout = function () {
            t = setInterval(function () {

                $("next").onclick();
            }, 5000);
        };
    }, 2000)
    //给banner底部轮播图按钮设置

    $("ctrl").children[0].onclick = function () {
        for (var j = 0; j < $("ctrl").children.length; j++) {
            $("ctrl").children[j].removeAttribute("class");
        }
        this.setAttribute("class", "cur");
        animate($("move1"), {"left": 0});
        animate($("move2"), {"left": 640});
    };
    $("ctrl").children[1].onclick = function () {
        for (var j = 0; j < $("ctrl").children.length; j++) {
            $("ctrl").children[j].removeAttribute("class");
        }
        this.setAttribute("class", "cur");
        animate($("move1"), {"left": -640});
        animate($("move2"), {"left": 0});

    };

    //banner底部轮播图文字效果

    function fn3(obj) {
        $(obj).children[3].style.color = "white";
        $(obj).style.background = "rgba(0,0,0,0)";
        animate1($(obj).children[2], -40, "top");
        animate1($(obj).children[1], 0, "top");
        animate1($(obj).children[0], 0, "bottom");
        animate1($(obj).children[3], 200, "top");
    }

    function fn4(obj) {
        //$(obj).children[3].style.color = "white";
        $(obj).style.background = "rgba(0,0,0,.5)";
        animate1($(obj).children[2], 0, "top");
        animate1($(obj).children[1], -60, "top");
        animate1($(obj).children[0], -120, "bottom");
        animate1($(obj).children[3], 130, "top");
    }

    $("over1").onmouseover = function () {
        fn3("over1")
    }
    $("over1").onmouseout = function () {
        fn4("over1")

    }
    $("over2").onmouseout = function () {
        fn4("over2")
    }
    $("over3").onmouseout = function () {
        fn4("over3")
    }
    $("over4").onmouseout = function () {
        fn4("over4")
    }
    $("over2").onmouseover = function () {
        fn3("over2")
    }
    $("over3").onmouseover = function () {
        fn3("over3")
    }
    $("over4").onmouseover = function () {
        fn3("over4")
    }



    //热点游戏
    var k = 0
    $("change").onclick = function(){
        if(k ===3){
            k=0;
        }
        k++;
        fn10(fn11);
        return false;
    };

    function fn10(fn){
        $("hot").children[0].style.transform = "scale(0)";
        $("hot").children[1].style.transform = "scale(0)";
        $("hot").children[2].style.transform = "scale(0)";
        setTimeout(fn,1500);
    }
    function fn11(){
        $("hot").children[0].style.transform = "scale(1)";
        $("hot").children[1].style.transform = "scale(1)";
        $("hot").children[2].style.transform = "scale(1)";
        $("hot-img1").setAttribute("src","images/hot2"+k+".jpg");
        $("hot-img2").setAttribute("src","images/hot1"+k+".jpg");
        $("hot-img3").setAttribute("src","images/hot3"+k+".jpg");
    }
//游戏主题开始
    var links = $("link").children;
    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            animate1(this.children[0], 200, "top");
            animate1(this.children[1], 200, "top");
            animate1(this.children[2], 300, "top");
        };
        links[i].onmouseout = function () {
            animate1(this.children[0], 0, "top");
            animate1(this.children[1], 400, "top");
            animate1(this.children[2], 200, "top");
        }
    }
    function animate1(obj, target, att) {
        clearInterval(obj.time);
        obj.time = setInterval(function () {
            var leader = parseInt(getStyle(obj, att, null));
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[att] = leader + "px";
            if (leader === target) {
                clearInterval(obj.time);

            }
        }, 15);
    }


    function $(id) {
        return document.getElementById(id)
    };

    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {//opacity要特殊处理
                    //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                    //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = (leader + step) ;
                    obj.style[k] = leader/ 100;//opacity没有单位
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
                if (leader != target ) {
                    flag = false;

                }

            }
            if (flag) {
                console.log(2);
                clearInterval(obj.timer);
                if (fn === "function") {
                    fn();
                    console.log(1);
                }
            }
        }, 100);
    }

    //全部属性都到达目标值才能清空
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

};