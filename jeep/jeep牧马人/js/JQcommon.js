/**
 * Created by rabbcat on 2016/12/10.
 */
$(document).ready(function () {
    open(".midBoxshow",".jkPup1");
    open(".midBoxshow1",".jkPup2");
    open(".wpower_btn1",".jkPup3");
    open(".wpower_btn2",".jkPup4");
    open(".wdesignlink",".jkPup5");
    open(".design_btn2",".jkPup6");
    open(".part1-link1",".jkPup8");
    open(".part1-link2",".jkPup8");
    open(".part1-link3",".jkPup7");
    open(".part1-link4",".jkPup7");
    open(".safe_btn1",".jkPup9");
    open(".safe_btn2",".jkPup10");
    open(".safe_btn3",".jkPup10");
    open(".safe_btn4",".jkPup11");
    open(".safe_btn5",".jkPup11");
    open(".safe_btn6",".jkPup11");
    open(".safe_btn7",".jkPup11");
    open(".safe_btn8",".jkPup11");
    open(".safe_btn9",".jkPup11");
    open(".safe_btn10",".jkPup11");
    close(".closepup1",".jkPup1");
    close(".closepup2",".jkPup2");
    close(".closepup3",".jkPup3");
    close(".closepup4",".jkPup4");
    close(".closepup5",".jkPup5");
    close(".closepup6",".jkPup6");
    close(".closepup7",".jkPup7");
    close(".closepup8",".jkPup8");
    close(".closepup9",".jkPup9");
    close(".closepup10",".jkPup10");
    close(".closepup11",".jkPup11");






    //$(".midBoxshow").click(function () {
    //    //console.log("1111");
    //    $(".jkPup").css("display","block");
    //});
    //$(".closepup").click(function () {
    //    $(".jkPup").css("display","none");
    //});
   function open(obj,target){
       $(obj).click(function () {
           $(target).css("display","block");
       });
   }
    function close(obj,target){
        $(obj).click(function () {
            $(target).css("display","none");
        });
    }
});
function addLoadEvent(fn) {
    var oldOnLoad = window.onload;
    if (typeof oldOnLoad === "function") {
        window.onload = function () {
            oldOnLoad();
            fn();
        };
    } else {
        window.onload = fn;
    }
}