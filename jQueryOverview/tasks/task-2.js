//@formatter:off
/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
//@formatter:on
function solve() {
    function validateIfString(string) {
        if (typeof string !== 'string') {
            throw new Error('selector must be a string');
        }
    }

    function validateIfSelected($element) {
        if ($element.length === 0) {
            throw new Error('nothing is selected');
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
        var $element,
            $button;

        validateIfString(selector);

        $element = $(selector);

        validateIfSelected($element);

        $button = $element.find('.button');
        $button.html('hide');

        $element.on('click', '.button', toggleContentDisplay);
    };
}

module.exports = solve;