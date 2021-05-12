namespace GenerativeArt {
    window.addEventListener("load", createCanvas);
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
    let amount: number = Math.floor(Math.random() * 21) + 20;
    console.log(amount);
    let hexaDigit: string[] = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
    let color: string = "#";
    let star: number[] = [45, 75, 65, 10, 85, 30, 35, 100];

    function createCanvas(): void {
        canvas.height =  700;
        canvas.width =  900;
        createArt();
    }

    function createArt(): void {
        for (let n: number = 0; n <= amount; n++) {
            let z: number = Math.floor(Math.random() * 801);
            let z1: number = Math.floor(Math.random() * 801);
            crc2.globalAlpha = Math.random();
            crc2.beginPath();
            crc2.moveTo(z1, z);
            for (let f: number = 0; f < 6; f++) {
                let k: number = Math.floor(Math.random() * Math.floor(10));
                let k1: number = Math.floor(Math.random() *  Math.floor(10));
                crc2.lineTo(k1, k);
            }
            crc2.closePath();         
            for (let k: number = 0; k < 6; k++) {
                color += hexaDigit[Math.floor(Math.random() * hexaDigit.length)];
            }
            crc2.fillStyle = color;
            crc2.fill();
            color = "#";
        } 
        for (let i: number = 0; i <= amount; i++) {
            crc2.globalAlpha = Math.random();
            let x: number = Math.floor(Math.random() * Math.floor(900));
            let y: number = Math.floor(Math.random() * Math.floor(700));
            let radius: number = Math.floor(Math.random() * 201);
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.closePath();
            for (let a: number = 0; a < 6; a++) {
                color += hexaDigit[Math.floor(Math.random() * hexaDigit.length)];
            }
            crc2.fillStyle = color;
            crc2.fill();
            color = "#";
        }
        for (let n: number = 0; n <= amount; n++) {
            let z: number = Math.floor(Math.random() * 801);
            let z1: number = Math.floor(Math.random() * 801);
            crc2.globalAlpha = Math.random();
            crc2.beginPath();
            crc2.moveTo(star[0] + z1, star[1] + z);
            crc2.lineTo(star[2] + z1, star[3] + z);
            crc2.lineTo(star[4] + z1, star[1] + z);
            crc2.lineTo(star[5] + z1, star[6] + z);
            crc2.lineTo(star[7] + z1, star[6] + z);
            crc2.lineTo(star[0] + z1, star[1] + z);  
            crc2.closePath();         
            for (let k: number = 0; k < 6; k++) {
                color += hexaDigit[Math.floor(Math.random() * hexaDigit.length)];
            }
            crc2.fillStyle = color;
            crc2.fill();
            color = "#";
        }
    }
}