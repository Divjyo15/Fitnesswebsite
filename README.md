Gym Website with Chatbot Integration

This project is a gym website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website includes a chatbot for interactive user communication, allowing users to inquire about gym services, sign up, log in, and more. Dialogflow is used for the chatbot integration, making the interaction more dynamic.

Table of Contents
Prerequisites
Installation
Configuration
Running the Application
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 14 or higher)
MongoDB (locally or use a MongoDB Atlas account)
npm (Node Package Manager)
Dialogflow account for chatbot integration
Git
Installation
Follow these steps to set up the project:

Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/Divjyo15/Fitnesswebsite.git
Navigate into the project directory:

bash
Copy code
cd Fitnesswebsite
Install the required dependencies for both frontend and backend:

For the backend, navigate to the backend folder and run:

bash
Copy code
cd backend
npm install
For the frontend, navigate to the frontend folder and run:

bash
Copy code
cd frontend
npm install
Configuration
Backend Configuration:

Ensure MongoDB is set up and running locally or through MongoDB Atlas.
Update the .env file in the backend folder with your MongoDB URI.
Dialogflow Configuration:

Set up a Dialogflow agent and get the credentials (JSON key) to integrate with the backend.
Add the Dialogflow credentials to the backend as specified in the backend/.env file.
Frontend Configuration:

Make sure to configure API endpoints in the frontend code to point to your local or hosted backend server.
Running the Application
Start the Backend:

Navigate to the backend folder and run:

bash
Copy code
npm start
Start the Frontend:

Navigate to the frontend folder and run:

bash
Copy code
npm start
This will start the React development server. The frontend should now be accessible on http://localhost:3000.

Features
Chatbot Integration: Interact with the chatbot on the gym website for inquiries, bookings, and more. Powered by Dialogflow.
Sign Up & Login: Users can register, log in, and interact with the website content.
MERN Stack: The application is built using MongoDB, Express.js, React.js, and Node.js for full-stack development.
Screenshot
Below is a screenshot of the Hero Section,Signup and chatbot interaction interface:


![Screenshot (30)~2](https://github.com/user-attachments/assets/ca7bdfcf-29c5-4e3e-8e30-a360fcfb2dfc)
