document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');

    if (messageInput.value.trim() === '') return;

    const newMessage = document.createElement('div');
    newMessage.textContent = messageInput.value;

    // Check if the new message already exists in the message list
    if ([...messageList.children].some(msg => msg.textContent === newMessage.textContent)) {
        messageInput.value = '';
        return;
    }

    messageList.appendChild(newMessage);

    messageInput.value = '';
    messageList.scrollTop = messageList.scrollHeight;
});