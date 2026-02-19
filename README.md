# 👋 Hey! Welcome to AURA Events

![MERN Stack](https://img.shields.io/badge/MERN-Stack-RE?style=for-the-badge&logo=react&logoColor=61DAFB&color=20232a)
![Rest API](https://img.shields.io/badge/Rest_API-Integration-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Private-red?style=for-the-badge)

> *Bridging the gap between clients and premium event experiences.*

---

## 🛠️ Things I Code With (Tech Stack)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

---

## 📖 About the Project

**AURA Events and Weddings** is a full-stack Event Management System. It features a robust backend for secure data handling and a responsive React frontend for an immersive user experience.
<details>
### 📂 Directory Structure
```text
EVENTS_MANAGEMENT/
├── backend/                 # SERVER-SIDE (API & Database)
│   ├── controller/          # Logic for handling API requests
│   ├── database/            # Database connection logic
│   ├── models/              # Mongoose Schemas (Data Design)
│   ├── router/              # API Route definitions
│   ├── app.js               # Express app configuration
│   ├── server.js            # Server entry point
│   ├── .env                 # Backend environment variables
│   └── package.json         # Backend dependencies
│
└── frontend/                # CLIENT-SIDE (User Interface)
    ├── public/              # Static assets
    ├── src/
    │   ├── components/      # Reusable UI components (Navbar, Hero, etc.)
    │   ├── App.jsx          # Main application component
    │   ├── main.jsx         # DOM entry point
    │   └── App.css          # Global styling
    ├── .env                 # Frontend environment variables
    ├── vite.config.js       # Vite build configuration
    └── package.json         # Frontend dependencies
    <details>
🚀 Quick Start GuidePrerequisitesNode.js (v16+)MongoDB (Local or Atlas)1️⃣ Server Setup (Backend)Bashcd backend
npm install

npm run dev
2️⃣ Client Setup (Frontend)Bash# Open new terminal
cd frontend
npm install

🔐 Environment Variables
To run this project, you will need to add the following environment variables to your .env files.

1. Backend Environment (backend/.env)
Create a .env file inside the backend folder with the following keys:
PORT=
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
FRONTEND_URL=
PORT: The port the Express server runs on.
MONGO_URI: Your MongoDB connection string.
FRONTEND_URL: Used for CORS to allow the frontend to talk to the backend.

2. Frontend Environment (frontend/.env)
Create a .env file inside the frontend folder with the following key:
VITE_BACKEND_URL=
VITE_BACKEND_URL: Points to your backend server so Axios knows where to send API requests.

🚀 Quick Start GuidePrerequisitesNode.js (v16+)MongoDB (Local or Atlas)
1️⃣ Server Setup (Backend)
cd backend
npm install
npm run dev
2️⃣ Client Setup (Frontend)
Open new terminal
cd frontend
npm install
npm run dev
The App will run at: http://localhost:5173

## 🔗 API Reference
POST /api/v1/message/send

### 📩 Send Message
Submit a new inquiry from the contact form.

- **URL:** `/api/v1/message/send`
- **Method:** `POST`
- **Content-Type:** `application/json`

#### Request Parameters

| Parameter | Type     | Required | Description                                      |
| :-------- | :------- | :------- | :----------------------------------------------- |
| `name`    | `string` | **Yes**  | The full name of the client.                     |
| `email`   | `string` | **Yes**  | The client's contact email address.              |
| `subject` | `string` | **Yes**  | The category of the event (e.g., "Wedding").     |
| `message` | `string` | **Yes**  | The detailed text of the inquiry.                |

#### 💡 Example Request Body

```json
{
  "name": "Pratyusha Sagar",
  "email": "pratyusha@example.com",
  "subject": "Wedding Planning",
  "message": "i need a event planner for wedding."
}
