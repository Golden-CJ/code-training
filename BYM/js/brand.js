$(function () {
     var i, p,brandtitleid,brandTitle;
    brandtitleid = GetRequest().brandTitleId;
    brandTitle = GetRequest().brandTitle.substr(0,4);
    /*==========方法的调用==========*/
    init();
    /*==========方法的定义==========*/
    function init() {
        getBrand();
        getBrandProductList();
        closFix();
    }
   
   
    // 获取数据
    function getBrand() {
        $.get("http://139.199.157.195:9090/api/getbrand?brandtitleid="+brandtitleid, function (info) {
            var html = template("tpl1", info);
            $('#list').append(html);
             $("#title").html(brandTitle + "哪个牌子好");
             
              $(".box > #list > .model:nth-child(2) > h3").html(brandTitle + "哪个牌子好");
        });
    }

    function getBrandProductList() {

        $.get("http://139.199.157.195:9090/api/getbrandproductlist?brandtitleid="+brandtitleid+"&pagesize=4", function (info) {
            var html = template('tpl2', info);
            $('#list').append(html);
            i = info.result[0].productImg;
            p = info.result[0].productName;
            getProductCom();
            
             $(".box > #list > .model:nth-child(3) > h3").html(brandTitle+"产品销量排行");
        });

    }

    function getProductCom() {
        $.get("http://139.199.157.195:9090/api/getproductcom?productid="+brandtitleid, function (info) {
            var html = template('tpl3', info);
            $('#list').append(html);
            //第二个数据请求获得的productImg
            var html1 = template("",i);
            $('.pic').append(html1);
            //第二个数据请求获得的productName
            var html2 = template("", p)
            $('.tit').append(html2);
            $(".box > #list > .model:nth-child(4) > .hd > h3 > a ").html(brandTitle+"最新评论")
        });
    }

    // 关闭fix
    function closFix() {
        $('#closFix').on('mousedown', function () {
            $('.fix').fadeOut('slow');
            $('#footer').animate({paddingBottom: 0}, 400);
        })
    }
})