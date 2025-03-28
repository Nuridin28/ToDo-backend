ToDo App Backend
This project is a REST API for managing a ToDo list with authentication and authorization using JWT tokens.
Features
- User registration and authentication
- Create, update, delete, and retrieve tasks
- Filter tasks by status (To Do, In Progress, Done, Trash)
- Protected routes using JWT

Technologies
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt.js (password hashing)

Installation and Setup
1. Clone the repository
git clone https://github.com/your-repo/todo-app-backend.git
cd todo-app-backend

2. Install dependencies
npm install

3. Create a .env file and add environment variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Start the server
npm start 
