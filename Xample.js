
// Select the elements
let element = document.getElementById("text");
let startBtn = document.getElementById("start-btn");

// Create a new SpeechRecognition instance (supports Chrome and Edge)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

// Set the language to British English
recognition.lang = "en-GB";

// Set continuous mode to true so it keeps listening
recognition.continuous = true;

// Start recognition when the button is clicked
startBtn.onclick = () => {
    recognition.start();
    element.innerText = "Listening...";
    startBtn.innerText = "Listening...";
    startBtn.disabled = true; // Disable the button while listening
};

// Handle the recognition result event
recognition.onresult = (event) => {
    for (const result of event.results) {
        element.innerText = result[0].transcript;
    }
    startBtn.innerText = "Start Listening";
    startBtn.disabled = false;
};

// Optional: Handle errors (e.g., no microphone access)
recognition.onerror = (event) => {
    console.error("Speech Recognition Error:", event.error);
    element.innerText = "Error: " + event.error;
    startBtn.innerText = "Start Listening";
    startBtn.disabled = false;
};








// =============================================================================
 // Select the h1 element by its ID
// let element = document.getElementById("text");

// // Create a new SpeechRecognition instance (supports Chrome and Edge)
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

// // Set the language to British English
// recognition.lang = "en-GB";

// // Set continuous mode to true so it keeps listening
// recognition.continuous = true;

// // Start recognition when the document is clicked
// document.onclick = () => recognition.start();

// // Handle the recognition result event
// recognition.onresult = (event) => {
//     for (const result of event.results) {
//         // Update the h1 element's text with the recognized speech
//         element.innerText = result[0].transcript;
//     }
// };

// // Optional: Handle errors (e.g., no microphone access)
// recognition.onerror = (event) => {
//     console.error("Speech Recognition Error:", event.error);
//     element.innerText = "Error: " + event.error;
// };

// 
