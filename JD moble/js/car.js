/**
 * Created by L$L on 2016/12/30.
 */
    var del = document.querySelectorAll(".delBox")
    var delBox = null;
    var mask = document.querySelector(".mask")
    for(var i = 0;i<del.length;i++){
        del[i].onclick = function(){
            delBox = this;
            var delTop = delBox.querySelector('span:first-child');
            console.log(delTop);
            delTop.style.webkitTransition = "all .5s";
            delTop.style.transition = "all .5s";
            delTop.style.webkitTransform = "rotate(-30deg)";
            delTop.style.transform = "rotate(-30deg)";
            delTop.style.webkitTransformOrigin = "0 15px";
            delTop.style.transformOrigin = "0 15px";
            mask.style.display = "block"
        }
    }
    var cancel = document.querySelector(".no")
    cancel.onclick = function(){
        mask.style.display = "none"
        var delTop = delBox.querySelector('span:first-child');
        delTop.style.webkitTransition = "none";
        delTop.style.transition = "none";
        delTop.style.webkitTransform = "none";
        delTop.style.transform = "none";
        delTop.style.webkitTransformOrigin = "none";
        delTop.style.transformOrigin = "none";
    }
