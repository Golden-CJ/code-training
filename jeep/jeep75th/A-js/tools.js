/**
 * 书写了一些自己所学的东西的工具包
 * Created by Administrator on 2016/12/5.
 */
/**
 * 获取标签内容的兼容性写法
 * @param element
 * @returns {string}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 设置标签内容的兼容性写法
 * @param element
 * @param content
 * @returns {*}
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        return element.innerText = content;
    } else {
        return element.textContent = content;
    }
}
/**
 * 获得下一个兄弟元素
 * @param element
 * @returns {*}
 */
function getNextSiblingElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        if (next && 1 != next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获得上一个兄弟元素的兼容性写法
 * @param element
 * @returns {*}
 */
function getPreviousSiblingElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var previou = element.previousSibling;
        if (previou && 1 != previou.nodeType) {
            previou = previou.previousSibling;
        }
        return previou;
    }
}
/**
 * 获取第一个子元素的兼容性方法
 * @param element
 * @returns {*}
 */
function getFirstChildElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var first = element.firstChild;
        if (first && 1 != first.nodeType) {
            first = first.nextSibling;
        }
        return first;
    }
}
/**
 * 给元素的指定类名进行替换
 * @param element
 * @param oldStrring
 * @param newString
 */
function replaceClassName(element, oldStrring, newString) {
    var arr = element.className.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldStrring) {
            arr[i] = newString;
        }
    }
    element.className = arr.join(" ");
}
/**
 * 获取最后一个子元素的兼容性方法
 * @param element
 * @returns {*}
 */
function getLastChildElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var last = element.lastChild;
        if (last && 1 != last.nodeType) {
            last = last.previousSibling;
        }
        return last;
    }
}
/**
 * 获取类名为className的元素存入数组中 并将数组返回
 * @param element
 * @param className
 * @returns {*}
 */
function getElementsByClass(element, className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    } else {
        var elements = element.getElementsByTagName("*");
        var filterArr = [];
        for (var i = 0; i < elements.length; i++) {
            var arrClass = elements[i].className.split(" ");
            for (var j = 0; j < arrClass.length; j++) {
                if (arrClass[j] === className) {
                    filterArr.push = elements[i];
                    break;
                }
            }
        }
        return filterArr;
    }
}
/**
 * 获取页面的滚动坐标（页面被卷去的top与left值）
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}
/**
 * 获取页面可视化窗口的大小
 * @returns {{height: (Number|number), width: (Number|number)}}
 */
function client() {
    return {
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0
    }
}
/**
 * 获取元素的任意属性的属性值
 * @param element
 * @param attribute
 * @returns {*}
 */
function getStyle(element, attribute) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attribute];
    } else {
        return element.currentStyle[attribute];
    }
}
/**
 * 匀速动画（只能设置带有px单位的值）
 * @param element
 * @param json
 */
function speedAnimate(element, json, fn) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            var leader = parseInt(getStyle(element, k)) || 0;
            var step = 10;
            step = leader > json[k] ? -step : step;
            if (Math.abs((leader - json[k])) > Math.abs(step)) {
                leader = leader + step;
                element.style[k] = leader + "px";
            } else {
                element.style[k] = json[k] + "px";
            }
            if (leader != json[k]) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            if (typeof fn === "function") {
                fn();
            }
        }
    }, 15);
}
/**
 * 缓动动画
 * @param element
 * @param json
 * @param fn
 */
function animate(element, json, fn) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(element, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 15;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                element.style[k] = leader / 100;

            } else if (getStyle(element, k).indexOf("px") === -1) {

                target = leader = json[k];
                element.style[k] = target;
            } else {
                var leader = parseInt(getStyle(element, k)) || 0;
                target = json[k];
                var step = (target - leader) / 15;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                element.style[k] = leader + "px";

            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            if (typeof fn === "function") {
                fn();
            }
        }

    }, 15)
}