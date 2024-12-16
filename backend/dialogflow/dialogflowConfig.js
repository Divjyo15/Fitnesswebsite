 
const dialogflow = require('@google-cloud/dialogflow');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const sessionClient = new dialogflow.SessionsClient({
    credentials: {
        client_email: process.env.DIALOGFLOW_CLIENT_EMAIL,
        private_key: process.env.DIALOGFLOW_PRIVATE_KEY.replace(/\\n/g, '\n')
    }
});

async function sendToDialogflow(query, sessionId = uuidv4()) {
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
    
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
                languageCode: 'en-US',
            },
        },
    };

    const responses = await sessionClient.detectIntent(request);
    return responses[0].queryResult;
}

module.exports = { sendToDialogflow, uuidv4 };
