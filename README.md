# 📚 Quizo - Quiz Management System

Quizo is a web-based Quiz Management System that allows teachers to **create, edit, view, and delete quizzes** seamlessly.


---

## 🛠 Tech Stack
### **Frontend**
- React (Vite) 
- TypeScript 
- ShadCN UI 
- Tailwind CSS 
- React Router 
- Axios

### **Backend**
- Node.js 
- Express.js 
- TypeScript  
- MySQL 

---


---

## 🔧 Installation & Setup

### **1. Clone the Repository**
```sh
git clone https://github.com/Gauri211/Quizo.git
cd Quizo
```

### **2. Backend Setup**
```sh
cd backend
npm install
```

Mysql Database Setup
```sh
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE quizzes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  teacher_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

Create a .env file in root folder of backend
```sh
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=quiz_management
PORT=5000

```
Run backend
```sh
npm run dev
```

### **3. Frontend Setup**
```sh
cd frontend
npm install
```
Run frontend
```sh
npm run dev
```
## API Documentation

---

### **1. User Authentication**

**Endpoint:** `POST /login`  

📩 **Request Body:**
```json
{
  "username": "teacher",
  "password": "123456"
}
```
### **2. Create New Quiz**

**Endpoint:** `POST /quizzes`    

📩 **Request Body:**
```json
{
  "title": "Science",
  "description": "Environment"
}
```
### **3. Get All Quizzes**

**Endpoint:** `GET /quizzes`    
**Response: Returns a list of quizzes**

### **4. Get a particular quiz based on id**

**Endpoint:** `GET /quizzes/:id`    
**Response: Returns quiz of that particular id**

### **5. Edit Quizzes**

**Endpoint:** `PUT /quizzes/:id`  
📩 **Request Body:**
```json
{
  "title": "Updated Quiz Title",
  "description": "Updated description"
}
```
### **6. Delete quiz**

**Endpoint:** `DELETE /quizzes/:id`    
**Response: Deletes quiz of that particular id**


