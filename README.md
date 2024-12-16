# Fitness Website - MERN Stack Gym Platform

A comprehensive gym website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, chatbot integration, and fitness resources. The platform aims to provide a seamless experience for users looking to transform their lifestyle through expert guidance and personalized programs.

## Features

- **User Authentication**
  - Secure signup and login functionality
  - Password encryption and user data protection
  - User profile management

- **Interactive Chatbot**
  - Dialogflow integration for intelligent responses
  - Exercise recommendations
  - Instant fitness guidance and support
  - Real-time user interaction

- **Responsive Design**
  - Modern and clean user interface
  - Mobile-friendly layout
  - Intuitive navigation

- **Content Management**
  - Class schedules
  - Pricing information
  - Fitness programs
  - Trainer profiles

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- NPM or Yarn
- Dialogflow account for chatbot integration

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Divjyo15/Fitnesswebsite.git
cd Fitnesswebsite
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Set up environment variables:
Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
DIALOGFLOW_PROJECT_ID=your_dialogflow_project_id
GOOGLE_APPLICATION_CREDENTIALS=path_to_your_dialogflow_credentials.json
```

## Configuration

### Database Setup
1. Ensure MongoDB is running on your system
2. Create a new database for the project
3. Update the MongoDB connection string in your `.env` file

### Dialogflow Setup
1. Create a new project in Dialogflow
2. Set up intents for fitness-related queries
3. Download the service account credentials
4. Place the credentials file in the backend directory
5. Update the environment variables with the correct path

## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

3. Access the application at `http://localhost:3000`

## Project Structure

```
fitness-website/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── styles/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
└── README.md
```

## Technologies Used

- **Frontend**
  - React.js
  - CSS3
  - Axios for API calls
  - React Router for navigation

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - JWT for authentication
  - Dialogflow for chatbot
Screenshots
Here is a preview of the website interface:

![Screenshot (29)](https://github.com/user-attachments/assets/9912bf75-e090-45e8-befc-0fc184803a80)

![Screenshot (30)~2](https://github.com/user-attachments/assets/8f63583c-1c94-43dc-a9fe-802eec7eace3)

![Screenshot (31)~2](https://github.com/user-attachments/assets/5833130d-9a78-41b5-bd9b-0fed0c5266ee)




