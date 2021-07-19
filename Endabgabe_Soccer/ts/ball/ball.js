"use strict";
var soccer;
(function (soccer) {
    class Ball {
        constructor(_position) {
            this.ballKey = true;
            this.precisionChecker = 100;
            this.position = _position;
            this.draw();
        }
        get ballPos() {
            return this.position;
        }
        setKey(_key) {
            this.ballKey = _key;
        }
        setnewPosition(_newPosition) {
            let distanceBall = soccer.Vector.getdistance(_newPosition, this.position);
            let chosenPlayer = soccer.players[this.playerIndex];
            let random = Math.random();
            let newX;
            let newY;
            if (random >= 0.5) {
                newX = _newPosition.x + ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            else {
                newX = _newPosition.x - ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            random = Math.random();
            if (random >= 0.5) {
                newY = _newPosition.y + ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            else {
                newY = _newPosition.y - ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            this.newPosition = new soccer.Vector(newX, newY);
        }
        draw() {
            soccer.crc2.beginPath();
            soccer.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            soccer.crc2.fillStyle = "white";
            soccer.crc2.fill();
            soccer.crc2.closePath();
        }
        update() {
            if (soccer.key == true) {
                let diff = soccer.Vector.getDifference(this.newPosition, this.position);
                if (Math.abs(diff.x) < 1 && Math.abs(diff.y) < 1) {
                    soccer.key = false;
                    this.checkEnviroment();
                }
                else {
                    diff.scale(0.03);
                    this.position.add(diff);
                    this.checkEnviroment();
                }
            }
            else {
                this.draw();
                this.checkEnviroment();
            }
            this.checkOut();
            this.checkGoal();
        }
        checkGoal() {
            if (this.position.x < 30) {
                if (this.position.y < 300 && this.position.y > 200) {
                    soccer.scoreB++;
                    soccer.scoreBDOMElement.innerHTML = String(soccer.scoreB);
                    window.alert("Goal for Team B");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
            else if (this.position.x > 870) {
                if (this.position.y < 300 && this.position.y > 200) {
                    soccer.scoreA++;
                    soccer.scoreADOMElement.innerHTML = String(soccer.scoreA);
                    window.alert("Goal for Team A");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
        }
        checkOut() {
            if (this.position.y > 470 || this.position.y < 30) {
                this.resetPosition();
            }
        }
        resetPosition() {
            this.position.set(soccer.canvas.width / 2, soccer.canvas.height / 2);
            this.newPosition.set(soccer.canvas.width / 2, soccer.canvas.height / 2);
        }
        checkEnviroment() {
            if (this.ballKey == true) {
                for (let index = 0; index < soccer.players.length; index++) {
                    let chosenPlayer = soccer.players[index];
                    if (chosenPlayer.distance < 10) {
                        this.playerIndex = index;
                        soccer.posessionUpdate(index);
                        soccer.animationKey = false;
                        this.ballKey = false;
                        soccer.shootKey = true;
                        break;
                    }
                }
            }
        }
    }
    soccer.Ball = Ball;
})(soccer || (soccer = {}));
//# sourceMappingURL=ball.js.map