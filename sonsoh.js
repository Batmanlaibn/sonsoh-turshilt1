// Speech-to-Text (STT) хэсэг
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'mn-MN';  // Монгол хэл

const startRecognitionBtn = document.getElementById('start-recognition');
const textOutput = document.getElementById('text-output');

// Яриаг хүлээн авах
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textOutput.textContent = transcript;  // Ярианы текстийг дэлгэц дээр харуулах
};

// Хэрэв яриаг дуусгаж хүлээж авах үед алдаа гарвал мэдэгдэж болно
recognition.onerror = (event) => {
    textOutput.textContent = "Алдаа гарлаа. Дахин оролдоно уу.";
};

startRecognitionBtn.addEventListener('click', () => {
    textOutput.textContent = "Яриаг хүлээн авч байна...";
    recognition.start();  // Яриаг хүлээн авах эхлэх
});
