BALL = (function () {
    var ball = Object.create({});

    Object.defineProperty(ball, 'init', {
        value: function (xCoOrd, yCoOrd, r, speed, collisionProfile) {
            this.x = xCoOrd;
            this.y = yCoOrd;
            this.r = r;
            this.speed = speed;
            this.collisionProfile = collisionProfile;

            return this;
        }
    });

    Object.defineProperty(ball, 'x', {
        get: function () {
            return this._x;
        },
        set: function (val) {
            VALIDATOR.validateIfRealNumber(val, 'x');
            this._x = val;
        }
    });

    Object.defineProperty(ball, 'y', {
        get: function () {
            return this._y;
        },
        set: function (val) {
            VALIDATOR.validateIfRealNumber(val, 'y');
            this._y = val;
        }
    });

    Object.defineProperty(ball, 'r', {
        get: function () {
            return this._r;
        },
        set: function (val) {
            VALIDATOR.validateIfPositiveNumber(val, 'r');
            this._r = val;
        }
    });

    Object.defineProperty(ball, 'speed', {
        get: function () {
            return this._speed;
        },
        set: function (val) {
            VALIDATOR.validateIfRealNumber(val.x, 'speed.x');
            VALIDATOR.validateIfRealNumber(val.y, 'speed.x');

            this._speed = val;
        }
    });

    Object.defineProperty(ball, 'collisionProfile', {
        get: function () {
            return this._collisionProfile;
        },
        set: function (val) {
            this._collisionProfile = val;
        }
    });

    Object.defineProperty(ball, 'move', {
        value: function () {
            this.x += this.speed.x;
            this.y += this.speed.y;
            this.collisionProfile.pos.x += this.speed.x;
            this.collisionProfile.pos.y += this.speed.y;
        }
    });

    Object.defineProperty(ball, 'changeSpeedX', {
        value: function () {
            this.speed.x *= -1;
        }
    });

    Object.defineProperty(ball, 'changeSpeedY', {
        value: function () {
            this.speed.y *= -1;
        }
    });

    return ball;
}());