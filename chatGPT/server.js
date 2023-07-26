const express = require('express');
require("dotenv").config();
const axios = require("axios");


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: process.env.ORGNIZATION_ID,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const app = express();

app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

  // Command line input
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const MODEL = "gpt-3.5-turbo";

let message_id;
const askQuestion = ()=>{rl.question('Enter the question: ', (question) => {
    openai.createChatCompletion(
      {
        model:MODEL,
        messages:[{role: "system", content: "You are a helpful assistant."},{role:"user", content:question}]
      }
    ).then(res=>{console.log(res?.data?.choices[0]);
    
    askQuestion();
    }).catch(err=>console.log("ERROR:",err));
   });}

askQuestion();

  });


