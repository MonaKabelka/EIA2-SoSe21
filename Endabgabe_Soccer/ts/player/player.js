"use strict";
var soccer;
(function (soccer) {
    class Player extends soccer.Human {
        constructor(_position, _jerseyColor, _onField, _jerseyNumber, _team) {
            super(_position, _jerseyColor);
            this.task = soccer.Task.lookForBall;
            this.radius = 80;
            this.onField = _onField;
            this.velocity = 0.5;
            this.jerseyNumber = _jerseyNumber;
            this.origin = this.position.copy();
            this.team = _team;
        }
        get playerOrigin() {
            return this.origin;
        }
        get jerseyNumberPlayer() {
            return this.jerseyNumber;
        }
        get playerSpeed() {
            return this.velocity;
        }
        get distance() {
            return this.distancePlayerBall;
        }
        get playerPrecision() {
            return this.precision;
        }
        get playerOnField() {
            return this.onField;
        }
        get playerTeam() {
            return this.team;
        }
        setOnField(_onField) {
            this.onField = _onField;
        }
        setOrigin(_position) {
            this.origin = _position;
        }
        setProperties(_minSpeed, _maxSpeed, _minPrecision, _maxPrecision) {
            this.precision = _minPrecision + Math.random() * (_maxPrecision - _minPrecision);
            this.velocity = _minSpeed + Math.random() * (_maxSpeed - _minSpeed);
        }
        setDistance() {
            let ballPos = soccer.ball.ballPos;
            this.distancePlayerBall = soccer.Vector.getdistance(ballPos, this.position);
        }
        draw() {
            soccer.crc2.beginPath();
            soccer.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            soccer.crc2.fillStyle = this.jerseyColor;
            soccer.crc2.strokeStyle = "black";
            soccer.crc2.stroke();
            soccer.crc2.fill();
            soccer.crc2.textBaseline = "middle";
            soccer.crc2.textAlign = "center";
            soccer.crc2.fillStyle = "black";
            soccer.crc2.fillText(String(this.jerseyNumber), this.position.x, this.position.y);
            soccer.crc2.closePath();
        }
        changePlayer(_position) {
            this.newPosition = _position;
            this.task = soccer.Task.changePlayer;
        }
        update() {
            if (this.onField == true) {
                this.setDistance();
                switch (this.task) {
                    case soccer.Task.lookForBall:
                        if (this.distancePlayerBall < this.radius) {
                            this.task = soccer.Task.walkToBall;
                        }
                        break;
                    case soccer.Task.walkToBall:
                        if (this.distancePlayerBall > this.radius) {
                            this.task = soccer.Task.walkToOrigin;
                        }
                        else {
                            if (this.distancePlayerBall < 10) {
                                this.task = soccer.Task.shootBall;
                            }
                            this.movePlayer(soccer.ball.ballPos);
                        }
                        break;
                    case soccer.Task.shootBall:
                        if (this.distancePlayerBall > 20 || (soccer.ball.getKey) == false) {
                            soccer.ball.setKey(true);
                            this.task = soccer.Task.walkToOrigin;
                        }
                        break;
                    case soccer.Task.walkToOrigin:
                        this.movePlayer(this.origin);
                        if (soccer.Vector.getdistance(this.origin, this.position) < 1) {
                            this.task = soccer.Task.lookForBall;
                        }
                        break;
                    case soccer.Task.changePlayer:
                        this.movePlayer(this.newPosition);
                        if (soccer.Vector.getdistance(this.newPosition, this.position) < 1) {
                            if (this.position.y > 470 || this.position.y < 30) {
                                this.setOnField(false);
                                this.task = soccer.Task.lookForBall;
                            }
                            else {
                                this.setOnField(true);
                                this.task = soccer.Task.lookForBall;
                            }
                        }
                        break;
                }
            }
        }
        movePlayer(_position) {
            let playerDistance = soccer.Vector.getdistance(_position, this.position);
            let playerDiffernce = soccer.Vector.getDifference(_position, this.position);
            let ratio = this.velocity / playerDistance;
            playerDiffernce.scale(ratio);
            this.position.add(playerDiffernce);
            this.draw();
        }
    }
    soccer.Player = Player;
})(soccer || (soccer = {}));
//# sourceMappingURL=player.js.map