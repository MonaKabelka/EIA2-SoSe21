namespace BeesMeadow {
    export class Flower {
        public xPos: number;
        public flowerType: number;
        public yRandomMin: number;
        public yRandomMax: number;

        constructor(_flowerType: number, _xPos: number, _yRandomMin: number, _yRandomMax: number) {
            this.xPos = _xPos;
            this.flowerType = _flowerType;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }

        public draw(): void {
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            crc2.save();
            crc2.translate(this.xPos, y);

            if (this.flowerType == 1) { //Lavender
                let flowerColor: string[] = ["#693087", "#793e9a", "#853daf"];
                let flowerSize: number = 1.5 + Math.random() * (2.5 - 1.5);
    
                crc2.scale(flowerSize, flowerSize);
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

            else if (this.flowerType == 2) { //Dandelion
                let r1: number = 2;
                let r2: number = 7;
                let gradient: CanvasGradient = crc2.createRadialGradient(0, -26, r1, 0, -26, r2);
                let flowerSize: number = .8 + Math.random() * (1.5 - .8);

                gradient.addColorStop(0, "white");
                gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");

                crc2.scale(flowerSize, flowerSize);
                crc2.fillStyle = "#2f852a";
                crc2.fillRect(0, 0, 1.5, -20);
    
                crc2.beginPath();
                crc2.arc(0, -26, r2, 0, 2 * Math.PI);
                crc2.fillStyle = gradient;
                crc2.fill();

                crc2.restore();
            }

            else { //Starflower
                let flowerSize: number = .8 + Math.random() * (1 - .8);

                crc2.scale(flowerSize, flowerSize);
                crc2.fillStyle = "#2f852a";
                crc2.fillRect(4.8, 12, 2, -15);

                crc2.fillStyle = "#fdff92";
                crc2.beginPath();
                crc2.moveTo(5.4, 0);
                crc2.lineTo(7.05, -3.5);
                crc2.lineTo(10.9, -3.69);
                crc2.lineTo(8.1, -6.55);
                crc2.lineTo(8.75, -10.25);
                crc2.lineTo(5.4, -8.5);
                crc2.lineTo(2.06, -10.25);
                crc2.lineTo(2.75, -6.55);
                crc2.lineTo(.05, -3.9);
                crc2.lineTo(3.75, -3.4);
                crc2.lineTo(5.4, -0);
                crc2.closePath();
                crc2.fill();

                crc2.restore();
            }
            
        }
    }
}