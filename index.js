document.addEventListener('DOMContentLoaded', () => {
    const chatDisplay = document.getElementById('chat-display');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Function to append a message to the chat display
    function appendMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        
        if (sender === 'user') {
            messageDiv.classList.add('user-message');
        } else {
            messageDiv.classList.add('bot-message');
        }

        const p = document.createElement('p');
        p.textContent = text;
        messageDiv.appendChild(p);
        
        chatDisplay.appendChild(messageDiv);

        // Scroll to the bottom to see the latest message
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    // Function to get a simple bot response
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();

        if (message.includes('hello') || message.includes('hi')) {
            return "Hello there! How can I help you today?";
        } else if (message.includes('how are you')) {
            return "I'm a bot, but I'm functioning perfectly! Thanks for asking.";
        } else if (message.includes('name')) {
            return "I am a simple JavaScript Chatbot.";
        } else if (message.includes('bye')) {
            return "Goodbye! Have a great day!";
        } else if (message.includes('javascript') || message.includes('js')) {
            return "JavaScript is a powerful scripting language used for web development.";
        } else {
            // Default response if no keyword is matched
            return "I'm sorry, I don't understand that yet. Can you try asking something else?";
        }
    }

    // Function to handle sending the message
    function sendMessage() {
        const userText = userInput.value.trim();

        if (userText === '') {
            return; // Do nothing if input is empty
        }

        // 1. Display User Message
        appendMessage('user', userText);

        // 2. Clear input field
        userInput.value = '';

        // 3. Get and Display Bot Response (with a slight delay for realism)
        setTimeout(() => {
            const botResponse = getBotResponse(userText);
            appendMessage('bot', botResponse);
        }, 500); // 500ms delay
    }

    // Event listener for the Send button
    sendButton.addEventListener('click', sendMessage);

    // Event listener for the Enter key on the input field
    userInput.addEventListener('keypress', (event) => {
        // Check if the key pressed is 'Enter' (key code 13)
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action (e.g., submitting a form)
            sendMessage();
        }
    });
});