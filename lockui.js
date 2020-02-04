(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.UI = factory());
}(this, (function () {

    var lockHtmlParent = document.createElement('div');
    lockHtmlParent.classList.add('lockui-parent');
    var lockHtml = document.createElement('div');
    lockHtml.classList.add('lockui');
    var lockHtmlContainer = document.createElement('div');
    lockHtmlContainer.classList.add('lockui-container');
    lockHtmlContainer.onselectstart = new Function('return false');
    var lockStyle = document.createElement('style');
    lockStyle.type = 'text/css';
    lockStyle.innerHTML = '.lockui-parent.is-unlocking>div{opacity:0;}.lockui{background-color:black;z-index: 50000;padding: 0px;border: none;height: 100%;opacity: 0.6;margin: 0px;width: 100%;left: 0px;top: 0px;cursor: wait;position: absolute;-webkit-transition: opacity .25s;-moz-transition: opacity .25s;-ms-transition: opacity .25s;-o-transition: opacity .25s;transition: opacity .25s;}.lockui-container{position: absolute;z-index: 50011;padding: 15px;margin: 0px;width: 30%;top: 40%;left: 35%;border: none;cursor: wait;color: white;font-size: 11px;text-align: center;background-color: rgba(0,0,0,.5);text-transform: uppercase;-webkit-border-radius: 10px;-moz-border-radius: 10px; border-radius: 10px;-webkit-transition: opacity .25s;-moz-transition: opacity .25s;-ms-transition: opacity .25s;-o-transition: opacity .25s;transition: opacity .25s;}';
    lockHtmlParent.appendChild(lockStyle);
    lockHtmlParent.appendChild(lockHtml);
    lockHtmlParent.appendChild(lockHtmlContainer);

    var lock = function (options) {
        options = options || {};
        var parent = document.querySelector(options.selector) || document.body;
        if (parent === document.body) {
            lockHtml.style.position = 'fixed';
            lockHtmlContainer.style.position = 'fixed';
        }
        lockHtmlContainer.innerHTML = options.text || 'Procesando...';
        if (document.querySelector(options.selector)) {
            lockHtmlParent.style.position = 'relative';
            lockHtmlParent.style.width = '100%';
            lockHtmlParent.style.height = '100%';
        }
        parent.appendChild(lockHtmlParent);
    };

    var unlock = function () {
        var element = lockHtmlParent;
        if (element) {
            element.classList.add('is-unlocking');
            setTimeout(() => {
                if (element) {
                    element.classList.remove('is-unlocking');
                    element.parentElement.removeChild(element);
                }
            }, 250);
        }
    };

    return {
        lock: lock,
        unlock: unlock
    }

})))