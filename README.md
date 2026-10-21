# 🛡️ D&D Sheet Creator

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active%20Development-green?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Open--Source-Yes-blue?style=for-the-badge" alt="Open Source">
  <img src="https://img.shields.io/badge/Code-100%25%20Human--Made-orange?style=for-the-badge" alt="AI Free">
</p>

A learning-focused project designed for players who need an **easy-to-use** and **open-source** platform to create and store their Dungeons & Dragons character sheets.

---

## 📸 Screenshots

<p align="center">
  <img src="docs/screenshots/01-home.png" alt="Home page" width="700">
</p>

| Characters list | Character sheet | Search by name |
|:---:|:---:|:---:|
| ![List](docs/screenshots/03-list.png) | ![Sheet](docs/screenshots/04-sheet.png) | ![Search](docs/screenshots/05-search.png) |

---

## 🚫 AI-Free Coding
This project is **hand-coded**. While I use AI for consulting, documentation, and learning English, 100% of the logic, functions, and styling are written by me to ensure a deep understanding of the technologies used.

---

## ⚔️ Features

* **Create characters:** Name, species, class, level, AC, HP and speed.
* **Characters list:** Paginated list; click a character to open its sheet.
* **Search:** Find a character by ID or by (partial) name.
* **Edit & delete:** Update or remove any saved sheet.
* **Data persistence:** Everything is stored in a PostgreSQL database.
* **Containerized database:** PostgreSQL runs in Docker for easy local setup.

---

## 🛠️ Tech Stack

### **Frontend & Backend**
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### **Database & Infrastructure**
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or newer) and npm
* [Docker](https://www.docker.com/) with Docker Compose

### 1. Clone the repository

```bash
git clone https://github.com/hgiulliano/DnD-Sheet-Creator.git
cd DnD-Sheet-Creator/back-end
```

### 2. Start the database

```bash
docker compose up -d
```

This starts PostgreSQL 18 on `127.0.0.1:5433`. (PostgreSQL 18 is required because the tables use `uuidv7()`.)

### 3. Create the tables and (optionally) load sample data

```bash
docker compose exec -T character-sheet psql -U cleric -d postgres < database/init.sql
docker compose exec -T character-sheet psql -U cleric -d postgres < database/seed.sql   # 50 sample characters
```

> On Windows PowerShell, `<` doesn't work. Use:
> `Get-Content database/init.sql | docker compose exec -T character-sheet psql -U cleric -d postgres`

You only need to do this once. The data stays in the `postgres_data` Docker volume.

### 4. Start the server

```bash
npm install
npm start
```

### 5. Open the app

Go to **http://localhost:3000** — the Express server also serves the front-end, so there is nothing else to run.

> ⚠️ Run `npm start` from inside the `back-end/` folder: the server serves `../front-end/` using a relative path.

### Everyday use

```bash
cd back-end
docker compose up -d   # if the database container isn't running
npm start
```

To stop: `Ctrl + C` on the server, then `docker compose down` (add `-v` to also wipe the data).

---

## 🔌 API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/sheets?page=1&limit=9` | List sheets (paginated) |
| `POST` | `/api/sheets` | Create a sheet |
| `GET` | `/api/sheets/:id` | Get one sheet with its stats |
| `GET` | `/api/sheets/search/:name?page=1&limit=9` | Search by name prefix |
| `PATCH` | `/api/sheets/:id` | Update a sheet |
| `DELETE` | `/api/sheets/:statsid` | Delete a character |

---

## 📂 Project Structure
```text
├── back-end/
│   ├── database/    # init.sql, queries.sql, seed.sql
│   ├── index.js     # Express server + API routes
│   └── docker-compose.yaml
├── front-end/
│   ├── assets/      # Class icons and favicon
│   ├── css/         # Stylesheets
│   ├── pages/       # sheet, list, search, edit and delete pages
│   ├── src/         # Frontend JS logic
│   └── index.html   # Main page (create character)
├── template/        # HTML/CSS base template
└── docs/screenshots # Images used in this README
```

---
