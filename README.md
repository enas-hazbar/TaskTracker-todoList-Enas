# TaskTracker Todo List App

## 📄 Description
The **ToDo List App** is a simple task management application that helps users organize their daily tasks. You can add, edit, and delete tasks easily. The app also features a progress indicator for each task, so you can see how much of the task is completed.

## ✨ Features
- **Add Tasks:** Users can add new tasks with a title.
- **Edit Tasks:** Users can update the title and progress of tasks.
- **Delete Tasks:** Users can remove tasks they no longer need.
- **Progress Indicator:** Shows the progress of each task with a bar.
- **Task Status:** Automatically turns the status indicator green when the task progress reaches 100%.
- **User Authentication:** Users can sign up, log in, and log out securely.


## 🛠 Technologies Used
- **Frontend:** React (JavaScript)
- **Backend:** Node.js
- **Database:** PostgreSQL
- **Styling:** HTML, CSS

## 🚀 How to Run the Project

1. **Clone the repository:**
   git clone https://github.com/enas-hazbar/TaskTracker-todoList-Enas.git

2. **Install the dependencies:**
    npm install

3.  **Set up PostgreSQL Database:**

- Before running the project, make sure you have PostgreSQL installed and running on your machine. You will need to create a database for this project.

- Create a new database in PostgreSQL.
- Note down the username, password, host, port, and database name as you will need to set these in the environment files.

4. **Set up Environment Variables:**

- You need to create .env files in both the client and server directories to store the environment variables.

- **In the server directory, create a .env file with the following content:**
 - <username> :<password> @ <host> : <port>
- **In the client directory, create a .env file with the following content:**

- REACT_APP_SERVERURL=http://localhost:8000

- Replace <username>, <password>, <host>, <port>, and <database_name> with your actual PostgreSQL credentials.

5. **Start the backend server:**
    npm run server

6.  **Start the React app:**
    npm start

7.  **Open your browser and visit:**
    http://localhost:3000


## 📂 Project Structure
- **client/** - Contains the frontend React application.
- **server/** - Contains the backend Node.js server and API routes.
- **database/** - PostgreSQL setup for storing tasks.
