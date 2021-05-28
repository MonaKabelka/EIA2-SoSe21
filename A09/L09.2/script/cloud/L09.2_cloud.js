"use strict";
var BeesMeadow;
(function (BeesMeadow) {
    class Cloud {
        constructor(_position) {
            this.velocityX = 0.17;
            this.velocityY = 0.1;
            this.posY = _position.y;
            this.posX = _position.x;
        }
        draw() {
            let gradient = BeesMeadow.crc2.createLinearGradient(0, 0, 0, BeesMeadow.crc2.canvas.height);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.7, "black");
            BeesMeadow.crc2.save();
            BeesMeadow.crc2.translate(this.posX, this.posY);
            BeesMeadow.crc2.scale(0.6, 0.6);
            BeesMeadow.crc2.beginPath();
            BeesMeadow.crc2.moveTo(-115, -20);
            BeesMeadow.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            BeesMeadow.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            BeesMeadow.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            BeesMeadow.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            BeesMeadow.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            BeesMeadow.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            BeesMeadow.crc2.fillStyle = gradient;
            BeesMeadow.crc2.fill();
            BeesMeadow.crc2.closePath();
            BeesMeadow.crc2.restore();
        }
        update() {
            if (this.posX > BeesMeadow.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > BeesMeadow.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
    }
    BeesMeadow.Cloud = Cloud;
})(BeesMeadow || (BeesMeadow = {}));
//# sourceMappingURL=L09.2_cloud.js.map