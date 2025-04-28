Currency Converter Website using ReactJS and Material-UI


 # This is a simple currency converter web application built using ReactJS and styled with Material-UI. It allows users to convert currency values from one currency to 
   another, providing a user-friendly interface with a modern design.

 # Features
   Currency Conversion: Users can select source and target currencies and enter the amount they want to convert. The app provides real-time conversion rates using a 
   currency exchange API.

  Dynamic User Interface: The application features a dynamic and responsive user interface, thanks to the use of ReactJS. It adapts to various screen sizes and provides an 
  optimal user experience.

  Material-UI Styling: The application is styled using Material-UI components, offering a clean and visually appealing design. Material-UI provides a set of pre-designed 
  React components that enhance the overall look and feel of the application.


  📦 Mini Web Application
Overview
This mini project consists of two main tasks combined into a single responsive web application:

Products Price List

Terms Page Clone (from https://online.123fakturera.se/terms/)

The application is fully responsive and optimized for Desktop, Laptop, Tablet, and Mobile devices.

🔹 Task 1: Products Price List
In the Products Price List section, I built a web application based on the provided UI designs. Here are the main features:

Header with Hamburger Menu and Drawer

Product List with Test Data (20 items)

Smooth Scrolling inside the products list

Edit Functionality via Ellipsis Icon

Save/Cancel Buttons after editing

Search Filters for Article No and Product Name

Responsive Columns based on device size (Desktop, Tablet, Mobile)

🔹 Task 2: Terms Page Clone
Inside the drawer, a "Terms" menu item is available:

Navigate to the cloned Terms page.

Language Switcher in the header (English 🇬🇧 and Svenska 🇸🇪)

Language data pulled from PostgreSQL database

Smooth scrolling and mobile-first responsive layout

⚙️ Tech Stack
Frontend:
Vite.js + React.js (v19.0.0)

Tailwind CSS (v4.1.4) — for modern responsive styling

Lucide React Icons (v0.503.0) — lightweight icon set

React Router DOM (v7.5.2) — for page routing

Axios (v1.9.0) — for API calls

Backend:
Node.js — JavaScript runtime

Fastify (v5.3.2) — Fast backend framework

Fastify CORS (v11.0.1) — Cross-Origin Resource Sharing

Fastify Helmet (v13.0.1) — Security headers

Sequelize ORM (v6.37.7) — for database models

PostgreSQL — for storing data

🛠️ Project Setup Instructions
Follow these steps to run the project locally:

1. Clone the repository
bash
Copy
Edit
git clone <repository-url>
cd <project-folder>
2. Install Frontend Dependencies
bash
Copy
Edit
cd frontend
npm install
3. Install Backend Dependencies
bash
Copy
Edit
cd backend
npm install
4. Environment Variables
Create a .env file inside the backend folder with necessary database credentials:

bash
Copy
Edit
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_db_name
DB_PORT=5432
5. Run Backend Server
bash
Copy
Edit
npm run dev
6. Run Frontend Development Server
bash
Copy
Edit
npm run dev
Frontend: http://localhost:5173

Backend: http://localhost:3000

📦 Frontend Dependencies

Package	Version	Purpose
react	^19.0.0	Core React library
react-dom	^19.0.0	React DOM rendering
react-router-dom	^7.5.2	Routing and navigation
axios	^1.9.0	Promise-based HTTP client
tailwindcss	^4.1.4	Utility-first CSS framework
@tailwindcss/vite	^4.1.4	Tailwind integration with Vite
lucide-react	^0.503.0	Lightweight icons for React
Frontend Dev Dependencies:

Package	Version
vite	^6.3.1
eslint	^9.22.0
@vitejs/plugin-react	^4.3.4
@types/react	^19.0.10
@types/react-dom	^19.0.4
eslint-plugin-react-hooks	^5.2.0
eslint-plugin-react-refresh	^0.4.19
globals	^16.0.0
📦 Backend Dependencies

Package	Version	Purpose
fastify	^5.3.2	Web server framework
@fastify/cors	^11.0.1	Enable CORS
@fastify/helmet	^13.0.1	Security enhancements
@fastify/static	^8.1.1	Serve static files
sequelize	^6.37.7	ORM for database interaction
pg	^8.15.5	PostgreSQL database driver
pg-hstore	^2.3.4	PostgreSQL hstore support
dotenv	^16.5.0	Manage environment variables
Backend Dev Dependencies:

Package	Version
nodemon	^3.1.10
📁 Folder Structure
pgsql
Copy
Edit
project-folder/
│
├── frontend/              # Vite + React App
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/               # Fastify Server + Sequelize ORM
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── README.md
✨ Key Highlights
Responsive Drawer and Hamburger Menu

Editable Products Table with Save/Cancel

Search Functionality by Article No and Product

Dynamic Columns based on screen size

Language switcher with DB-driven translations

Fully mobile-first responsive UI

Backend API secured with Helmet and CORS policies

📢 Notes
The application uses PostgreSQL as the main database.

All user edits are dynamically saved to the database.

Both frontend and backend use latest stable dependency versions.

📚 License
This project was developed as part of a skill test SOW (Statement of Work) and is intended for demonstration purposes only.

✅ Project Status: Completed
📩 Final Tip
Always remember to secure environment variables before deploying live 🚀.

Make sure CORS is correctly configured if frontend and backend are hosted separately.

Thank you! 🙌

