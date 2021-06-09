"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Bee extends Polymorphie.Moveable {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            this.counter = 0;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        draw() {
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.posX, this.posY);
            Polymorphie.crc2.scale(this.randomScaleX, this.randomScaleY);
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.fillStyle = "#fff200";
            Polymorphie.crc2.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.lineWidth = 8;
            Polymorphie.crc2.moveTo(0, -40);
            Polymorphie.crc2.lineTo(0, 40);
            Polymorphie.crc2.moveTo(20, -37);
            Polymorphie.crc2.lineTo(20, 37);
            Polymorphie.crc2.moveTo(40, -30);
            Polymorphie.crc2.lineTo(40, 30);
            Polymorphie.crc2.strokeStyle = "black";
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.lineWidth = 1;
            Polymorphie.crc2.fillStyle = "white";
            Polymorphie.crc2.ellipse(20, -60, 10, 30, Math.PI / 4, 0, 2 * Math.PI);
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.fillStyle = "white";
            Polymorphie.crc2.ellipse(-10, -60, 10, 30, Math.PI / 1.2, 0, 2 * Math.PI);
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(-20, 0, 37, 40, Math.PI / 2, 0, Math.PI);
            Polymorphie.crc2.fillStyle = "black";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.arc(-40, -10, 10, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "white";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.arc(-42, -9, 8, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "black";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.arc(-39.5, -9, 2.5, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "white";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.restore();
        }
        update() {
            if (this.posX > Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Polymorphie.crc2.canvas.height || this.posY < Polymorphie.crc2.canvas.height * 0.65) {
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
    Polymorphie.Bee = Bee;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=bee.js.map