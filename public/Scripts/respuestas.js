
fetch('/Scripts/respuestas.json')
.then(response => response.json())
.then(data => {
  const respuestas = data.respuestas;
  document.getElementById('send-button').addEventListener('click', () => {
    const userMessage = document.getElementById('user-message').value;
    document.getElementById('user-message').value = '';

    const respuesta = respuestas.find(item => item.pregunta.toLowerCase()==userMessage.toLowerCase()) ;
    if (respuesta) {
      
      const chatMessages = document.getElementById('chat-messages');
      chatMessages.innerHTML += `<p id="user-web">Tu: ${userMessage}</p>`;
      chatMessages.innerHTML += `<p id="app-web">Vinder: ${respuesta.respuesta}</p>`;
    } else {
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.innerHTML += `<p id="euser-web">Tu: ${userMessage}</p>`;
        chatMessages.innerHTML += `<p id="eapp-web">Vinder: No entiendo la pregunta.</p>`;
      }
    });
  })






