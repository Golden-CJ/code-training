/**
 * Created by wcjdb_000 on 2017/1/21.
 */

//头部新闻栏
$(function () {
    $('.NewsBar > input').click(function () {
        $('.NewsBar').animate({height: 0}, 500);
    })
});


//banner部分
$lis = $('.op-nav > .container-fluid > .op-collapse > .op-menu > li');
$bder = $('.op-nav > .container-fluid > .op-collapse > .op-menu > li > i');
$lis.mouseenter(function () {
    $that = $lis.index(this);
    $bder.eq($that).animate({top: 0}, 200).css('visibility', 'visible');
});
$lis.mouseleave(function () {
    $that = $lis.index(this);
    $bder.eq($that).animate({top: 3}, 200).css('visibility', 'hidden');
});


$btn = $('.banner > .shot > .join');
$btnMask = $('.banner > .shot > .btnBg > .btnMask');
$btn.mouseenter(function () {
    $btnMask.animate({'margin-left': -40}, 500);
});
$btn.mouseleave(function () {
    $btnMask.animate({'margin-left': -120}, 500);
});


window.onload = function () {
    var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    var img = document.querySelector('.banner > .shot > img');
    if (clientWidth > 640) {
        img.src = 'images/0207shot-large.jpg';
    } else {
        img.src = 'images/0207shot-small.jpg';
    }
}
window.onresize = function () {
    var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    var img = document.querySelector('.banner > .shot > img');
    if (clientWidth > 640) {
        img.src = 'images/0207shot-large.jpg';
    } else {
        img.src = 'images/0207shot-small.jpg';
    }
}


//客服部分
$dl = $('.clientserver > .info > dl');
$dd = $('.clientserver > .info > dl > div');
$dl.click(function(){
    $that = $dl.index(this);
    $dd.eq($that).toggle(500);
})