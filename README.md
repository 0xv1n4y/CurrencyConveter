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


# \ud83d\udce6 Mini Web Application

# 📄 Mini App - Price List & Terms Page Clone

---

## 📋 Project Overview

This mini app contains two main functionalities based on the provided SOW:

1. **Products Price List**: A responsive web page showing a price list of 20 test products.
2. **Terms Page Clone**: A responsive clone of https://online.123fakturera.se/terms/ with full language support (English and Svenska).

Both modules are fully responsive across desktop, tablet, and mobile devices.

---

## 🚀 Tech Stack

- **Frontend**: Vite + React.js
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React Icons
- **API Communication**: Axios
- **Backend**: Node.js + Fastify
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Environment Variables Management**: dotenv

---

## 🎨 Frontend Features

- Responsive header with hamburger menu (Drawer functionality).
- Smooth scrolling behavior across all devices.
- Search functionality by "Article No" and "Product" fields.
- Editable product list rows with Save and Cancel options.
- Dynamic responsiveness for Desktop, Tablet, and Mobile devices.
- Routing between Price List and Terms pages.
- Language switcher with English and Svenska support (data pulled from DB).

### 📁 Frontend Project Structure

```plaintext
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🛠️ Backend Features

- Fastify server setup on port `3004`.
- REST APIs to fetch and update Products and Terms data.
- Database integration using PostgreSQL.
- Sequelize ORM for model management.
- Environment variable management via `.env`.
- CORS enabled with security headers using `@fastify/helmet`.

### 📁 Backend Project Structure

```plaintext
backend/
├── config/
│   └── db.js
├── models/
│   ├── index.js
│   ├── product.model.js
│   └── terms.model.js
├── routes/
│   ├── product.routes.js
│   └── terms.routes.js
├── .env
├── package.json
├── server.js
└── README.md
```

### 🌍 .env Example

```bash
PORT=3004
DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_PORT=5432
```

---

## 📦 Frontend Dependencies

| Package              | Version     | Purpose                                   |
|----------------------|-------------|-------------------------------------------|
| react                | ^19.0.0     | Core React library                       |
| react-dom            | ^19.0.0     | React DOM rendering                      |
| react-router-dom     | ^7.5.2      | Routing and navigation                   |
| axios                | ^1.9.0      | Promise-based HTTP client                |
| tailwindcss          | ^4.1.4      | Utility-first CSS framework              |
| @tailwindcss/vite    | ^4.1.4      | Tailwind integration with Vite           |
| lucide-react         | ^0.503.0    | Lightweight icons for React              |

### 📦 Frontend Dev Dependencies

| Package                  | Version     |
|---------------------------|-------------|
| vite                      | ^6.3.1       |
| eslint                    | ^9.22.0      |
| @vitejs/plugin-react       | ^4.3.4       |
| @types/react              | ^19.0.10     |
| @types/react-dom          | ^19.0.4      |
| eslint-plugin-react-hooks | ^5.2.0       |
| eslint-plugin-react-refresh | ^0.4.19   |
| globals                   | ^16.0.0      |

---

## 📦 Backend Dependencies

| Package              | Version     | Purpose                                |
|----------------------|-------------|----------------------------------------|
| fastify              | ^5.3.2      | Web server framework                   |
| @fastify/cors        | ^11.0.1     | Enable CORS                            |
| @fastify/helmet      | ^13.0.1     | Security enhancements                  |
| @fastify/static      | ^8.1.1      | Serve static files                     |
| sequelize            | ^6.37.7     | ORM for database interaction           |
| pg                   | ^8.15.5     | PostgreSQL database driver             |
| pg-hstore            | ^2.3.4      | PostgreSQL hstore support              |
| dotenv               | ^16.5.0     | Manage environment variables           |

### 📦 Backend Dev Dependencies

| Package              | Version     |
|----------------------|-------------|
| nodemon              | ^3.1.10     |

---

## 📂 How to Run Locally

### Backend Setup:

```bash
cd backend
npm install
npm run dev
```

The server will start on `http://localhost:3004`

### Frontend Setup:

```bash
cd frontend
npm install
npm run dev
```

The app will start on `http://localhost:5173` (default Vite port)

---

## 📝 Important Notes

- Ensure PostgreSQL is running and database credentials are correctly added in `.env`.
- You must create the necessary tables (Products and Terms) beforehand or through Sequelize syncing.
- Adjust CORS settings if your frontend and backend are hosted on different origins.

---

## ✅ Final Deliverables

- Hosted demo link
- GitHub repository link with clean code
- README.md with setup instructions (this document)

---

## 📞 Contact

For any questions or clarifications, feel free to reach out!

---





