(function() {
    var inputColor = document.getElementById('input-color');
    inputColor.addEventListener('input', function () {
        console.log(inputColor);
        document.body.style.backgroundColor = inputColor.value;
    });
}());