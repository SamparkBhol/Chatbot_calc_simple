
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');

    if (userInput.trim() === '') return;

    const userMessage = document.createElement('div');
    userMessage.textContent = 'You: ' + userInput;
    chatbox.appendChild(userMessage);

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: userInput })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = document.createElement('div');
        botMessage.textContent = 'Bot: ' + data.response;
        chatbox.appendChild(botMessage);
    });

    document.getElementById('userInput').value = '';
}
