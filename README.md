
#I did this 
<!-- Ryan@gmail.com
Ryan0925@


Ram@gmail.com
Ram@0925

priya@gmail.com
Priya@0925

admin@hyperverge.co
Admin0925@ -->
# Project Setup Guide

This guide provides instructions for setting up both the **backend** and **frontend** of the project.

## Prerequisites

Before setting up the backend and frontend, ensure that you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager, typically installed with Node.js)
- [Git](https://git-scm.com/)
- A code editor such as [VSCode](https://code.visualstudio.com/)
- MongoDB
## Folder Structure
/project-folder
  ├── /backend
  └── /frontend

## Backend Setup (Node.js with Express)
 # 1. Navigate to the Backend Folder
    cd /project-folder/backend
 # 2. Install Dependencies
    Run the following command to install the backend dependencies:

    npm install
 # 3. Set up Environment Variables
    Create a .env file in the backend folder to store your environment variables. Example .env file:

        
 #  Run the following command to start the backend server:

    npm run dev
#    Your backend server should now be running on http://localhost:3000.

#   5. MongoDB Setup
Make sure that MongoDB is running locally on your machine, or you can use a cloud service like MongoDB Atlas.

##  Frontend Setup (React.js)
# 1. Navigate to the Frontend Folder

# cd /project-folder/frontend
# 2. Install Dependencies
    Run the following command to install the frontend dependencies:

    npm install
# 

     
## 4. Start the Frontend Development Server
    Run the following command to start the frontend server:


    npm run dev
    Your React app should now be running on localhost.

``Backend and Frontend Communication
Make sure your frontend is correctly making requests to the backend API. In your React app, you can use axios or fetch to interact with the backend.
``
