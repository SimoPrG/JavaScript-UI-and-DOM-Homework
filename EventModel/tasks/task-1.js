/* globals $ */

/* 

 Create a function that takes an id or DOM element and:


 */

function solve() {
    function validateIfHtmlElement(element) {
        if (!(element instanceof HTMLElement)) {
            throw new TypeError('element must be an HTMLElement or existing HTMLElement id');
        }
    }

    function changeInnerHtmlOfChildrenWithClass(element, childrenClass, childrenInnerHtml) {
        var i,
            len,
            childrenWithClass = element.getElementsByClassName(childrenClass);

        for (i = 0, len = childrenWithClass.length; i < len; i += 1) {
            childrenWithClass[i].innerHTML = childrenInnerHtml;
        }
    }

    function toggleContentDisplay(ev) {
        var button = ev.target,
            content;

        if (button.className !== 'button') {
            return;
        }

        content= button.nextElementSibling;

        while (content) {
            if (content.className === 'content') {
                break;
            }

            if (content.className === 'button') {
                return;
            }

            content = content.nextElementSibling;
        }

        if (!content) {
            return;
        }

        if (content.style.display === '') {
            content.style.display = 'none';
            button.innerHTML = 'show';
        } else if (content.style.display === 'none') {
            content.style.display = '';
            button.innerHTML = 'hide';
        }
    }

    return function (selector) {
        var element;

        if (typeof selector === 'string') {
            element = document.getElementById(selector);
        } else {
            element = selector;
        }

        validateIfHtmlElement(element);

        changeInnerHtmlOfChildrenWithClass(element, 'button', 'hide');

        element.addEventListener('click', toggleContentDisplay, false);
    };
}

module.exports = solve;