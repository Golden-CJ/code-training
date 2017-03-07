/**
 * Created by Administrator on 2016/12/7.
 */



 //鼠标经过让小圆点出现
    window.onload=function() {
        var div = document.getElementById("wx_aa");
        var ul = div.children[0];
        var lis = ul.children;
        var spans = ul.getElementsByTagName("span");
        for (var i = 1; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onmouseover = function () {
                for (var i = 1; i < spans.length; i++) {
                    spans[this.index].style.display = "block";
                }
            }
            lis[i].onmouseout = function () {
                for (var i = 1; i < spans.length; i++) {
                    spans[this.index].style.display = "none";
                }
            }
        }
//轮播图
        var box = document.getElementById("box");
        var screen = box.children[0];
        var ul = screen.children[0];
        var ulLis = ul.children;
        var ol = screen.children[1];
        var imgWidth = screen.offsetWidth;

        for (var i = 0; i < ulLis.length; i++) {
            var li = document.createElement("li");
            ol.appendChild(li);
        }
        var olLis = ol.children;
        olLis[0].className = "current";
        var firstImg = ulLis[0].cloneNode(true);
        ul.appendChild(firstImg);


        for (var j = 0; j < olLis.length; j++) {
            olLis[j].inner = j;
            olLis[j].onmouseover = function () {
                for (var k = 0; k < olLis.length; k++) {
                    olLis[k].className = "";
                }
                this.className = "current";
                var target = -this.inner * imgWidth;
                animate(ul, target);
                pic = ss = this.inner;
            };

        }

        var pic = 0;
        var ss = 0;
        var timer = null;

        function right() {
            if (pic === ulLis.length - 1) {
                ul.style.left = 0+"px";
                pic=0;

            }
            pic++;
            target = -pic * imgWidth;
            animate(ul, target);

            if (ss < olLis.length - 1) {
                ss++;
            } else {
                ss = 0;
            }

            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            olLis[ss].className = "current";
        }


            box.onmouseover = function () {
                clearInterval(timer);
            }
            box.onmouseout = function () {
                timer=setInterval(function(){
                    right();

                },3000)

            }

            clearInterval(timer);
          timer=setInterval(function(){
              right();

          },2000)
        //获取搜素框焦点，失去搜素框焦点
        var txt =document.getElementById("wx1");
        var txt2 =document.getElementById("wx2");
        var gg=document.getElementById("wx9");

        txt.onfocus=function(){
               txt.value="";
            }
        gg.onclick=function(){
            if(txt.value == 123456 && txt2.value == 123456 ){
                // alert("正确");
                window.open("link.html","_self");
            }else{
                alert("账号或密码错误，请您重新输入");
            }
        }
        document.onkeyup = function (e){

            if(e.keyCode === 13){
                if(txt.value == 123456 && txt2.value == 123456){
                        window.open("link.html","_self");
                    }else{
                        alert("账号或密码错误，请重新输入");
                    }
            }
        }
    }

