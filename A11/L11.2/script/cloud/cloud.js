"use strict";
var Reloaded;
(function (Reloaded) {
    class Cloud extends Reloaded.Moveable {
        update() {
            if (this.posX > Reloaded.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Reloaded.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
        draw() {
            let gradient = Reloaded.crc2.createLinearGradient(0, 0, 0, Reloaded.crc2.canvas.height);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.7, "black");
            Reloaded.crc2.save();
            Reloaded.crc2.translate(this.posX, this.posY);
            Reloaded.crc2.scale(0.6, 0.6);
            Reloaded.crc2.beginPath();
            Reloaded.crc2.moveTo(-115, -20);
            Reloaded.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Reloaded.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            Reloaded.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Reloaded.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Reloaded.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Reloaded.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Reloaded.crc2.fillStyle = gradient;
            Reloaded.crc2.fill();
            Reloaded.crc2.closePath();
            Reloaded.crc2.restore();
        }
    }
    Reloaded.Cloud = Cloud;
})(Reloaded || (Reloaded = {}));
//# sourceMappingURL=cloud.js.map