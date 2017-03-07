window.onload = function () {
    var aHeader = document.getElementById("aHeader");
    //动态创建车型下拉菜单的结构样式
    var carTypeText = [
        {"title": "全新自由侠", "content": "13-15万专业级超驾趣SUV", "price": "￥13.48万起"},
        {"title": "全新指南者", "content": "专业级中产家庭SUV", "price": "&nbsp;"},
        {"title": "全新自由光", "content": "20-30万专业级高端城市SUV", "price": "￥20.98万起"},
        {"title": "进口牧马人", "content": "专业级四驱利器", "price": "￥42.95万起"},
        {"title": "进口全新大切诺基", "content": "专业级豪华SUV", "price": "￥57.99万起"},
        {"title": "75周年致敬版", "content": "四款独一无二的jeep", "price": "&nbsp;"}
    ];//模拟从后台传来的数据
    var aHeaderRight = document.getElementById("a_h_right");
    var lis = aHeaderRight.children;
    var typeCar = lis[0];
    var ul = document.createElement("ul");
    ul.className = "showcar clearfix";
    typeCar.appendChild(ul);
    var arr = [];
    var timer = null;//记录定时器的id
    var square = 0;//记录与图片绑定的小方块

    var aBanner = document.getElementById("aBanner")//banner图的大盒子
    var aArr = document.getElementById("aArr");//装两个箭头的盒子
    var aArrLeft = document.getElementById("aArrLeft");//左箭头
    var aArrRight = document.getElementById("aArrRight");//右箭头
    var aBannerUl = aBanner.children[0];//装图片的盒子
    var aBannerOl = aBanner.children[1];//装小方快的盒子


    document.onscroll = function () {//滚轮滚动事件
        //console.log(scroll().top);
        //console.log(aHeader.offsetHeight);
        if (scroll().top > aHeader.offsetHeight) {
            aHeader.style.position = "fixed";
            aHeader.style.top = 0;
            aHeader.style.zIndex = 1;
            ul.style.zIndex = -10;
            aHeader.style.paddingBottom = " aHeader.offsetHeight";
            //alert("haha")
        }
    };
    //创建li标签及内容
    for (var i = 0; i < 6; i++) {
        var str = '<li>' +
            '<a href="#">' +
            '<img src="A-images/nav_n' + (i + 1) + '.jpg" alt=""/>' +
            '<p class="a-s-title">' + carTypeText[i].title + '</p>' +
            '<p>' + carTypeText[i].content + '</p>' +
            '<p>' + carTypeText[i].price + '</p>' +
            '</a>' +
            '<button class="border gray' + (i % 3 % 2) + '"><i></i>预约试驾</button>' +
            '<button class="gray' + (i % 3 % 2) + '"><s></s>了解详情<em></em></button>' +
            '</li>';
        arr.push(str);
    }

    ul.innerHTML = arr.join("");
    var aHeaderLi = ul.children;
    typeCar.onmouseout = function () {//鼠标移出车型的盒子
        animate(ul, {"height": 0, }, function () {
            ul.style.display = "none";
        });
    };
    typeCar.onmouseover = function () {//鼠标移入车型的盒子
        //ul.style.display = "block";
        animate(ul, {"height": 520, "display": "block"});
    };
    //鼠标移入盒子 箭头显示 自动轮播暂停
    aBanner.onmouseover = function () {
        aArr.style.display = "block";
        clearInterval(timer)
    }
    //鼠标移出盒子 箭头隐藏 并且自动轮播开始
    aBanner.onmouseout = function () {
        aArr.style.display = "none";
        timer = setInterval(aArrRight.onclick, 2000);

    }
    //动态生成对应的盒子 ol中的li
    for (var i = 0; i < aBanner.children.length - 1; i++) {
        var li = document.createElement("li");
        aBannerOl.appendChild(li);
    }
    var bannerOlLis = aBannerOl.children;
    bannerOlLis[0].className = "current";//刚加载默认选择第一个
    for (var i = 0; i < bannerOlLis.length; i++) {
        bannerOlLis[i].index = i;//自定义属性记录下标
        bannerOlLis[i].onmouseover = function () {
            //干掉所有人
            for (var i = 0; i < bannerOlLis.length; i++) {
                bannerOlLis[i].className = "";
            }
            // 留下我自己
            this.className = "current";
            //aBannerUl.style.left = -(this.index * bannerLis[0].offsetWidth) + "px";
            animate(aBannerUl, {"left": -(this.index * bannerLis[0].offsetWidth), "opacity": 1});
            animate(aBannerUl, {"left": -(this.index * bannerLis[0].offsetWidth), "opacity": 1});
            pic = this.index;
        };
    }
    //动态追加最后一张图片 假的第一张
    var cloneBannerLi = aBannerUl.children[0].cloneNode(true);
    aBannerUl.appendChild(cloneBannerLi);
    var bannerLis = aBannerUl.children;
    //鼠标移动到对应的小盒子了切换到相应的图片

    //点击右箭头 图片向右滑动
    var pic = 0;
    aArrRight.onclick = function () {
        if (pic >= bannerLis.length - 1) {//判断是不是最后一张 假的第一张
            aBannerUl.style.left = 0;//瞬间跳到第一张
            pic = 0;//将计数的变量清零
        }
        pic++;//让计数的值递增
        animate(aBannerUl, {"left": -bannerLis[0].offsetWidth * pic});
        //将点击的事件与小方快进行连接
        if (square < bannerOlLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < bannerOlLis.length; i++) {
            bannerOlLis[i].className = "";
        }
        bannerOlLis[square].className = "current";
    }
    //点击左箭头 图片向左滑动
    aArrLeft.onclick = function () {
        if (pic <= 0) {
            console.log(-bannerLis.length - 1 * bannerLis[0].offsetWidth);
            aBannerUl.style.left = -(bannerLis.length - 1) * bannerLis[0].offsetWidth + "px";
            //瞬间跳到最后一张
            pic = bannerLis.length - 1;
            //给计数的值赋值为最后一个图片的下标
        }
        pic--;
        animate(aBannerUl, {"left": -bannerLis[0].offsetWidth * pic});
        //将点击事件与小方块
        if (square > 0) {
            square--;
        } else {
            square = bannerOlLis.length - 1;
        }
        for (var i = 0; i < bannerOlLis.length; i++) {
            bannerOlLis[i].className = "";
        }
        bannerOlLis[square].className = "current";
    };
    //图片自动轮播 实际上就是隔两秒调用 一次点击右箭头
    clearInterval(timer);
    timer = setInterval(function () {
        aArrRight.onclick();
    }, 2000);
    //鼠标移动到遮罩的的盒子 切换图片 从而做到当前车子高亮
    var aHistory = document.getElementById("aHistory");
    var maskBox = aHistory.children[4];
    var bigImages = aHistory.children[3];
    var aHistoryButtonn = aHistory.children[2];
    var maskLis = maskBox.children;
    for (var i = 0; i < maskLis.length; i++) {
        maskLis[i].index = i + 2;
        maskLis[i].onmouseover = function () {
            //移动到某个车子
            bigImages.src = "A-images/w" + this.index + ".png";//切换图片做到当前车子高亮
            animate(this.children[0], {"opacity": 1,});//让介绍的盒子显示
        };
        maskLis[i].onmouseout = function () {//鼠标移出当前图片
            bigImages.src = "A-images/w1.png";//图片改为默认图片
            animate(this.children[0], {"opacity": 0});
        };
    }
    aHistoryButtonn.onmouseover = function () {//鼠标移动到按钮
        animate(this, {"padding": 1});//按钮改变
    };
    aHistoryButtonn.onmouseout = function () {//鼠标移出盒子
        animate(this, {"padding": 0});//按钮恢复
    };
    var carIntroduce = document.getElementById("carIntroduce");
    for (var i = 0; i < 9; i++) {//根据图片的个数动态生成结构
        var carIntroduceLi = document.createElement("li");//生成li标签
        carIntroduceLi.className = "fl";//设置浮动
        carIntroduce.appendChild(carIntroduceLi);//将生成的li标签追加到ul的后面
        var carIntroduceLiImg = document.createElement("img");//动态生成车子的图片
        carIntroduceLiImg.src = "A-images/hs" + (i + 1) + ".jpg";
        carIntroduceLi.appendChild(carIntroduceLiImg);
        var carIntroduceLiBox = document.createElement("div");//动态生成遮罩的盒子
        carIntroduceLi.appendChild(carIntroduceLiBox);
        var carIntroduceLiBoxImg = document.createElement("img");//动态生成遮罩的图片
        carIntroduceLiBoxImg.src = "A-images/hs" + (i + 1) + "_on.png";
        carIntroduceLiBox.appendChild(carIntroduceLiBoxImg);
        //鼠标移动到盒子 介绍的遮罩显示
        carIntroduceLi.onmouseover = function () {
            console.log(this);
            animate(this.children[1], {
                "width": this.offsetWidth,
                "height": this.offsetHeight,
                "left": 0,
            });
        };
        //鼠标移出盒子 介绍的遮罩消失
        carIntroduceLi.onmouseout = function () {
            animate(this.children[1], {
                "width": 0,
                "height": 0,
                "left": this.offsetWidth,
            });
        };
    }
    //动态生成四种主流车型的li
    var fourMainCar = document.getElementById("fourMainCar");
    for (var i = 0; i < 4; i++) {
        var fourMainCarLi = document.createElement("li");
        fourMainCar.appendChild(fourMainCarLi);
        var fourMainCarLiImg = document.createElement("img");
        fourMainCarLiImg.src = "A-images/car_bg.jpg";
        fourMainCarLi.appendChild(fourMainCarLiImg);
        var fourMainCarLiImg1 = document.createElement("div");
        fourMainCarLiImg1.style.background = "url(A-images/car" + (i + 1) + ".png)";
        fourMainCarLi.appendChild(fourMainCarLiImg1);
    }

}

