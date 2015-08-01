(function () {
    var divs = document.getElementsByTagName('div'),
        divsArray = Array.prototype.slice.call(divs),
        innerDivs = divsArray.filter(function (div) {
            return div.parentElement instanceof HTMLDivElement;
        }),
        result = document.getElementById('task2-getElementsByTagName-result');

    for (var i = 0, len = innerDivs.length; i < len; i += 1) {
        result.innerText += innerDivs[i].outerHTML;
    }
}());