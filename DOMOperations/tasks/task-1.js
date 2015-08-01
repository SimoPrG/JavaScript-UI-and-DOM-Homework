/* globals $ */

/* 

 Create a function that takes an id or DOM element and an array of contents

 * if an id is provided, select the element
 * Add divs to the element
 * Each div's content must be one of the items from the contents array
 * The function must remove all previous content from the DOM element provided
 * Throws if:
 * The provided first parameter is neither string or existing DOM element
 * The provided id does not select anything (there is no element that has such an id)
 * Any of the function params is missing
 * Any of the function params is not as described
 * Any of the contents is neight `string` or `number`
 * In that case, the content of the element **must not be** changed
 */

module.exports = function () {
    var validator = {
        validateIfHTMLElement: function (element) {
            if (!(element instanceof HTMLElement)) {
                throw new TypeError('element must be an HTMLElement or existing HTMLElement id');
            }
        },

        validateIfArray: function (contents) {
            if (!(contents instanceof Array)) {
                throw new TypeError('contents must be an array');
            }
        },

        validateIfNumberOrString: function (content) {
            if (!((typeof content === 'number') || (typeof content === 'string'))) {
                throw new TypeError('all contents must be numbers or strings');
            }
        }
    };

    return function (element, contents) {
        var documentFragment,
            div,
            currentDiv,
            i,
            len;

        if (typeof element === 'string') {
            element = document.getElementById(element);
        }

        validator.validateIfHTMLElement(element);
        validator.validateIfArray(contents);
        contents.forEach(validator.validateIfNumberOrString);

        documentFragment = document.createDocumentFragment();
        div = document.createElement('div');
        for (i = 0, len = contents.length; i < len; i += 1) {
            currentDiv = div.cloneNode(true);
            currentDiv.innerHTML = contents[i];
            documentFragment.appendChild(currentDiv);
        }

        element.innerHTML = '';
        element.appendChild(documentFragment);
    }
};