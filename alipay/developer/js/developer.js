//匀速
function avr(obj,target) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var leader = obj.offsetLeft;
		var step = 10;
		step = leader < target? step:-step;
		if(Math.abs(target - leader) >= Math.abs(step)) {
			leader = leader + step;
			obj.style.left = leader + "px";
		} else {
			obj.style.left = target + "px";
			clearInterval(obj.timer);
		}
	},15)
}

//获取body的卷去部分的高度
function scroll() {
	return {
		top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
		left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
	};
}

//获取当前页面内元素计算后的所有样式属性值 是字符串形式
function getStyle(obj,attr) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(obj,null)[attr];
	} else {
		return obj.currentStyle[attr];
	}
}

//减速完整
function slow(obj,json,fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var k in json) {
			if(k ==="opacity") {
				var leader = getStyle(obj,k) * 100;
				var target = json[k] * 100;
				var step = (target - leader) / 80;								//变化
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
	},10)
}
