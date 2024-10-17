# Task Management API


## This API allows users to securely manage their tasks using JWT (JSON Web Token)-based authentication. Features include creating, listing, updating, and deleting tasks. The API also provides user registration and login endpoints. The database used is SQLite, and the project follows RESTful API development best practices.

## Features

**User Registration**: Users can register by providing a username and password.
**User Authentication**: Users can log in and receive a JWT token to access the API's functionalities.
**Task Management**: Authenticated users can create, list, update, and delete tasks.
**Route Protection**: Only authenticated users can access task-related endpoints.

## 🛠 Technologies Used

**Node.js**: JavaScript runtime platform for server development.
**Express**: Framework for route creation and HTTP request handling.
**JWT (jsonwebtoken)**: Token-based authentication for secure access.
**SQLite3**: Lightweight database for storing tasks and users.
**Sequelize**: ORM to interact with the database.
**bcryptjs**: Password hashing for user security.
**dotenv**: Management of environment variables.
**Nodemon**: Tool for auto-restarting the server during development.

## 📁 Project Structure

````bash
Copiar código
project-root/
│
├── src/
│   ├── controllers/        # API endpoint logic
│   ├── models/             # Data models (Tasks and Users)
│   ├── routes/             # API routes
│   ├── middlewares/        # JWT authentication middleware
│   ├── database/           # SQLite database setup and Sequelize configuration
│   └── app.js              # Main application file
│
├── .env                    # Environment variables (e.g., JWT_SECRET)
├── .gitignore               # Files and folders to be ignored by Git
├── README.md                # Project documentation
├── package.json             # Project dependencies and scripts
└── package-lock.json        # Dependency lockfile
````
## 🚀 Setup

## 1. Clone the Repository
bash
Copiar código
git clone https://github.com/your-repository/task-api.git
cd task-api

## 2. Install Dependencies
Run the following command to install all the required dependencies:

bash
Copiar código
npm install

## 3. Configure Environment Variables
Create a .env file in the root of your project and include the following:

makefile
Copiar código
PORT=3000
JWT_SECRET=your_secret_key
DATABASE_URL=./src/database/tasks.db

## 4. Start the Server
bash
Copiar código
npm start
By default, the server will run at http://localhost:3000.

## 🔗 API Endpoints

User Endpoints
POST /register: Register a new user.

Request body:

json
Copiar código
{
  "username": "your_username",
  "password": "your_password"
}
POST /login: Authenticate a user and return a JWT token.

Request body:

json
Copiar código
{
  "username": "your_username",
  "password": "your_password"
}
Task Endpoints (Authenticated)
GET /tasks: List all tasks for the authenticated user.

POST /tasks: Create a new task.

Request body:

json
Copiar código
{
  "title": "Task Title"
}
PUT /tasks/
: Update an existing task.

Request body:

json
Copiar código
{
  "title": "Updated Task Title"
}
DELETE /tasks/
: Delete a task.

## 🤝 Contributing

Feel free to submit issues and pull requests. Any contribution to improving the project is welcome!

## 📜 License

This project is licensed under the MIT License.