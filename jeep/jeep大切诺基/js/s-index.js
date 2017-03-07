/**
 * Created by ������ on 2016/12/8.
 */
addLoadEvent(ssss)
function ssss(){
    var navTitle = document.getElementById("navTitle");
    //var sss =document.getElementById("sss");
    var sss = $("sss");
    var kv1 = document.getElementById("kv1");
    var kv2 = document.getElementById("kv2");
    var timer = null;
    var box = document.getElementById("box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ulLis = ul.children;
    var ol = screen.children[1];
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var imgWidth = screen.offsetWidth;


    navTitle.onmouseover = function () {
        sss.style.display = "block"
        //console.log("222");
    }

    navTitle.onmouseout = function () {
        sss.style.display = "none"
    };


    //��̬���ɽṹ
    //����ol�еİ�ť
    for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "current";
    //��¡��һ��ͼ
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);

    //��꾭����ť  ��ť���� �ƶ�ul����Ӧλ��
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            //�ɵ�������
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            //�������Լ�
            this.className = "current";
            //�ƶ�ul
            //Ŀ��� ��ǰ��ť�������й� ��ͼƬ����й� �����Ǹ���
            var target = -this.index * imgWidth;
            animate(ul, target);
            //�Ѽ�¼��ǰ��ʾ��ͼƬ��������picͳһ�ɵ�ǰ��ť������
            //�Ѽ�¼��ǰ����İ�ť��������squareͳһ�ɵ�ǰ��ť������
            pic = square = this.index;

        };
    }

    //�����ͷ
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    };
    box.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(playNext, 3000);
    };
    var pic = 0;//��¼��ǰ��ʾ��ͼƬ������
    var square = 0;//��¼��ǰ����İ�ť������

    //����Ҽ�ͷ �ƶ�ul����Ӧλ��
    right.onclick = function () {
        //��������һ�� ��Ӧ�� ˲�����ؿ�ʼ Ȼ����ul����ĵ�һ�Ž������ƶ����ڶ���
        if (pic === ulLis.length - 1) {//���һ��ͼƬ������
            ul.style.left = 0;
            pic = 0;//picҲҪ����
        }
        pic++;//���������Ҫ��ʾ��ͼƬ������
        //Ŀ�� ��pic�й� ��ͼƬ����й� �����Ǹ���
        var target = -pic * imgWidth;
        animate(ul, target);

        //��ťҲҪ������
        if (square < olLis.length - 1) {
            square++;//�����������Ҫ����İ�ť������
        } else {
            square = 0;
        }

        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���¶�Ӧ��
        olLis[square].className = "current";

    };
    left.onclick = function () {
        //����ǵ�һ�� ��Ӧ�� ˲��������� Ȼ����ul�Ӽٵĵ�һ�Ž������ƶ���������һ��
        if (pic === 0) {
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
            pic = ulLis.length - 1;//picҪ�䵽���
        }
        pic--;//���������Ҫ��ʾ��ͼƬ������
        //Ŀ�� ��pic�й� ��ͼƬ����й� �����Ǹ���
        var target = -pic * imgWidth;
        animate(ul, target);

        //��ťҲҪ������
        if (square > 0) {
            square--;//�����������Ҫ����İ�ť������
        } else {
            square = olLis.length - 1;
        }

        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���¶�Ӧ��
        olLis[square].className = "current";
    };

    //����Զ�����
    timer = setInterval(playNext, 3000);
    function playNext() {
        right.onclick();
    }

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 2000;
            step = leader < target ? step : -step;
            if (Math.abs(target - leader) >= Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 15);
    }
    var icon = document.getElementById("icon");
    var fdj = document.getElementById("fdj");
    var closepup = document.getElementById("closepup");
    var pupcon = document.getElementById("pupcon");
    icon.onclick = function () {
        pupcon.style.display = "block";
    }
    fdj.onclick = function () {
        pupcon.style.display = "block";
    }
    closepup.onclick = function () {
        pupcon.style.display = "none";
    }
}

function syc() {
    var navTitle = document.getElementById("navTitle");
    //var sss =document.getElementById("sss");
    var sss = $("sss");
    var kv1 = document.getElementById("kv1");
    var kv2 = document.getElementById("kv2");


    navTitle.onmouseover = function () {
        sss.style.display = "block"
        //console.log("222");
    }

    navTitle.onmouseout = function () {
        sss.style.display = "none"
    }
    $("#nav2_1").bind("click", function () {
        $(".navBox>ul")[1].style.display = "block";
        $("#carImg")[0].src = $(this).attr("src");
        $($($(".navBox>ul")[1]).children()[0]).addClass("on").siblings("li").removeClass("on");
        $(".navBox>ul")[2].style.display = "none";
        $(".navBox>ul")[3].style.display = "none";

    });
    $("#checkbox>li").click(function(){
        $("#carImg")[0].src ="images/s-images/car"+($(this).index()+20)+".png";
    });
    /*$($(".navBox>ul")[1]).find("li").click(function () {
     $(this).addClass("on").siblings("li").removeClass("on");
     $("#carImg")[0].src = "images/s-images/car" + ($(this).index() + 20) + ".png";
     });*/
    $("#nav2_2").bind("click", function () {
        $(".navBox>ul")[1].style.display = "none";
        $(".navBox>ul")[2].style.display = "block";
        $("#carImg")[0].src = $(this).attr("src");
        $($($(".navBox>ul")[2]).children()[0]).addClass("on").siblings("li").removeClass("on");
        $(".navBox>ul")[3].style.display = "none";
    });
    /*$($(".navBox>ul")[2]).find("li").click(function () {
     $(this).addClass("on").siblings("li").removeClass("on");
     $("#carImg")[0].src = "images/s-images/car" + ($(this).index() + 23) + ".png";
     });*/
    $("#nav2_3").bind("click", function () {
        $(".navBox>ul")[1].style.display = "none";
        $(".navBox>ul")[2].style.display = "none";
        $(".navBox>ul")[3].style.display = "block";
        $($($(".navBox>ul")[3]).children()[0]).addClass("on").siblings("li").removeClass("on");
        $("#carImg")[0].src = $(this).attr("src");
    });
    $(".navBox>ul").find("li").click(function () {
        $(this).addClass("on").siblings("li").removeClass("on");
        $("#carImg")[0].src = $(this).attr("src");
    });

}
addLoadEvent(syc);