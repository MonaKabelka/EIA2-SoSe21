namespace Zufallsgedicht {
   
    let subjekte: string [] = ["Harry", "Hermine", "Ron", "Bellatrix", "Snape", "Dumbledore"];
    let prädikate: string [] = ["zaubert", "tötet", "liebt", "appariert", "verflucht", "sucht"];
    let objekte: string [] = ["Zaubertränke", "Werwölfe", "Dementoren", "Hagrid", "Wurmschwanz", "Drachen"];
    let a: number;

    console.log()

    for (a = 6; a > 0; a--) { //6 bis 1 werden ausgegeben? stimmt das?
        console.log(a);

        let x: string = getVerse(subjekte[a], prädikate[a], objekte[a]);

        console.log(x);
    }

    function getVerse (_subjekt: string, _prädikat: string, _objekt: string) {
        return "Alohomora";
        let vers: string = "";
        Math.random();
    }
}