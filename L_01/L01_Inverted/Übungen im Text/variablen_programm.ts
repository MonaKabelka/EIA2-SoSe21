let v: number = 1; 
v = v + 1;
console.log(v);

//bei v = "1" als string wird 11 ausgegeben 
//=> Additionsoperator + ist für Zeichenketten ganz anders definiert als für Zahlen

//bei v = true als boolean wird 2 ausgegeben

//bei v = v + "1" funktioniert nicht, da man zu Variable mit Typ number nicht string addieren kann



let v1: number = 1;
let v2: number = 4;

v2 = v1;

v1 = 10;

console.log(v2); 
// v2 bleibt immer noch erster wert von v1

