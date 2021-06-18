//Zusammen gearbeitet mit: Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner und Timur Yildirim
namespace Advanced {
    export let crc2: CanvasRenderingContext2D;
    export let goldenCut: number = 0.62;
    let moveable: Moveable [] = [];
    let flowers: Flower[] = [];
    let imageData: ImageData;
    
    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;

        createBackground();
        createFlowers();
        createBees(12);
        createCloud();
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }

    function createBackground(): void {
        let horizon: number = crc2.canvas.height * goldenCut;
        let posMountains: Vector = {x: 0, y: horizon};
        drawBackground();
        drawSun({x: crc2.canvas.width * .15, y: crc2.canvas.height * .2});
        drawMountains(posMountains, 75, 200, "black", "white");
        drawMountains(posMountains, 50, 150, "grey", "white");
        drawPine(-30, -50, .6, .9);
        drawPine(-70, -90, .5, .7);
    }

    function createFlowers(): void {
        let xPos: number = 0;

        do {
            let flowerType: number = Math.floor(Math.random() * 3) + 1;

            if (flowerType == 1) {
                flowers.push(new Lavender(xPos, 120 + (crc2.canvas.height * goldenCut), crc2.canvas.height));
            }
            else if (flowerType == 2) {
                flowers.push(new Dandelion(xPos, 120 + (crc2.canvas.height * goldenCut), crc2.canvas.height));
            }
            else if (flowerType == 3) {
                flowers.push(new Starflower(xPos, 120 + (crc2.canvas.height * goldenCut), crc2.canvas.height));
            }
            xPos += 5 + Math.random() * (20 - 5);
        }
        while (xPos < crc2.canvas.width);
    }

    function createBees (_nBee: number): void {
        for (let index: number = 0; index < _nBee; index++) {

            let randomScaleY: number = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX: number = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;

            let randomVelocityX: number = (Math.random() - 0.5) * 3; 
            let randomVelocityY: number = (Math.random() - 0.5) * 3;

            moveable.push(new Bee({ x: crc2.canvas.width / 2, y: crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, {x: randomScaleX, y: randomScaleY}));
        } 
    }

    function createCloud (): void {
        moveable.push(new Cloud({ x: crc2.canvas.width * .7, y: crc2.canvas.height * 0.19 }, {x: 0.17, y:  0.1}));
        moveable.push(new Cloud({ x: crc2.canvas.width * .10, y: crc2.canvas.height * 0.23 }, {x: 0.17, y:  0.1}));
        moveable.push(new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * 0.2 }, {x: 0.17, y:  0.1}));
        moveable.push(new Cloud({ x: crc2.canvas.width * .2, y: crc2.canvas.height * 0.2 }, {x: 0.17, y:  0.1}));
    }

    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let index: number = 0; index < flowers.length; index ++) {
            flowers[index].updateNectar();
        }

        for (let index: number = 0; index < moveable.length; index ++) {
            moveable[index].update();
        }
    }
}