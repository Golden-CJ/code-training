var gdAcc, quan2Acc;
var kvNow= 0;

var myDivTop=[];
var myTxt=[];
var mydpan;
var tipName;
var kvLis, indexKvInterval;

var isHao2Open= false;

var pz='sa',cor='c5',din='yd';

$(function(){

	kvLis= $id('kv').getElementsByTagName('li');
	setDom();
	addEvt();

	function setDom() {
		gdAcc= new Accordion({
			target:$('#gdAcc ul'),
			border:1,
			mixWidth:90,
			onStart:gdAccStart,
			now:0
		});
		gdAcc.init();
	}
	function gdAccStart(_out,_in){	
		$('.design3 .black').css('display','none');
		$('.design3 .black').eq(_in).css('display','block');
	}

	function addEvt() {
		clearInterval(indexKvInterval);
		indexKvInterval= setInterval(indexKvLoop, 8000);
	}

	function indexKvLoop() 
	{
		var _new= (kvNow< $('#dotbox li').length- 1)? kvNow+ 1:0;
		changeKv(kvNow, _new);
		kvNow= _new;
	}
	
	function changeKv(_out, _in) 
	{
		TweenLite.set(kvLis[_out], { zIndex:1});
		TweenLite.set(kvLis[_in], { zIndex:2, opacity:0, display:'block' });
		TweenLite.to(kvLis[_in], 0.4, { opacity:1, ease:Linear.easeNone, onComplete:function() {
			TweenLite.set(kvLis[_out], { opacity:0, display:'none' });
		} });
		// if(_browserNew.ie<10){

		// }
		$('#dotbox li').eq(_out).removeClass('on');
		$('#dotbox li').eq(_in).addClass('on');
	}

	//dot
	$('.dotbox li').click(function(){
		var index =$(this).index();
		if(kvNow!= index){
			changeKv(kvNow, index);
			kvNow= index;
			clearInterval(indexKvInterval);
			indexKvInterval= setInterval(indexKvLoop, 4000);
		}
	})
	//skin
	
	$('.jkskin .nav1 li').click(function(){
		var index=$(this).index();
		$('.jkskin .nav1 li').removeClass('on');
		$(this).addClass('on');
		$('.navBox .navCar').hide();
		$('.navBox .navCar').eq(index).show();
		$('.navBox .navCar').find('li').removeClass('on');
		$('.navBox .navCar').eq(index).find('li').eq(0).addClass('on');
		$('.txtLine .txtl').hide();
		$('.txtLine .txtl ul').hide();
		$('.txtLine .txtl').eq(index).find('ul').eq(0).show();
		$('.txtLine .txtl').eq(index).show();
		if(index==1 || index==0){
			turnColor();
			pz='sa';
			showCarPic(pz,cor,din);
		} else if(index==2){
			turnColor();
			pz='ru2';
			showCarPic(pz,cor,din);
		}
		
	})
	$('.navCar2n li').click(function(){
		var index= $(this).index();
		$('.navCar li').removeClass('on');
		$(this).addClass('on');
		if(index==1){
			$('.txtLine ul').hide();
			$('.txtLine ul').eq(2).show();
			$('#colorBox').hide();
			$('#colorBox75').show();
			$('#carbox').hide();
			$('#carbox75').show();
			$('.dinBox').hide();
		} else{
			turnColor();
			$('.txtLine ul').hide();
			$('.txtLine ul').eq(1).show();
			pz='sa';
			showCarPic(pz,cor,din);
		}
		
	})
	$('.navCar2 li').click(function(){
		var index= $(this).index();
		$('.navCar li').removeClass('on');
		$(this).addClass('on');
		if(index==1){
			turnColor();
			$('.txtLine ul').hide();
			$('.txtLine ul').eq(4).show();
			pz='ru1';
			showCarPic(pz,cor,din);
		} else{
			turnColor();
			$('.txtLine ul').hide();
			$('.txtLine ul').eq(3).show();
			pz='ru2';
			showCarPic(pz,cor,din);
		}
		
	})
	$('#colorBox75 li').click(function(){
		var index=$(this).index();
		$('#colorBox75 li').find('.bg').attr('src','images/index/co21.png');
		$('#colorBox75 li').find('p').hide();
		$(this).find('.bg').attr('src','images/index/co20.png');
		$(this).find('p').show();
		$('#carbox75 .carImg img').attr('src','images/index/car75_'+(index+1)+'.png')
	})
	$('#colorBox li').click(function(){
		var index=$(this).index();
		$('#colorBox li').find('.bg').attr('src','images/index/co21.png');
		$('#colorBox li').find('p').hide();
		$(this).find('.bg').attr('src','images/index/co20.png');
		$(this).find('p').show();
		cor='c'+(index+1);
		showCarPic(pz,cor,din);
	})
	$('.dinBox li').click(function(){
		var index=$(this).index();
		$('.dinBox li').find('.bg').attr('src','images/index/co15.png');
		$('.dinBox li').find('p').hide();
		$(this).find('.bg').attr('src','images/index/co14.png');
		$(this).find('p').show();
		if(index==0){
			din='yd';
		} else if(index==1){
			din='rd';
		} else{
			din='cp';
		}
		showCarPic(pz,cor,din);
	})
	//pup
	$('.closepup, .black').click(function(){
		$('.jkPup').hide();
	})

	//scroll
	$(window).scroll(function(){
		var myscrolltop = $(window).scrollTop();
		if(myscrolltop>0){
			for(var j=1;j<myDivTop.length; j++){
				if ($(window).scrollTop() >= myDivTop[j] && $(window).scrollTop() <= myDivTop[j + 1]) {
					$('#indexp').html(myTxt[j]);
	                tipName=myTxt[j];
	            } else if(myscrolltop>myDivTop[myDivTop.length-1]){
					$('#indexp').html(myTxt[myDivTop.length-1]);
					tipName=myTxt[j];
				}
			}
		} else{
			$('#indexp').html('进口牧马人');
		}
	})
	setMyDivTop();
	setMyTxt();


	
})
function turnColor() {
	$('#colorBox').show();
	$('#colorBox75').hide();
	$('#carbox').show();
	$('#carbox75').hide();
	$('.dinBox').show();
}
function showCarPic(_pz,_cor,_din) {
	if(_pz=='sa'){
		$('#carbox .carImg .ruan').attr('src','images/index/car_ruan.png');
	} else if(_pz=='ru1'){
		$('#carbox .carImg .ruan').attr('src','images/index/car_ruan2.png');
	} else{
		$('#carbox .carImg .ruan').attr('src','images/index/car_ruan3.png');
	}

	if(_din!='rd'){
		$('#carbox .carImg .ruan').css('visibility','hidden');
		$('#carbox .carImg .yin').attr('src','images/index/car_'+_pz+'_'+_cor+'_'+_din+'.png');
	} else{
		$('#carbox .carImg .yin').attr('src','images/index/car_'+_pz+'_'+_cor+'_yd.png');
		$('#carbox .carImg .ruan').css('visibility','visible');
	}
}
function hao2Close() {
	$('.hao2 .anmbox').css('visibility','hidden');
}
function setMyDivTop() {
	var $myDivTop =$('.author');
	for(var i = 0; i < $myDivTop.length; i++){
		myDivTop[i]= $($myDivTop[i]).offset().top;
	}
	// console.log(myDivTop);
}
function setMyTxt() {
	var $myTxt =$('.subNav .miaobox a');
	for(var i = 0; i < $myTxt.length; i++){
		myTxt[i]= $($myTxt[i]).html();
	}
	// console.log(myTxt);
}
function showPup(e) {
	$('.pupcon .midbox').hide();
	$('.pupcon .midbox').eq(e-1).show();
	$('.jkPup').show();
}
















