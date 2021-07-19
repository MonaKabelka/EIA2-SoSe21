"use strict";
var soccer;
(function (soccer) {
    class Linereferee extends soccer.Human {
        constructor(_position, _jerseyColor) {
            super(_position, _jerseyColor);
            this.velocity = 0.5;
            this.draw();
        }
        draw() {
            soccer.crc2.save();
            soccer.crc2.translate(this.position.x, this.position.y);
            soccer.crc2.beginPath();
            soccer.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            soccer.crc2.fillStyle = this.jerseyColor;
            soccer.crc2.strokeStyle = "black";
            soccer.crc2.lineWidth = 2.5;
            soccer.crc2.stroke();
            soccer.crc2.fill();
            soccer.crc2.closePath();
            soccer.crc2.beginPath();
            soccer.crc2.lineWidth = 3;
            soccer.crc2.moveTo(0, -10);
            soccer.crc2.lineTo(0, 10);
            soccer.crc2.moveTo(-6, -8);
            soccer.crc2.lineTo(-6, 8);
            soccer.crc2.moveTo(6, -8);
            soccer.crc2.lineTo(6, 8);
            soccer.crc2.strokeStyle = "black";
            soccer.crc2.stroke();
            soccer.crc2.restore();
        }
        update() {
            if (this.position.x == 450) {
                this.velocity = -this.velocity;
            }
            if (this.position.x == 50) {
                this.velocity = -this.velocity;
            }
            if (this.position.x == 850) {
                this.velocity = -this.velocity;
            }
            this.position.x += this.velocity;
        }
    }
    soccer.Linereferee = Linereferee;
})(soccer || (soccer = {}));
//# sourceMappingURL=linereferees.js.map