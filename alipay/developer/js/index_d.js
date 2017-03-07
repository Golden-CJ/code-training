window.onload = function () {
//业务逻辑：鼠标放在li上 缓慢切换背景图 自动轮播是自己匀速转动
	var box = document.getElementById("bgc");
        var ul = document.getElementById("bgc_ul");
        var lis = ul.children;
        var img = box.children[0];
        var lastPosition = 0;		//记录上一次的悬停位置
        var flag = true;			//节流阀 默认开
        var timer = null;
        var x = 0;
        function resign() {
            //检测img切换是否结束 结束就打开节流阀
            slow(img,{"opacity":1},function(){
                flag = true;
            })
        }
        box.onmouseover = function (){
            clearInterval(timer);
        }
        box.onmouseout = function (){
            timer = setInterval(move,4000);

        }
        //鼠标悬停li上时 对应索引的图片渐出
        for(var i = 0;i < lis.length;i++) {
            lis[i].index = i;						//li[0] = img1
            lis[i].onmouseover = function () {
                // clearInterval(timer);
                //如果鼠标多次悬停同一张图片 不产生变化 lastPosition解决
                //如果当前效果没有完成 节流阀关闭 检测完成再打开
                if(flag){
                    flag = false;				//暂时关闭开关
                    if(this.index != lastPosition) {
                        img.style.opacity = 0.2;
                        img.src = "images/lunbotu"+(this.index + 1)+".png"
                        slow(img,{"opacity":1})
                        lastPosition = this.index;
                        for(var i = 0;i < lis.length;i++) {
                            lis[i].style.backgroundColor = "#fff";
                        }
                        this.style.backgroundColor = "#108ee9"
                    }
                    resign();					//动画结束 重新打开
                    x =  this.index;
                }
            };
        }

        //自动轮播 li的样式与图片同时改变
        //图片索引

        timer = setInterval(move,4000);

        function move(){
            x++;
            x%= lis.length;

            for(var i = 0;i < lis.length;i++) {
                for(var j = 0;j < lis.length;j++) {
                    lis[j].style.backgroundColor = "#fff";
                    img.style.opacity = 0.3;
                }
                lis[x].style.backgroundColor = "#108ee9";
                // img = img[x+1];
                slow(img,{"opacity":0});
                img.src = "images/lunbotu"+(x+1)+".png";
                slow(img,{"opacity":1})
            }
        }
    }
    function slow(obj,json,fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var flag = true;
            for(var k in json) {
                if(k ==="opacity") {
                    var leader = getStyle(obj,k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 880;								//变化
                    step = step > 0? Math.ceil(step) : Math.floor(step);			//变化限制
                    leader = leader + step;											//每次的变化
                    obj.style[k] = leader / 100;
                } else if(k === "zIndex") {
                    obj.style[k] = json[k];
                } else {
                    var leader = parseInt(getStyle(obj,k)) || 0;					//初始
                    var target = json[k];											//目标
                    var step = (target - leader) / 16;								//变化
                    step = step > 0? Math.ceil(step) : Math.floor(step);			//变化限制
                    leader = leader + step;											//每次的变化
                    obj.style[k] = leader + "px";
                }								//每次变化后的属性值
                if(leader != target) {
                    flag = false;
                }
            }
            if(flag) {
                clearInterval(obj.timer);
                if(typeof fn === "function") {
                    fn();
                }
            }
        },16)
    }
    function getStyle(obj,attr) {
        if(window.getComputedStyle) {
            return window.getComputedStyle(obj,null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

	var ablity_ul = document.getElementById("ablity_ul");
    var ablity_li = ablity_ul.children;
    var top_word = document.getElementsByClassName("top_word");
    var bottom_word = document.getElementsByClassName("bottom_word");
    //ablity_li的鼠标经过效果 给top_word和bottom_word添加颜色效果
    for(var i = 0;i < ablity_li.length;i++) {
        ablity_li[i].index = i;
        ablity_li[i].onmouseover = function () {
            for(var i = 0;i < top_word.length;i++) {
                top_word[this.index].style.color = "#108ee9";
                bottom_word[this.index].style.color = "#108ee9";
                this.style.cursor = "pointer"
            }
        };
        ablity_li[i].onmouseout = function () {
            for(var i = 0;i < top_word.length;i++) {
                top_word[this.index].style.color = "#38425C"
                bottom_word[this.index].style.color = "#6D7C8F";
            }
        };
    }

    var r_ewm = document.getElementById("r_ewm");

    var service = document.getElementById("service");
    var zixun = document.getElementById("zixun");

    var r_nav = document.getElementById("r_nav");
    var li = r_nav.children;

    var r_push = document.getElementById("r_push");
    var r_push1 = document.getElementById("r_push1");

    var hid = document.getElementById("hid");
    var timer = null;

    service.onmouseover=function(){
        zixun.style.display="block";
    }
    service.onmouseout=function(){
        zixun.style.display="none";
    }
    var yrl = hid.parentNode
                var timer = null;
                function sloww() {
                    clearInterval(timer);
                    timer = setInterval(function(){
                        var target = yrl.offsetHeight;
                        var leader = hid.offsetHeight;
                        var step = (target - leader) / 16;
                        step = step > 0? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        hid.style.height = leader + "px";
                        if(leader === target) {
                            clearInterval(timer);
                        }
                    },15)

                }
                yrl.onmouseover = function () {
                    sloww();
                };
                yrl.onmouseout = function () {
                    clearInterval(timer);
                    timer = setInterval(function(){
                        var target = 0;
                        var leader = hid.offsetHeight;
                        var step = (target - leader) / 16;
                        step = step > 0? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        hid.style.height = leader + "px";
                        if(leader === target) {
                            clearInterval(timer);
                        }
                    },15)
                }

    r_ewm.onmouseover = function () {
        this.nextElementSibling.style.display = "block";
    }
    r_ewm.onmouseout = function () {
        this.nextElementSibling.style.display = "none";
    }

    for (var i = 0; i < li.length; i++) {
        li[i].onmouseover = function () {
            for (var i = 0; i < li.length; i++) {
                li[i].className = "";
            }
            this.className = "current";
        }
        li[i].onmouseout = function () {
            for (var i = 0; i < li.length; i++) {
                li[i].className = "";
            }
        }
    }