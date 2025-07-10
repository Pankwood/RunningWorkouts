// This file contains the JavaScript code for the website. 
// It handles interactivity, event listeners, and any dynamic behavior required on the webpage.

document.addEventListener('DOMContentLoaded', () => {

    const sections = Array.from(document.querySelectorAll("main > section.exercise"));

    sections.forEach((section, idx) => {
        section.addEventListener("click", function () {
            const nextSection = sections[(idx + 1) % sections.length];
            nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        section.addEventListener("touchend", function () {
            const nextSection = sections[(idx + 1) % sections.length];
            nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});