// Speech-to-Text (STT) хэсэг
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'mn-MN';  // Монгол хэл

const startRecognitionBtn = document.getElementById('start-recognition');
const textOutput = document.getElementById('text-output');

// Яриаг хүлээн авах
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textOutput.textContent = transcript;  // Ярианы текстийг гаргах
};

startRecognitionBtn.addEventListener('click', () => {
    recognition.start();  // Яриаг хүлээн авах эхлэх
});

// Text-to-Speech (TTS) хэсэг
const startSpeechBtn = document.getElementById('start-speech');

// Текстийг дуугаар хэлэх
const textToSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'mn-MN';  // Монгол хэл
    window.speechSynthesis.speak(utterance);
};

startSpeechBtn.addEventListener('click', () => {
    const text = textOutput.textContent;
    if (text && text !== 'Яриаг хүлээн авах...') {
        textToSpeech(text);  // Текстийг дуугаар хэлүүлэх
    } else {
        alert("Бие даасан текст байхгүй байна.");
    }
});
