namespace Advanced { 
    export class Lavender extends Flower {

        public updateNectar(): void {
            this.nectarCounter++;
            if (this.nectarLength < 6) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 1;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            } else {
                console.log("Lavender nectar is full");
            }
            crc2.save();
            crc2.translate(this.xPos, this.yPos);
            crc2.beginPath();
            crc2.arc(0.5, -45, this.nectarLength, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.restore();
        }

        protected draw(): void {
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            crc2.save();
            crc2.translate(this.xPos, y);
            let flowerColor: string[] = ["#693087", "#793e9a", "#853daf"];

            crc2.scale(2, 2);
            crc2.fillStyle = "#2f852a";
            crc2.fillRect(0, 0, 0.8, -10);

            let yFLower1: number = -10;
            let yFLower2: number = -11;
            let yFLower3: number = -13;
            let yFLower4: number = -14;
    
            for (let z: number = 0; z < 3; z++) {
                crc2.beginPath();
                crc2.moveTo(0, yFLower1);
                crc2.lineTo(-1, yFLower2);
                crc2.lineTo(-2, yFLower3);
                crc2.lineTo(-1, yFLower4);
                crc2.lineTo(0, yFLower4);
                crc2.lineTo(0.5, yFLower3);
                crc2.lineTo(1, yFLower4);
                crc2.lineTo(2, yFLower4);
                crc2.lineTo(3, yFLower3);
                crc2.lineTo(2, yFLower2);
                crc2.lineTo(1, yFLower1);
                crc2.closePath();
                crc2.fillStyle = flowerColor[z];
                crc2.fill();

                yFLower1 += -4;
                yFLower2 += -4;
                yFLower3 += -4;
                yFLower4 += -4;
            }
            crc2.restore();
        }
    }

}