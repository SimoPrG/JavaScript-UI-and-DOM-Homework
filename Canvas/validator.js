VALIDATOR = {
    validateIfNullOrUndefined: function (obj, objName) {
        objName = objName || 'Object';

        if (obj == null) {
            throw new Error(objName + ' cannot be null or undefined.');
        }
    },
    validateIfRealNumber: function (num, numName) {
        numName = numName || 'Number';

        this.validateIfNullOrUndefined(num, numName);

        if (isNaN(parseFloat(num)) || !isFinite(num)) {
            throw new Error(numName + ' must be a real number.');
        }
    },

    validateIfPositiveNumber: function (num, numName) {
        numName = numName || 'Number';

        this.validateIfRealNumber(num, numName);

        if (num <= 0) {
            throw new Error(numName + ' must be positive.');
        }
    }
};