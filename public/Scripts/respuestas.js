
fetch('/Scripts/respuestas.json')
.then(response => response.json())
.then(data => {
  const respuestas = data.respuestas;
  const preguntas = data.preguntas;
  let counter = 0;
  const chatMessages = document.getElementById('chat-messages'); 
  const userAnswers = []
  chatMessages.innerHTML += `<p id="app-web">Vinder: ${preguntas[counter]}</p>`;

  document.getElementById('send-button').addEventListener('click', () => {
    const userMessage = document.getElementById('user-message').value;
    chatMessages.innerHTML += `<p id="user-web">Tu: ${userMessage}</p>`;
    userAnswers.push(userMessage);
    document.getElementById('user-message').value = '';
    counter++;

    if (counter < preguntas.length ){
      chatMessages.innerHTML += `<p id="app-web">Vinder: ${preguntas[counter]}</p>`;

    }
    else {
      document.getElementById('send-button').disabled = true;
      document.getElementById('user-message').disabled = true;
    }

    // const respuesta = respuestas.find(item => item.pregunta.toLowerCase()==userMessage.toLowerCase()) ;
    // if (respuesta) {
      
    //   const chatMessages = document.getElementById('chat-messages');
    //   chatMessages.innerHTML += `<p id="user-web">Tu: ${userMessage}</p>`;
    //   chatMessages.innerHTML += `<p id="app-web">Vinder: ${respuesta.respuesta}</p>`;
    // } else {
    //     const chatMessages = document.getElementById('chat-messages');
    //     chatMessages.innerHTML += `<p id="euser-web">Tu: ${userMessage}</p>`;
    //     chatMessages.innerHTML += `<p id="eapp-web">Vinder: No entiendo la pregunta.</p>`;
    //   }
    });
  })






