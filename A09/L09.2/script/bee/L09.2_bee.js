"use strict";
var BeesMeadow;
(function (BeesMeadow) {
    class Bee {
        constructor(_position, _velocity, _randomScale) {
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.posX = _position.x;
            this.posY = _position.y;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            BeesMeadow.crc2.save();
            BeesMeadow.crc2.translate(this.posX, this.posY);
            BeesMeadow.crc2.scale(this.randomScaleX, this.randomScaleY);
            BeesMeadow.crc2.beginPath();
            BeesMeadow.crc2.fillStyle = "#fff200";
            BeesMeadow.crc2.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
            BeesMeadow.crc2.fill();
            BeesMeadow.crc2.stroke();
            BeesMeadow.crc2.beginPath();
            BeesMeadow.crc2.lineWidth = 8;
            BeesMeadow.crc2.moveTo(0, -40);
            BeesMeadow.crc2.lineTo(0, 40);
            BeesMeadow.crc2.moveTo(20, -37);
            BeesMeadow.crc2.lineTo(20, 37);
            BeesMeadow.crc2.moveTo(40, -30);
            BeesMeadow.crc2.lineTo(40, 30);
            BeesMeadow.crc2.strokeStyle = "black";
            BeesMeadow.crc2.stroke();
            BeesMeadow.crc2.beginPath();
            BeesMeadow.crc2.lineWidth = 1;
            BeesMeadow.crc2.fillStyle = "white";
            BeesMeadow.crc2.ellipse(20, -60, 10, 30, Math.PI / 4, 0, 2 * Math.PI);
            BeesMeadow.crc2.fill();
            BeesMeadow.crc2.stroke();
            BeesMeadow.crc2.beginPath();
            BeesMeadow.crc2.fillStyle = "white";
            BeesMeadow.crc2.ellipse(-10, -60, 10, 30, Math.PI / 1.2, 0, 2 * Math.PI);
            BeesMeadow.crc2.fill();
            BeesMeadow.crc2.stroke();
            BeesMeadow.crc2.beginPath();
            BeesMeadow.crc2.ellipse(-20, 0, 37, 40, Math.PI / 2, 0, Math.PI);
            BeesMeadow.crc2.fillStyle = "black";
            BeesMeadow.crc2.fill();
            BeesMeadow.crc2.beginPath();
            BeesMeadow.crc2.arc(-40, -10, 10, 0, 2 * Math.PI);
            BeesMeadow.crc2.fillStyle = "white";
            BeesMeadow.crc2.fill();
            BeesMeadow.crc2.closePath();
            BeesMeadow.crc2.beginPath();
            BeesMeadow.crc2.arc(-42, -9, 8, 0, 2 * Math.PI);
            BeesMeadow.crc2.fillStyle = "black";
            BeesMeadow.crc2.fill();
            BeesMeadow.crc2.closePath();
            BeesMeadow.crc2.beginPath();
            BeesMeadow.crc2.arc(-39.5, -9, 2.5, 0, 2 * Math.PI);
            BeesMeadow.crc2.fillStyle = "white";
            BeesMeadow.crc2.fill();
            BeesMeadow.crc2.closePath();
            BeesMeadow.crc2.restore();
        }
        update() {
            if (this.posX > BeesMeadow.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > BeesMeadow.crc2.canvas.height || this.posY < BeesMeadow.crc2.canvas.height * 0.65) {
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
    }
    BeesMeadow.Bee = Bee;
})(BeesMeadow || (BeesMeadow = {}));
//# sourceMappingURL=L09.2_bee.js.map