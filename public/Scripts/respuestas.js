fetch("/Scripts/respuestas.json")
  .then((response) => response.json())
  .then((data) => {
    const respuestas = data.respuestas;
    const preguntas = data.preguntas;
    let counter = 0;

    const chatBox = document.getElementById("chat-box"); //Agregada recientemente
    const chatMessages = document.getElementById("chat-messages");
    const userAnswers = [];
    chatMessages.innerHTML += `<p id="app-web">Vinder: ${preguntas[counter]}</p>`;

    //Agregado recientemente
    const btn = document.getElementById("send-button");
    const input = document.getElementById("user-message");

    input.addEventListener("input", function () {
      if (input.value.trim() !== "" && input.value.length > 5) {
        btn.removeAttribute("disabled");
      } else {
        btn.setAttribute("disabled", "disabled");
      }
    });
    // Agregado recientemente

    btn.addEventListener("click", () => {
      btn.setAttribute("disabled", "disabled");
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
        const url = "http://127.0.0.1:3000/api";
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
            console.error("Error:", error);
          });
      }
    });
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        btn.setAttribute("disabled", "disabled");
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
          const url = "http://127.0.0.1:3000/api";
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
              console.error("Error:", error);
            });
        }
      }
    });
  });
