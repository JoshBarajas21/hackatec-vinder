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
router.get("/", async function (req, res, next) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Give me a list of three North America countries" }],
  });
  res.json(completion.data.choices[0]);
});
  
module.exports = router;
