
(function () {
    var SAT = require('sat');
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        C = SAT.Circle,
        V = SAT.Vector,
        ball1 = Object.create(BALL).init(200, 200, 10, {x: -5, y: 7}, new C(new V(200, 200), 10)),
        ball2 = Object.create(BALL).init(100, 200, 15, {x: 5, y: 3}, new C(new V(100, 200), 15)),
        ball3 = Object.create(BALL).init(200, 100, 5, {x: 5, y: 10}, new C(new V(200, 100), 5)),
        balls = [ball1, ball2, ball3];

    function degreesToRadians(degrees) {
        var radians = degrees * Math.PI / 180;
        return radians;
    }

    function drawCircle(ctx, x, y, r, fillStyle, strokeStyle) {
        fillStyle = fillStyle || ctx.fillStyle;
        strokeStyle = strokeStyle || ctx.strokeStyle;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = fillStyle;
        ctx.fill();
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    }

    (function animate() {
        if (!SAT.testCircleCircle(ball1.collisionProfile, ball2.collisionProfile)) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            balls.forEach(function (ball) {
                if (ball.x - ball.r <= 0 || canvas.width <= ball.x + ball.r) {
                    ball.changeSpeedX();
                }

                if (ball.y - ball.r <= 0 || canvas.height <= ball.y + ball.r) {
                    ball.changeSpeedY();
                }

                ball.move();

                drawCircle(ctx, ball.x, ball.y, ball.r);
            });

            requestAnimationFrame(animate);
        } else {
            //stop
        }
    }());
}());