function yy(){
	var y_nav = document.getElementById("y-nav")
    var y_a = y_nav.children;//获取a标签
    var y_n_color = document.getElementById("y_n_color")

    var y_t_a = document.getElementById("y_t_a")
    var y_t_drop = y_t_a.children;


    //获取每一个a
    for (var i = 0; i < y_a.length; i++) {
        y_a[i].onmouseover = function () {
            this.children[1].style.display = "block";
            this.children[2].style.color = "orange";

        }
        y_a[i].onmouseout = function () {
            this.children[1].style.display = "none";
            this.children[2].style.color = "#3E3E3E";
        }

    }


    for (var i = 0; i < y_t_drop.length; i++) {
        y_t_drop[i].onmouseover = function () {
            if (this.children[1]) {
                this.children[1].style.display = "block";
                this.children[2].style.display = "block";
            }

        }
        y_t_drop[i].onmouseout = function () {
            if (this.children[1]) {
                this.children[1].style.display = "none";
                this.children[2].style.display = "none";
            }

        }
    }


    //动态生成ol的li
    var y_height = document.getElementById("y-height");
    var screen = y_height.children[0];
    var ul = screen.children[0];
    var ulLis = ul.children;
    var ol = screen.children[1];
    var arr = document.getElementById("y_arr");
    var left = document.getElementById("y_a_left");
    var right = document.getElementById("y_a_right");
    var imgWidth = screen.offsetWidth;
    var timer = null;

    for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "current";
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);


    //鼠标经过按钮  按钮排他 移动ul到相应位置
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            this.className = "current";
            //移动ul
            //目标和 当前按钮的索引有关 和图片宽度有关 而且是负数
            var target = -this.index * imgWidth;
            animateyy(ul, {
                "left": target
            });
            //把记录当前显示的图片的索引的pic统一成当前按钮的索引
            //把记录当前亮起的按钮的索引的square统一成当前按钮的索引
            pic = square = this.index;

        };
    }

    //点击箭头
    y_height.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    };
    y_height.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(playNext, 3000);
    };
    var pic = 0;//记录当前显示的图片的索引
    var square = 0;//记录当前亮起的按钮的索引

    //点击右箭头 移动ul到相应位置
    right.onclick = function () {
        if (pic === ulLis.length - 1) {
            ul.style.left = 0;
            pic = 0;
        }
        pic++;//计算接下来要显示的图片的索引
        var target = -pic * imgWidth;
        animateyy(ul,{ "left": target});

        //按钮也要跟着跑
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }

        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下对应的
        olLis[square].className = "current";

    };
    left.onclick = function () {
        if (pic === 0) {
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
            pic = ulLis.length - 1;
        }
        pic--;
        var target = -pic * imgWidth;
        animateyy(ul,{ "left":target});

        //按钮也要跟着跑
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }

        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下对应的
        olLis[square].className = "current";
    };

    //添加自动滚动
    timer = setInterval(playNext, 3000);
    function playNext() {
        right.onclick();
    }


    function animateyy(obj, json, fn) {
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
                    leader = (leader + step);
                    obj.style[k] = leader / 100;//opacity没有单位
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
                if (fn) {
                    fn();
                }
            }
        }, 5);
    }
}
addLoadEvent(yy);