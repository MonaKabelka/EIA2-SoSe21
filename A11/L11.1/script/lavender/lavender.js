"use strict";
var Advanced;
(function (Advanced) {
    class Lavender extends Advanced.Flower {
        updateNectar() {
            this.nectarCounter++;
            if (this.nectarLength < 6) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 1;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            }
            else {
                console.log("Lavender nectar is full");
            }
            Advanced.crc2.save();
            Advanced.crc2.translate(this.xPos, this.yPos);
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(0.5, -45, this.nectarLength, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "yellow";
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            Advanced.crc2.save();
            Advanced.crc2.translate(this.xPos, y);
            let flowerColor = ["#693087", "#793e9a", "#853daf"];
            Advanced.crc2.scale(2, 2);
            Advanced.crc2.fillStyle = "#2f852a";
            Advanced.crc2.fillRect(0, 0, 0.8, -10);
            let yFLower1 = -10;
            let yFLower2 = -11;
            let yFLower3 = -13;
            let yFLower4 = -14;
            for (let z = 0; z < 3; z++) {
                Advanced.crc2.beginPath();
                Advanced.crc2.moveTo(0, yFLower1);
                Advanced.crc2.lineTo(-1, yFLower2);
                Advanced.crc2.lineTo(-2, yFLower3);
                Advanced.crc2.lineTo(-1, yFLower4);
                Advanced.crc2.lineTo(0, yFLower4);
                Advanced.crc2.lineTo(0.5, yFLower3);
                Advanced.crc2.lineTo(1, yFLower4);
                Advanced.crc2.lineTo(2, yFLower4);
                Advanced.crc2.lineTo(3, yFLower3);
                Advanced.crc2.lineTo(2, yFLower2);
                Advanced.crc2.lineTo(1, yFLower1);
                Advanced.crc2.closePath();
                Advanced.crc2.fillStyle = flowerColor[z];
                Advanced.crc2.fill();
                yFLower1 += -4;
                yFLower2 += -4;
                yFLower3 += -4;
                yFLower4 += -4;
            }
            Advanced.crc2.restore();
        }
    }
    Advanced.Lavender = Lavender;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=lavender.js.map