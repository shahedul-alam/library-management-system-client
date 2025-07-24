# 📚 Minimal Library Management System

A minimal, full-featured **Library Management System** built with **React**, **TypeScript**, **Redux Toolkit Query**, and **Tailwind CSS**. It allows users to manage books, perform CRUD operations, borrow books, and view borrow summaries — all **without authentication**.

---

## 🚀 Project Overview

This project is designed to showcase a clean and functional client-side application that interacts with a RESTful API using modern web development practices.

**Key Concepts Demonstrated:**

* CRUD operations with form validation
* State management with Redux Toolkit + RTK Query
* Responsive UI using Tailwind CSS
* API integration with TypeScript typings

---

## 🔥 Live Preview

🌐 [https://library-management-system-client-ten.vercel.app](https://library-management-system-client-ten.vercel.app)

---

## ✨ Features

### 1. Public Routes

* All pages are accessible without authentication.
* Minimal user flow with intuitive navigation.

### 2. Book Management

* **Book List Table** with columns:

  * Title, Author, Genre, ISBN, Copies, Availability, Actions
* **Actions:**

  * 🔄 Edit Book (via modal or form)
  * ❌ Delete Book (with confirmation)
  * 📥 Borrow Book
* **Add New Book**:

  * Via form with fields: Title, Author, Genre, ISBN, Description, Copies, and Available (optional)

**Business Logic:**

* If `copies === 0`, the book is marked as unavailable.

### 3. Borrow Book

* Borrow form includes:

  * Quantity (max = available copies)
  * Due Date
* Borrowing a book updates available copies.
* If copies reach 0, book becomes unavailable.
* Redirects to **Borrow Summary** on success.

### 4. Borrow Summary

* Displays an aggregated list of borrowed books:

  * Book Title, ISBN, Total Quantity Borrowed

---

## 🖥️ UI Components

* **Navbar**: Navigation links to Books, Add Book, Borrow Summary
* **Footer**: Basic site credits/info
* **Responsive Layout**: Mobile-first design
* **Forms**: Built with `react-hook-form` + `zod` validation
* **Dialogs**: Managed using Radix UI & SweetAlert2

---

## 🛠️ Tech Stack

| Layer            | Technology                                   |
| ---------------- | -------------------------------------------- |
| Frontend         | React + TypeScript                           |
| State Management | Redux Toolkit + RTK Query                    |
| API Backend      | Node.js + Express.js                         |
| Database         | MongoDB + Mongoose                           |
| Styling          | Tailwind CSS (with DaisyUI / tw-animate-css) |

---

## 📦 Package Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Run the app in development mode  |
| `npm run build`   | Build the project for production |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint                       |

---

## 📁 Project Structure (Client)

```plaintext
src/
├── app/                # Redux store configuration
├── components/         # Reusable UI components
├── redux/              # RTK Query services, slices
├── pages/              # Page-level components (routes)
|── layouts/            # Layouts-level components
├── routes/             # React Router setup
├── types/              # TypeScript interfaces
├── utils/              # Utility functions
└── main.tsx            # App entry point
```
