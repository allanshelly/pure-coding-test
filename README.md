# Fullstack Developer Take-home Coding Test

## Setup Instructions for using with prisma.

### Backend

Prerequisites: Node.js ≥ 18, NPM ≥ 9  
1. Navigate to the backend directory:   
`cd backend`  
2. Install dependencies:  
`npm install`  
3. Generate Prisma client:   
`npx prisma generate`  
4. Run database migration (if applicable):   
`npx prisma migrate dev --name init`  
5. Seed the database (optional):   
`npx prisma db seed`  
> ⚠️ Make sure your `.env` file exists at the root of the backend project and includes:   
> `DATABASE_URL="file:./dev.db"`  
6. In `backend/src/routes/agents.routes.ts` change `'../controllers/agent.controller.memory'`  to `'../controllers/agent.controller'` in line 8
7. Start the development server:   
`npm run dev`  
Backend runs at: http://localhost:3000

### Frontend

Prerequisites: Node.js ≥ 18, NPM ≥ 9  
1. Navigate to the frontend directory:   
 `cd frontend`  
2. Install dependencies:  
`npm install`  
3. Run the development server:  
`npm run dev`  
Frontend runs at: http://localhost:5173

## Setup Instructions for using in memory

### Backend

Prerequisites: Node.js ≥ 18, NPM ≥ 9  
1. Navigate to the backend directory:   
`cd backend`  
2. Install dependencies:  
`npm install`  
3. Start the development server:   
`npm run dev`  
Backend runs at: http://localhost:3000

### Frontend

Prerequisites: Node.js ≥ 18, NPM ≥ 9  
1. Navigate to the frontend directory:   
 `cd frontend`  
2. Install dependencies:  
`npm install`  
3. Run the development server:  
`npm run dev`  
Frontend runs at: http://localhost:5173

## Relational Data Model

### PropertyAgent

* `id`: Int — Primary Key, Auto Increment
* `firstName`: String — Required
* `lastName`: String — Required
* `email`: String — Unique, Required
* `mobileNumber`: String — Required
* `createdAt`: DateTime — Default: now()
* `updatedAt`: DateTime — Auto-updated on change

**Relationships:**

* Has many `Property`

---

### Property

* `id`: Int — Primary Key, Auto Increment
* `address`: String — Required
* `agentId`: Int — Foreign Key → PropertyAgent.id

**Relationships:**

* Belongs to `PropertyAgent`
* Has many `Tenant`
* Has many `Note`
* Has many `Reminder`

---

### Tenant

* `id`: Int — Primary Key, Auto Increment
* `name`: String — Required
* `email`: String — Required
* `phone`: String — Required
* `propertyId`: Int — Foreign Key → Property.id

**Relationships:**

* Belongs to `Property`

---

### Note

* `id`: Int — Primary Key, Auto Increment
* `content`: String — Required
* `createdAt`: DateTime — Default: now()
* `propertyId`: Int — Foreign Key → Property.id

**Relationships:**

* Belongs to `Property`

---

### Reminder

* `id`: Int — Primary Key, Auto Increment
* `description`: String — Required
* `dueDate`: DateTime — Required
* `completed`: Boolean — Default: false
* `propertyId`: Int — Foreign Key → Property.id

**Relationships:**

* Belongs to `Property`

---

### Text-Based ER Diagram

```
PropertyAgent
    └───┬─── has many
        │
     Property
      ├───┬─── has many
      │   │
      │   ├───▶ Tenant
      │
      ├───▶ Note
      │
      └───▶ Reminder
```


## 1. Application Description

Consider a simple application with one entity named **Property Agent**, who handles multiple **Rental Properties**.

- Each **Property** has one or more **Tenants** belonging to a single **family**.
- An **Agent** also creates some **notes and reminders** to help perform certain actions on the property (e.g. maintenance, pest control, etc.).

---

## 2. Assignment Instructions

Build a full stack application using **TypeScript**. The application should include the following:

### a. Relational Data Model

- Present a **relational data model** of the application.
- Identify all:
  - Tables
  - Constraints
  - Relationships
- You may:
  - Handwrite and scan the model, **or**
  - Use an **ER diagramming tool**

---

### b. REST API (TypeScript Backend)

- Implement a **REST API** in **TypeScript** that allows for **CRUD operations** on the **Property Agent** entity.

#### Requirements:

- Store all data **in memory** (no database support needed).
- Property Agent attributes:
  - `id`
  - `firstName`
  - `lastName`
  - `email`
  - `mobileNumber`
  - `createdAt` (timestamp)
  - `updatedAt` (timestamp)

#### Stretch Goal:

- Identify **one improvement** that is not explicitly stated in the requirements but you believe is important.
- Be ready to **discuss this during the interactive session**.

---

### c. Vue-based Web Client

#### Functionality:

1. **Upsert a Single Agent**
   - Provide a **form** for inputting values.
   - Send an **HTTP request** to the backend.

2. **List/View Agents (All or Single)**
   - Only show the **HTTP request** using a tool such as **Postman** or `curl`.

3. **Delete a Single Agent**
   - Only show the **HTTP request** using a tool such as **Postman** or `curl`.

#### Error Handling:

- During the **interactive session**, discuss:
  - What type of error handling is required
  - Where error handling should occur (**frontend vs backend**)

---

## 3. Submission Guidelines

- Create a **repository** for this assignment on **GitHub** or **GitLab**
- Share the link with us
- Use the **commit history** to show how you built the application in **small and meaningful increments**

---

## ⏱ Time Limit

- You should spend **no more than 6 hours** on the assignment.
"""
