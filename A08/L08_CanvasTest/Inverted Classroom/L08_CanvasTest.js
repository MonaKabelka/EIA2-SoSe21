"use strict";
var CanvasTest;
(function (CanvasTest) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#8bbf97";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    // The x-coordinate of the upper-left corner of the rectangle; The y-coordinate of the upper-left corner of the rectangle;
    // The width of the rectangle, in pixels; The height of the rectangle, in pixels
    // clearRect(...) und strokeRect(...) sind die einzigen Zeichenbefehle, die sofort ein sichtbares Ergebnis liefern
    crc2.fillStyle = "blue";
    crc2.beginPath();
    crc2.moveTo(108, 0);
    crc2.lineTo(141, 70);
    crc2.lineTo(218, 78.3);
    crc2.lineTo(162, 131);
    crc2.lineTo(175, 205);
    crc2.lineTo(108, 170);
    crc2.lineTo(41.2, 205);
    crc2.lineTo(55, 131);
    crc2.lineTo(1, 78);
    crc2.lineTo(75, 68);
    crc2.lineTo(108, 0);
    crc2.closePath();
    crc2.fill();
    crc2.beginPath();
    crc2.strokeStyle = "white";
    crc2.arc(100, 100, 20, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    //crc2.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, counterclockwise]);
    crc2.beginPath();
    crc2.strokeStyle = "white";
    crc2.ellipse(70, 60, 50, 20, 50, 10, 20);
    crc2.closePath();
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(200, 50); // Begin first sub-path
    crc2.lineTo(250, 70);
    crc2.lineTo(250, 70); // Begin second sub-path
    crc2.lineTo(220, 120);
    crc2.lineTo(220, 120); // Begin third sub-path
    crc2.lineTo(200, 50);
    crc2.stroke();
    crc2.font = "15px sans-serif";
    crc2.fillStyle = "white";
    crc2.fillText("Hello world", 10, 50);
    let path = new Path2D();
    path.arc(60, 60, 50, 0, 2 * Math.PI);
    crc2.stroke(path);
    // let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);
    // gradient.addColorStop(0, "#8bbf97");
    // gradient.addColorStop(.5, "#e5ffeb");
    // gradient.addColorStop(1, "#afccb5");
    // crc2.fillStyle = gradient;
    // crc2.fillRect(0, 0, 200, 100);
})(CanvasTest || (CanvasTest = {}));
//# sourceMappingURL=L08_CanvasTest.js.map