var express = require("express");
var router = express.Router();

const { Configuration, OpenAIApi } = require('openai')

let dotenv = require("dotenv")

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)


/* GET api */
router.post("/", async function (req, res, next) {
  const {
    question01, 
    question02, 
    question03, 
    question04, 
    question05, 
  } = req.body;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `
    Estas en la ciudad de Oaxaca, y con base en la respuesta a estas preguntas:
    1. ¿Cuantos años tienes?
    Respuesta: ${question01}
    2. ¿Quienes viajan contigo y que edad tiene cada uno de tus acompañantes?
    Respuesta: ${question02}
    3. ¿Que experiencias te gustaria probar?
    Respuesta: ${question03}
    4. ¿Cual es tu presupuesto?
    Respuesta: ${question04}
    5. ¿Que hora es?
    Respuesta: ${question05}
    Elabora una ruta personalizada para un paseo en oaxaca dando como resultado una lista de lugares. 
    Asegurate de que la lista contemple la hora, 
    de modo que el número de actividades sea alcanzable antes de las 20 horas.
    ` }],
  });
  res.json(completion.data.choices[0].message.content);
});
  
module.exports = router;
