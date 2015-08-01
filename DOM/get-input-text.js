(function () {
    var button = document.getElementById('problem2-button'),
        inputText = document.getElementById('problem2-input-text');

    button.addEventListener('click', function () {
        console.log(inputText.value);
    });
}());