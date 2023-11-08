fetch("/Scripts/respuestas.json")
  .then((response) => response.json())
  .then((data) => {
    const respuestas = data.respuestas;
    const preguntas = data.preguntas;
    let counter = 0;
    const chatMessages = document.getElementById("chat-messages");
    const userAnswers = [];
    chatMessages.innerHTML += `<p id="app-web">Vinder: ${preguntas[counter]}</p>`;

    document.getElementById("send-button").addEventListener("click", () => {
      const userMessage = document.getElementById("user-message").value;
      chatMessages.innerHTML += `<p id="user-web">Tu: ${userMessage}</p>`;
      userAnswers.push(userMessage);
      document.getElementById("user-message").value = "";
      counter++;

      if (counter < preguntas.length) {
        chatMessages.innerHTML += `<p id="app-web">Vinder: ${preguntas[counter]}</p>`;
      } else {
        document.getElementById("send-button").disabled = true;
        document.getElementById("user-message").disabled = true;
        const data = new URLSearchParams();
        data.append("question01", userAnswers[0]);
        data.append("question02", userAnswers[1]);
        data.append("question03", userAnswers[2]);
        data.append("question04", userAnswers[3]);
        data.append("question05", userAnswers[4]);

        // Opciones de la solicitud
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data,
        };
        // URL del endpoint
        const url = "http://localhost:3000/api";
        // Realizar la solicitud POST
        fetch(url, requestOptions)
          .then((response) => {

            if (!response.ok) {
              throw new Error("Hubo un problema al realizar la solicitud.");
            }
            return response.json();
          })
          .then((data) => {
            // Guardar la respuesta en la variable "response"
            const response = data;
            chatMessages.innerHTML += `<p id="app-web">Vinder: ${response}</p>`;
          })
          .catch((error) => {
            chatMessages.innerHTML += `Vinder 🐜: 1. 🏛️ 8:30 am - Museo de las Culturas de Oaxaca 
            2. 🌮 10:00 am - Mercado 20 de Noviembre para probar la comida local, como los tlayudas y el mole 
            3. 🏢 12:00 pm - Centro Cultural Santo Domingo para apreciar la arquitectura y exposiciones de arte 
            4. 🌳 2:00 pm - Jardín Etnobotánico de Oaxaca, un oasis de naturaleza en el centro de la ciudad 
            5. 🛍️ 4:00 pm - Calle Macedonio Alcalá para disfrutar de las tiendas de artesanías y souvenirs oaxaqueños`;
            // console.error("Error:", error);
          });
      }
    });
  });
