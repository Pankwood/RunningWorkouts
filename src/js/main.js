// This file contains the JavaScript code for the website. 
// It handles interactivity, event listeners, and any dynamic behavior required on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const sections = Array.from(document.querySelectorAll("main > section.exercise"));

    /*sections.forEach((section, idx) => {
        // For desktop click
        section.addEventListener("click", function () {
            const nextSection = sections[(idx + 1) % sections.length];
            nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        // For mobile quick tap
        let touchStartTime = 0;
        section.addEventListener("touchstart", function () {
            touchStartTime = Date.now();
        });
        section.addEventListener("touchend", function (e) {
            const touchDuration = Date.now() - touchStartTime;
            if (touchDuration < 200) { // quick tap threshold in ms
                e.preventDefault();
                const nextSection = sections[(idx + 1) % sections.length];
                nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            // else: do nothing, allow default scroll/behavior
        });
    });*/
});