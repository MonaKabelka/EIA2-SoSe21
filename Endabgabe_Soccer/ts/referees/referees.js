"use strict";
var soccer;
(function (soccer) {
    class Referee extends soccer.Human {
        constructor(_position, _jerseyColor) {
            super(_position, _jerseyColor);
            this.velocity = 0.3;
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
            let diff = soccer.Vector.getDifference(soccer.ball.ballPos, this.position);
            if (Math.abs(diff.x) < 30 && Math.abs(diff.y) < 30) {
                //Schiedsrichter steht
            }
            else {
                diff.scale(0.005);
                this.position.add(diff);
            }
        }
    }
    soccer.Referee = Referee;
})(soccer || (soccer = {}));
//# sourceMappingURL=referees.js.map