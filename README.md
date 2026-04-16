# 📌 Task Management Backend (Node.js + Express + MongoDB)

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.js || bun run dev
```

---

##  API Endpoints

###  Create Task

```http
POST /api/v1/tasks
```

```json
{
  "title": "Learn Node.js",
  "description": "Practice backend",
  "category": "Study"
}
```

---

###  Get All Tasks 

```http
GET /api/v1/tasks
```

#### Query Params:

* `category` → filter by category
* `isCompleted` → true / false
* `getFile` → fetch a specific task using ID  
* `getAllfile` → fetch all tasks when no ID is provided  

**Example:**

```http
/api/v1/tasks?category=Work
```

---

###  Get Task by ID

```http
GET /api/v1/tasks/:id
```

---

###  Update Task

```http
PATCH /api/v1/tasks/:id
```

---

###  Mark Task as Completed

```http
PATCH /api/v1/tasks/:id/complete
```

---

###  Delete Task

```http
DELETE /api/v1/tasks/:id
```

---

##  Features

* CRUD operations (Create, Read, Update, Delete)
* Filter by category 
* Validation middleware
* Error handling with custom responses

---

##  Environment Variables

Create a `.env` file and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Bun Runtime

---

##  Notes

* Use Postman or Thunder Client to test APIs
* Ensure MongoDB is running or use MongoDB Atlas

---

This project was created using `bun init` in bun v1.3.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
