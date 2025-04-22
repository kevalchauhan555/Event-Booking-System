# 📅 Event Booking System API

A RESTful API for managing events and bookings, featuring user registration, authentication, and admin-level event control.

---

## 🚀 Features

- ✅ User Registration & JWT Authentication
- 🔐 Role-based Access (Admin/User)
- 📅 Event CRUD (Create, Read, Update, Delete)
- 🕵️‍♂️ Pagination & Date Filtering
- ⚙️ Middleware for Auth & Role Checks

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- express-rate-limit
- swagger-jsdoc + swagger-ui-express

---
## 🔑 API Endpoints
## 👤 Auth

POST	/api/auth/register	   Register new user
  
POST	/api/auth/login	   Login and get JWT

## 📅 Events

GET	/api/events	          Get all events

GET	/api/events?start=2025-05-01&end=2025-05-31	       Filter by date

POST	/api/events	        Create an event (Admin only)

PUT	/api/events/:id	      Update an event (Admin)

DELETE	/api/events/:id	  Delete an event (Admin)


## 🔐 Security
Passwords are hashed using bcrypt
  
Protected routes use JWT Auth Middleware
  
Rate limiting is applied to login and event creation endpoints

## 🧑‍💻 Author
Keval Chauhan
Node.js | MERN Developer
