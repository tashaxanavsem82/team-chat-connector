document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');

    if (messageInput.value.trim() === '') return;

    const newMessage = document.createElement('div');
    newMessage.textContent = messageInput.value;

    // Check for duplicate messages in the message list, normalizing whitespace and ignoring case sensitivity
    const messageExists = [...messageList.children].some(msg => msg.textContent.trim().toLowerCase() === newMessage.textContent.trim().toLowerCase());
    if (messageExists) {
        messageInput.value = '';
        return;
    }

    messageList.appendChild(newMessage);

    messageInput.value = '';
    messageList.scrollTop = messageList.scrollHeight;
});