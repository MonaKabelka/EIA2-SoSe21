namespace Zufallsgedicht {
    let subjekte: string [] = ["Naruto ", "Pain ", "Kakashi ", "Jiraiya ", "Itachi ", "Minato "];
    let prädikate: string [] = ["bekämpft ", "tötet ", "liebt ", "trainiert mit ", "versiegelt ", "isst "];
    let objekte: string [] = ["Sasuke", "Rock Lee", "Ramen", "Flirtparadies", "Schattendoppelgänger", "Gamabunta"];

    for (let a: number = 6; a > 0; a--) {
        let x: string = getVerse(subjekte, prädikate, objekte);
        console.log(x);
    }

    function getVerse (_subjekt: string[], _prädikat: string[], _objekt: string[]) { //Typedef?
        let versContainer: string = "";

        let randomNrSubjekt: number = Math.floor(Math.random() * Math.floor(_subjekt.length));
        let randomNrPrädikat: number = Math.floor(Math.random() * Math.floor(_prädikat.length));
        let randomNrObject: number = Math.floor(Math.random() * Math.floor(_objekt.length));

        versContainer = _subjekt[randomNrSubjekt] + _prädikat[randomNrPrädikat] + _objekt[randomNrObject];

        _subjekt.splice(randomNrSubjekt, 1); //Wieso , 1?
        _prädikat.splice(randomNrPrädikat, 1);
        _objekt.splice(randomNrObject, 1);
        
        return versContainer;
    }
}