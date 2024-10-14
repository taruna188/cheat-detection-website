
const cheatLog = document.querySelector("#detection-log");

function logDetection(event, description) {
    const logMessage = `Detected ${event}: ${description}`;
    const logElem = document.createElement("div");
    
    console.info(logMessage);
    
    logElem.textContent = logMessage;
    
    cheatLog.append(logElem);
}

window.addEventListener("blur", () => {
    logDetection("blur", "User focused outside of the website");
});

window.addEventListener("focus", () => {
    logDetection("focus", "User focused on the website");
});

window.addEventListener("mouseleave", () => {
    logDetection("mouseleave", "User's cursor left the website");
});

document.addEventListener("visibilitychange", () => {
    logDetection("visibilitychange", "User switched to another tab, website or application from the current website");
});