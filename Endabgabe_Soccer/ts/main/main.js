"use strict";
//This concept was developed in cooperation with Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner and Timur Yildirim
var soccer;
(function (soccer) {
    window.addEventListener("load", handleLoad);
    let Task;
    (function (Task) {
        Task[Task["lookForBall"] = 0] = "lookForBall";
        Task[Task["walkToBall"] = 1] = "walkToBall";
        Task[Task["shootBall"] = 2] = "shootBall";
        Task[Task["walkToOrigin"] = 3] = "walkToOrigin";
        Task[Task["changePlayer"] = 4] = "changePlayer";
    })(Task = soccer.Task || (soccer.Task = {}));
    soccer.animationKey = true;
    soccer.shootKey = false;
    soccer.players = [];
    soccer.scoreA = 0;
    soccer.scoreB = 0;
    function handleLoad() {
        soccer.speedPlayer = document.querySelector("#speedPlayer");
        soccer.precPlayer = document.querySelector("#precPlayer");
        soccer.numberPlayer = document.querySelector("#numberPlayer");
        soccer.teamPlayer = document.querySelector("#teamPlayer");
        soccer.posession = document.querySelector("#posession");
        soccer.speedSub = document.querySelector("#speedSubstitute");
        soccer.precSub = document.querySelector("#precSubstitute");
        soccer.numberSub = document.querySelector("#numberSubstitute");
        soccer.teamSub = document.querySelector("#teamSubstitute");
        soccer.subPlayerDOMElement = document.querySelector("#subPlayer");
        soccer.scoreADOMElement = document.querySelector("#scoreA");
        soccer.scoreBDOMElement = document.querySelector("#scoreB");
        soccer.changeBtn = document.querySelector("#changeBtn");
        soccer.form = document.querySelector("#formLeft");
        soccer.canvas = document.querySelector("canvas");
        soccer.changeBtn.addEventListener("click", soccer.exchangePlayer);
        document.addEventListener("keydown", soccer.switchForm);
        soccer.subPlayerDOMElement.addEventListener("change", soccer.subChange);
        soccer.form.addEventListener("change", soccer.handleChange);
        soccer.canvas.addEventListener("click", shootBall);
        soccer.crc2 = soccer.canvas.getContext("2d");
        soccer.canvas.width = 900;
        soccer.canvas.height = 500;
        soccer.drawField();
        soccer.imageData = soccer.crc2.getImageData(0, 0, soccer.canvas.width, soccer.canvas.height);
        soccer.ball = new soccer.Ball(new soccer.Vector(soccer.canvas.width * 0.5, soccer.canvas.height * 0.5));
        createPlayer();
        createReferees();
        soccer.handleChange();
        soccer.formIntoHTML(0);
        animate();
    }
    function createPlayer() {
        for (let indexA = 0; indexA < 2; indexA++) {
            for (let indexB = 0; indexB < 11; indexB++) {
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    soccer.players.push(new soccer.Player(new soccer.Vector(soccer.positionsTeam1[indexB].x, soccer.positionsTeam1[indexB].y), "red", true, randomNumber, "A"));
                }
                else {
                    soccer.players.push(new soccer.Player(new soccer.Vector(soccer.positionsTeam2[indexB].x, soccer.positionsTeam2[indexB].y), "blue", true, randomNumber, "B"));
                }
            }
        }
        for (let indexA = 0; indexA < 2; indexA++) {
            for (let indexB = 11; indexB < 14; indexB++) {
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    soccer.players.push(new soccer.Player(new soccer.Vector(soccer.positionsTeam1[indexB].x, soccer.positionsTeam1[indexB].y), "red", false, randomNumber, "A"));
                }
                else {
                    soccer.players.push(new soccer.Player(new soccer.Vector(soccer.positionsTeam2[indexB].x, soccer.positionsTeam2[indexB].y), "blue", false, randomNumber, "B"));
                }
            }
        }
    }
    function createReferees() {
        soccer.players.push(new soccer.Referee(new soccer.Vector(450, 150), "white"));
        soccer.players.push(new soccer.Linereferee(new soccer.Vector(680, 15), "#ffff82"));
        soccer.players.push(new soccer.Linereferee(new soccer.Vector(230, 485), "#ffff82"));
    }
    function shootBall(_event) {
        if (soccer.shootKey == true) {
            let rect = soccer.canvas.getBoundingClientRect();
            let mouse = new soccer.Vector(_event.clientX - rect.left, _event.clientY - rect.top);
            soccer.key = true;
            soccer.ball.setnewPosition(mouse);
            soccer.animationKey = true;
            soccer.shootKey = false;
            animate();
        }
    }
    function animate() {
        if (soccer.animationKey == true) {
            requestAnimationFrame(animate);
            soccer.crc2.clearRect(0, 0, soccer.crc2.canvas.width, soccer.crc2.canvas.height);
            soccer.crc2.putImageData(soccer.imageData, 0, 0); //gespeichertes Spielfeld wird wieder gezeichnet
            for (let index = 0; index < soccer.players.length; index++) {
                soccer.players[index].update();
                soccer.players[index].draw();
            }
            soccer.ball.update();
            soccer.ball.draw();
        }
    }
})(soccer || (soccer = {}));
//# sourceMappingURL=main.js.map