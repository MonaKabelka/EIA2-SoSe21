"use strict";
var Advanced;
(function (Advanced) {
    class Dandelion extends Advanced.Flower {
        updateNectar() {
            this.nectarCounter++;
            if (this.nectarLength < 6) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 1;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            }
            else {
                console.log("Dandelion nectar is full");
            }
            Advanced.crc2.save();
            Advanced.crc2.translate(this.xPos, this.yPos);
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(0.5, -26, this.nectarLength, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "grey";
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            Advanced.crc2.save();
            Advanced.crc2.translate(this.xPos, y);
            let r1 = 2;
            let r2 = 7;
            let gradient = Advanced.crc2.createRadialGradient(0, -26, r1, 0, -26, r2);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
            Advanced.crc2.fillStyle = "#2f852a";
            Advanced.crc2.fillRect(0, 0, 1.5, -20);
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(0, -26, r2, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = gradient;
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
    }
    Advanced.Dandelion = Dandelion;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=dandelion.js.map