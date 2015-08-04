function solve() {
    return function () {
        $.fn.listview = function (data) {
            var i,
                len,
                templateId = this.data('template'),
                templateText = $('#' + templateId).html(),
                template = handlebars.compile(templateText),
                templateResult = '';

            for (i = 0, len = data.length; i < len; i += 1) {
                templateResult += template(data[i]);
            }

            this.html(templateResult);

            return this;
        };
    };
}

module.exports = solve;