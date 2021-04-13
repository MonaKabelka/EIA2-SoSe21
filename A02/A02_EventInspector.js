"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
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
    function setInfoBox(_event) {
        let spanElement = document.querySelector(".span");
        let x = _event.clientX;
        let y = _event.clientY;
        let mousePosition = "X coordinates: " + x + ", Y coordinates: " + y;
        let eventTarget = _event.target; //typedef?
        spanElement.innerHTML = mousePosition + eventTarget;
        spanElement.style.top = y + -30 + "px";
        spanElement.style.left = x + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=A02_EventInspector.js.map