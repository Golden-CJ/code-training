/**
 * Created by L$L on 2016/12/8.
 */

//    封装的动画
function animate(obj, json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for(var k in json){
            if(k === "opacity"){
                var leader = parseInt(getStyle(obj, k))*100;
                var target = json[k]*100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = (leader + step)/100;
                if(leader != target){
                    flag = false;
                };
            }else if(k === "zIndex"){
                obj.style.zIndex = json[k];
            }else{
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = leader + step + "px";
                if(leader != target){
                    flag = false;
                };
            };
        };
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    }, 15)
};

//获取任意属性
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

