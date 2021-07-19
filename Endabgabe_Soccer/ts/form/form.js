"use strict";
var soccer;
(function (soccer) {
    let valuesGlobal = [];
    let playerIndex = 0;
    let subIndex;
    let chosenTeam;
    let subA = ["22", "23", "24"];
    let subB = ["25", "26", "27"];
    function handleChange() {
        let formData = new FormData(document.forms[0]);
        valuesGlobal = [];
        for (let entry of formData) {
            console.log(entry[1]);
            valuesGlobal.push(String(entry[1]));
        }
        for (let index = 0; index < 28; index++) {
            let chosenPlayer = soccer.players[index];
            chosenPlayer.setProperties(Number(valuesGlobal[0]), Number(valuesGlobal[1]), Number(valuesGlobal[2]), Number(valuesGlobal[3]));
            if (index < 22) {
                if (index < 11) {
                    soccer.players[index].setJersey(valuesGlobal[4]);
                    soccer.players[index].draw();
                }
                else {
                    soccer.players[index].setJersey(valuesGlobal[5]);
                    soccer.players[index].draw();
                }
            }
            else {
                if (index < 25) {
                    soccer.players[index].setJersey(valuesGlobal[4]);
                    soccer.players[index].draw();
                }
                else {
                    soccer.players[index].setJersey(valuesGlobal[5]);
                    soccer.players[index].draw();
                }
            }
        }
    }
    soccer.handleChange = handleChange;
    function exchangePlayer() {
        let chosenPlayer = soccer.players[playerIndex];
        let chosenSub = soccer.players[subIndex];
        if (playerIndex != subIndex) {
            if (chosenTeam == "A") {
                subA[soccer.subPlayerDOMElement.selectedIndex] = String(playerIndex);
                console.log(subA);
            }
            else {
                subB[soccer.subPlayerDOMElement.selectedIndex] = String(playerIndex);
                console.log(subB);
            }
            let originPlayer = chosenPlayer.playerOrigin.copy();
            let originSub = chosenSub.playerOrigin.copy();
            chosenPlayer.setOrigin(originSub);
            chosenPlayer.changePlayer(chosenSub.playerPosition.copy());
            chosenSub.setOnField(true);
            chosenSub.setOrigin(originPlayer);
            chosenSub.changePlayer(chosenPlayer.playerPosition.copy());
            updateSelect();
            window.alert("Player: " + chosenPlayer.jerseyNumberPlayer + " switched with Player: " + chosenSub.jerseyNumberPlayer);
        }
        else {
            window.alert("You can't exchange the same Sub. Player");
        }
    }
    soccer.exchangePlayer = exchangePlayer;
    function updateSelect() {
        if (chosenTeam == "A") {
            soccer.subPlayerDOMElement.innerHTML = "<option value=" + subA[0] + ">Team A: Sub.1</option><option value=" + subA[1] + ">Team A: Sub.2</option><option value=" + subA[2] + ">Team A: Sub.3</option>";
        }
        if (chosenTeam == "B") {
            soccer.subPlayerDOMElement.innerHTML = "<option value=" + subB[0] + ">Team B: Sub.1</option><option value=" + subB[1] + ">Team B: Sub.2</option><option value=" + subB[2] + ">Team B: Sub.3</option>";
        }
        subChange();
    }
    function posessionUpdate(_index) {
        let chosenPlayer = soccer.players[_index];
        soccer.posession.innerHTML = "Posession Player:" + chosenPlayer.jerseyNumberPlayer + " Team:" + chosenPlayer.playerTeam;
    }
    soccer.posessionUpdate = posessionUpdate;
    function switchForm(_event) {
        switch (_event.code) {
            case "ArrowLeft":
                playerIndex--;
                if (playerIndex < 0) {
                    playerIndex = 27;
                }
                formIntoHTML(playerIndex);
                break;
            case "ArrowRight":
                playerIndex++;
                if (playerIndex > 27) {
                    playerIndex = 0;
                }
                formIntoHTML(playerIndex);
        }
    }
    soccer.switchForm = switchForm;
    function formIntoHTML(_index) {
        let chosenPlayer = soccer.players[_index];
        soccer.speedPlayer.innerHTML = (chosenPlayer.playerSpeed).toFixed(2);
        soccer.precPlayer.innerHTML = (chosenPlayer.playerPrecision).toFixed(2);
        soccer.numberPlayer.innerHTML = String(chosenPlayer.jerseyNumberPlayer);
        soccer.teamPlayer.innerHTML = String(chosenPlayer.playerTeam);
        chosenTeam = chosenPlayer.playerTeam;
        updateSelect();
    }
    soccer.formIntoHTML = formIntoHTML;
    function subChange() {
        subIndex = Number(soccer.subPlayerDOMElement.value);
        let chosenSub = soccer.players[subIndex];
        soccer.speedSub.innerHTML = (chosenSub.playerSpeed).toFixed(2);
        soccer.precSub.innerHTML = (chosenSub.playerPrecision).toFixed(2);
        soccer.numberSub.innerHTML = String(chosenSub.jerseyNumberPlayer);
        soccer.teamSub.innerHTML = String(chosenSub.playerTeam);
    }
    soccer.subChange = subChange;
})(soccer || (soccer = {}));
//# sourceMappingURL=form.js.map