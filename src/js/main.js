// This file contains the JavaScript code for the website. 
// It handles interactivity, event listeners, and any dynamic behavior required on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Example of adding an event listener to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});