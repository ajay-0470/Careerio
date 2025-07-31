# Careerio 🌐

Careerio is a  job listing platform enabling users to browse and post job opportunities. With a React-based client and a Spring Boot backend, Careerio stores data in MongoDB for seamless and reliable job listing management.

---

## 📝 Overview

Careerio offers a simple, modern solution for posting and discovering job listings. Key features include:
- A clean interface for exploring available jobs.
- Easy-to-use forms for creating job posts.
- Responsive design for use on any device.

The project is organized into a React frontend for user interaction and a Spring Boot backend that manages job data and API endpoints, all powered by MongoDB.

---

## 🗂️ Features

- 📄 **Job Listings:** View all available job postings.
- ➕ **Job Creation:** Add new job listings using a simple form.
- 🔍 **Job Details:** View specific information about each job.
- 🕵️ **Search:** Find jobs by keywords.
- 🌐 **REST API:** Structured endpoints for job management.

---

## ⚡ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- Java 17 or higher
- MongoDB (local or Atlas)
- Maven

---

### 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm start
```
Your frontend will be running at: [http://localhost:3000](http://localhost:3000)

---

### 💻 Backend Setup

```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```
The backend API will be available at: [http://localhost:8080](http://localhost:8080)

---

### 🗄️ Database Setup

- Install MongoDB locally or use [MongoDB Atlas](https://www.mongodb.com/atlas/database).
- **IMPORTANT:**  
  Replace the default MongoDB credentials with your own in the backend’s `application.properties` file (found in `backend/joblisting/src/main/resources/`):

  ```
  spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/careerio
  ```

---

## 📣 API Endpoints

- `GET /posts` — Retrieve all job listings
- `POST /posts` — Create a new job listing
- `GET /posts/{id}` — Get a specific job listing
- `PUT /posts/{id}` — Update a job listing
- `DELETE /posts/{id}` — Delete a job listing
- `GET /posts/search/{text}` — Search job listings

---

## 🤝 Contributing

Feedback and contributions are welcome! Please open an issue or pull request to suggest improvements.

---

**Note:**  
Remember to update the MongoDB connection string in your backend configuration before running the application.
