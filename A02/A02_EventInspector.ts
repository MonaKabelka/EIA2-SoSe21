namespace EventInspector {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.addEventListener("mousemove", setInfoBox);

        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);

        document.querySelector(".div0").addEventListener("click", logInfo);
        document.querySelector(".div0").addEventListener("keyup", logInfo);

        document.querySelector(".div1").addEventListener("click", logInfo);
        document.querySelector(".div1").addEventListener("keyup", logInfo);        
    }

    function setInfoBox(_event: MouseEvent): void {
        let spanElement: HTMLSpanElement = document.querySelector(".span");
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let mousePosition: string = "X coordinates: " + x + ", Y coordinates: " + y;
        let eventTarget = _event.target; //typedef?

        spanElement.innerHTML = mousePosition + eventTarget;
        spanElement.style.top = y + -30 + "px";
        spanElement.style.left = x + "px";
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target);
        console.log(_event);
    }
}