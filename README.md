# Fullstack Developer Take-home Coding Test

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
