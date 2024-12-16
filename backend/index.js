
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();
const { sendToDialogflow } = require('./dialogflow/dialogflowConfig.js');

const app = express();
const userRoute = require("./routes/userroutes");
const mongoose = require("mongoose");
const { connectdb } = require("./connect.js");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use((req, res, next) => {
   res.locals.user = req.user || null;
   next();
});
app.use("/user", userRoute);

app.post('/api/chat', async (req, res) => {
   const { message } = req.body;  // Extract message from request body

   if (!message) {
       return res.status(400).json({ error: 'Message is required' });
   }

   try {
       const sessionId = uuidv4();  // Generate unique session ID for each conversation
       const dialogflowResponse = await sendToDialogflow(message, sessionId);
       
       // Extract the response text from Dialogflow
       const reply = dialogflowResponse.fulfillmentText || 'Sorry, I am having trouble understanding that.';

       // Extract quick replies if they exist in custom payload
       let quickReplies = [];
       dialogflowResponse.fulfillmentMessages.forEach(msg => {
           if (msg.payload && msg.payload.fields.quickReplies) {
               quickReplies = msg.payload.fields.quickReplies.listValue.values.map(val => val.stringValue);
           }
       });

       res.json({ reply, quickReplies });  // Send reply and quick replies back to frontend
   } catch (error) {
       console.error('Error communicating with Dialogflow:', error);
       res.status(500).json({ error: 'Internal server error' });
   }
});
 




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
connectdb();

