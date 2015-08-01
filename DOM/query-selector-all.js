(function () {
    var innerDivs = document.querySelectorAll('div>div'),
        result = document.getElementById('task1-querySelectorAll-result');

    for (var i = 0, len = innerDivs.length; i < len; i += 1) {
        result.innerText += innerDivs[i].outerHTML;
    }
}());