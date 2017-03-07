/**
 * Created by Administrator on 2016/11/21 0021.
 */
/**
 *      传入一个元素，把他的类名中的一项换成另一项,最后重新赋给这个类名
 * @param element
 * @param oldS
 * @param newS
 * @returns {string}
 */
function replaceClassName(element, oldS, newS) {
    element.className = element.className.replace(oldS, newS);
}
/**
 *  获取内部文本的兼容方法
 * @param element
 * @param text
 */
function getInnerText(element) {
    if (typeof element.innerText === 'string') {
        return element.innerText;
    }
    else {
        return element.textContent;
    }
}
/**
 *  设置内部文本的兼容方法
 * @param element
 * @param text
 */
function setInnerText(element, text) {
    if (typeof element.innerText === 'string') {
        element.innerText = text;
    }
    else {
        element.textContent = text;
    }
}
/**
 * 获取下一个兄弟元素的兼容写法
 * @param element
 * @returns {*}
 */
function getNextElementSibling(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && 1 !== next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获取上一个兄弟元素的兼容写法
 * @param element
 * @returns {*}
 */
function getPreviousElementSibling(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;
        while (prev && 1 !== prev.nodeType) {
            prev = prev.previousSibling;
        }
        return prev;
    }
}
/**
 * 封装 获取当前元素的第一个子元素
 * @param element
 * @returns {*}
 */
function getFirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var el = element.firstChild;//第一个子节点
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;//往后找
        }
        return el;
    }
    //return element.children[0];
}
/**
 * 封装 获取当前元素的最后一个子元素
 * @param element
 * @returns {*}
 */
function getLastElementChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var el = element.lastChild;
        while (el && 1 !== el.nodeType) {
            el = el.previousSibling;//上一个兄弟节点
        }
        return el;
    }
    //return element.children[element.children.length-1];
}
//封装 通过类名获取元素对象的兼容方法
function getElementsByClassName(element, className) {
    //原来就有
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    } else {
        //首先找到element里面所有的标签 然后判断 有没有我们要的类名
        //如果有就把当前标签 放到一个集合中 最后全都找完了 把集合返回
        var filterArr = [];//这个数组用来放匹配的元素
        var elements = element.getElementsByTagName("*");//通配符 表示所有标签
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].className.indexOf(className) !== -1) {
                //包含了我们要的类名 这个元素是我们要的
                filterArr.push(elements[i]);
            }
        }
        return filterArr;
    }
}
//获取计算后样式
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
//添加window.onload事件
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
//缓动动画
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k));
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (typeof fn === "function") {
                fn();
            }
        }
    }, 15);
}
//快速的缓动动画
function animate2(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            var leader = parseInt(getStyle(obj, k));
            var target = json[k];
            var step = (target - leader) / 2;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (typeof fn === "function") {
                fn();
            }
        }
    }, 15);
}
//匀速动画
function animateys(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            var leader = parseInt(getStyle(obj, k));
            var target = json[k];
            var step = 10;
            step = leader > target ? -step : step;
            if (Math.abs(target - leader) > Math.abs(step)) {
                leader = leader + step;
                obj.style[k] = leader + "px";
            } else {
                obj.style[k] = target + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (typeof fn === "function") {
                fn();
            }
        }
    }, 15);
}