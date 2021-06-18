"use strict";
var Advanced;
(function (Advanced) {
    class Bee extends Advanced.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        update() {
            if (this.posX > Advanced.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Advanced.crc2.canvas.height || this.posY < Advanced.crc2.canvas.height * 0.65) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
            this.draw();
        }
        draw() {
            Advanced.crc2.save();
            Advanced.crc2.translate(this.posX, this.posY);
            Advanced.crc2.scale(this.randomScaleX, this.randomScaleY);
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#fff200";
            Advanced.crc2.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.lineWidth = 8;
            Advanced.crc2.moveTo(0, -40);
            Advanced.crc2.lineTo(0, 40);
            Advanced.crc2.moveTo(20, -37);
            Advanced.crc2.lineTo(20, 37);
            Advanced.crc2.moveTo(40, -30);
            Advanced.crc2.lineTo(40, 30);
            Advanced.crc2.strokeStyle = "black";
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.lineWidth = 1;
            Advanced.crc2.fillStyle = "white";
            Advanced.crc2.ellipse(20, -60, 10, 30, Math.PI / 4, 0, 2 * Math.PI);
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "white";
            Advanced.crc2.ellipse(-10, -60, 10, 30, Math.PI / 1.2, 0, 2 * Math.PI);
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(-20, 0, 37, 40, Math.PI / 2, 0, Math.PI);
            Advanced.crc2.fillStyle = "black";
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(-40, -10, 10, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "white";
            Advanced.crc2.fill();
            Advanced.crc2.closePath();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(-42, -9, 8, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "black";
            Advanced.crc2.fill();
            Advanced.crc2.closePath();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(-39.5, -9, 2.5, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "white";
            Advanced.crc2.fill();
            Advanced.crc2.closePath();
            Advanced.crc2.restore();
        }
    }
    Advanced.Bee = Bee;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=bee.js.map