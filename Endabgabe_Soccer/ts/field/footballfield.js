"use strict";
var soccer;
(function (soccer) {
    function drawField() {
        //Fußballfeld
        soccer.crc2.beginPath();
        soccer.crc2.fillStyle = "#accc8d";
        soccer.crc2.fillRect(0, 0, soccer.canvas.width, soccer.canvas.height);
        soccer.crc2.fill();
        soccer.crc2.closePath();
        //Mittelkreis
        soccer.crc2.beginPath();
        soccer.crc2.arc(450, 250, 70, 0, 2 * Math.PI, false);
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.fill();
        soccer.crc2.stroke();
        soccer.crc2.closePath();
        //Außenfeldlinie
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.moveTo(30, 30);
        soccer.crc2.lineTo(870, 30);
        soccer.crc2.lineTo(870, 470);
        soccer.crc2.lineTo(30, 470);
        soccer.crc2.lineTo(30, 30);
        soccer.crc2.stroke();
        soccer.crc2.closePath();
        //Mittellinie
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.moveTo(450, 30);
        soccer.crc2.lineTo(450, 470);
        soccer.crc2.closePath();
        soccer.crc2.stroke();
        //Torraum links
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.rect(30, 175, 50, 150);
        soccer.crc2.stroke();
        //Tor links
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.rect(5, 200, 25, 100);
        soccer.crc2.stroke();
        //Strafraum links
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.rect(30, 100, 120, 300);
        soccer.crc2.stroke();
        //Strafraumhalbkreis links
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.arc(150, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, false);
        soccer.crc2.stroke();
        //Torraum rechts
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.rect(820, 175, 50, 150);
        soccer.crc2.stroke();
        //Strafraum rechts
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.rect(750, 100, 120, 300);
        soccer.crc2.stroke();
        //Tor rechts
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.rect(870, 200, 25, 100);
        soccer.crc2.stroke();
        //Strafraumhalbkreis rechts
        soccer.crc2.beginPath();
        soccer.crc2.strokeStyle = "white";
        soccer.crc2.arc(750, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, true);
        soccer.crc2.stroke();
    }
    soccer.drawField = drawField;
})(soccer || (soccer = {}));
//# sourceMappingURL=footballfield.js.map