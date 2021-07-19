"use strict";
var Reloaded;
(function (Reloaded) {
    class Bee extends Reloaded.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        update() {
            if (this.posX > Reloaded.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Reloaded.crc2.canvas.height || this.posY < Reloaded.crc2.canvas.height * 0.65) {
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
            Reloaded.crc2.save();
            Reloaded.crc2.translate(this.posX, this.posY);
            Reloaded.crc2.scale(this.randomScaleX, this.randomScaleY);
            Reloaded.crc2.beginPath();
            Reloaded.crc2.fillStyle = "#fff200";
            Reloaded.crc2.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
            Reloaded.crc2.fill();
            Reloaded.crc2.stroke();
            Reloaded.crc2.beginPath();
            Reloaded.crc2.lineWidth = 8;
            Reloaded.crc2.moveTo(0, -40);
            Reloaded.crc2.lineTo(0, 40);
            Reloaded.crc2.moveTo(20, -37);
            Reloaded.crc2.lineTo(20, 37);
            Reloaded.crc2.moveTo(40, -30);
            Reloaded.crc2.lineTo(40, 30);
            Reloaded.crc2.strokeStyle = "black";
            Reloaded.crc2.stroke();
            Reloaded.crc2.beginPath();
            Reloaded.crc2.lineWidth = 1;
            Reloaded.crc2.fillStyle = "white";
            Reloaded.crc2.ellipse(20, -60, 10, 30, Math.PI / 4, 0, 2 * Math.PI);
            Reloaded.crc2.fill();
            Reloaded.crc2.stroke();
            Reloaded.crc2.beginPath();
            Reloaded.crc2.fillStyle = "white";
            Reloaded.crc2.ellipse(-10, -60, 10, 30, Math.PI / 1.2, 0, 2 * Math.PI);
            Reloaded.crc2.fill();
            Reloaded.crc2.stroke();
            Reloaded.crc2.beginPath();
            Reloaded.crc2.ellipse(-20, 0, 37, 40, Math.PI / 2, 0, Math.PI);
            Reloaded.crc2.fillStyle = "black";
            Reloaded.crc2.fill();
            Reloaded.crc2.beginPath();
            Reloaded.crc2.arc(-40, -10, 10, 0, 2 * Math.PI);
            Reloaded.crc2.fillStyle = "white";
            Reloaded.crc2.fill();
            Reloaded.crc2.closePath();
            Reloaded.crc2.beginPath();
            Reloaded.crc2.arc(-42, -9, 8, 0, 2 * Math.PI);
            Reloaded.crc2.fillStyle = "black";
            Reloaded.crc2.fill();
            Reloaded.crc2.closePath();
            Reloaded.crc2.beginPath();
            Reloaded.crc2.arc(-39.5, -9, 2.5, 0, 2 * Math.PI);
            Reloaded.crc2.fillStyle = "white";
            Reloaded.crc2.fill();
            Reloaded.crc2.closePath();
            Reloaded.crc2.restore();
        }
    }
    Reloaded.Bee = Bee;
})(Reloaded || (Reloaded = {}));
//# sourceMappingURL=bee.js.map