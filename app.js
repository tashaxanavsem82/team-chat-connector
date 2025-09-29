document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');

    if (messageInput.value.trim() === '') return;

    const newMessage = document.createElement('div');
    newMessage.textContent = messageInput.value;
    messageList.appendChild(newMessage);

    messageInput.value = '';
    messageList.scrollTop = messageList.scrollHeight;
});