namespace Zufallsgedicht {
    let subjects: string[] = ["Naruto ", "Pain ", "Kakashi ", "Jiraiya ", "Itachi ", "Minato "];
    let predicates: string[] = ["fights ", "kills ", "loves ", "devours ", "dreams about ", "eats "];
    let objects: string[] = ["Sasuke", "Rock Lee", "Ramen", "Icha Icha", "Shadow Clones", "Gamabunta"];

    for (let a: number = 6; a > 0; a--) {
        let x: string = getVerse(subjects, predicates, objects);
        console.log(x);
    }

    function getVerse(_subjekt: string[], _prädikat: string[], _objekt: string[]): string {
        let versContainer: string = "";

        let randomNrSubjekt: number = Math.floor(Math.random() * Math.floor(_subjekt.length));
        let randomNrPrädikat: number = Math.floor(Math.random() * Math.floor(_prädikat.length));
        let randomNrObject: number = Math.floor(Math.random() * Math.floor(_objekt.length));

        versContainer = _subjekt[randomNrSubjekt] + _prädikat[randomNrPrädikat] + _objekt[randomNrObject];

        _subjekt.splice(randomNrSubjekt, 1); //splice: 1.Parameter: Stelle ab der gelöscht wird, 2.Parameter: wie viel gelöscht wird 
        _prädikat.splice(randomNrPrädikat, 1);
        _objekt.splice(randomNrObject, 1);

        return versContainer;
    }
}