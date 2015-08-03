//@formatter:off
/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, []
*/
//@formatter:on

function solve() {
    function validateIfString(string) {
        if (typeof string !== 'string') {
            throw new TypeError('selector must be a string');
        }
    }
    function validateIfPositiveInteger(number) {
        if (number != parseInt(number) || number < 1) {
            throw new Error('count must be a positive integer');
        }
    }

    return function (selector, count) {
        validateIfString(selector);
        validateIfPositiveInteger(count);
        var $element = $(selector),
            $ul,
            $li,
            i;

        if ($element.length === 0) {
            return;
        }

        $ul = $('<ul />').addClass('items-list');
        for (i = 0; i < count; i += 1) {
            $li = $('<li />').addClass('list-item').text('List item #' + i).appendTo($ul);
        }

        $element.append($ul);
    };
}

module.exports = solve;