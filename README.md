# 🛡️ D&D Sheet Creator

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active%20Development-green?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Open--Source-Yes-blue?style=for-the-badge" alt="Open Source">
  <img src="https://img.shields.io/badge/Code-100%25%20Human--Made-orange?style=for-the-badge" alt="AI Free">
</p>

A learning-focused project designed for players who need an **easy-to-use** and **open-source** platform to create and store their Dungeons & Dragons character sheets.

---

## 🚫 AI-Free Coding
This project is **hand-coded**. While I use AI for consulting, documentation, and learning English, 100% of the logic, functions, and styling are written by me to ensure a deep understanding of the technologies used.

---

## ⚔️ Current Features

In this current build, users can:
* **Custom Stats:** Input core attributes like Ability Scores, AC, and HP.
* **Character Creation:** Choose from various D&D classes and species.
* **Data Persistence:** Save your completed sheet to a PostgreSQL database.
* **Containerized Environment:** Ready for local development using Docker.

---

## 🛠️ Tech Stack

### **Frontend & Backend**
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### **Database & Infrastructure**
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

---

## 📂 Project Structure
```text
├── back-end/
│   ├── database/    # init.sql, queries.sql, seed.sql
│   ├── index.js     # Server entry point
│   └── docker-compose.yaml
└── front-end/
    ├── assets/      # Icons and images
    ├── css/         # Stylesheets
    ├── pages/       # sheet.html
    ├── src/         # Frontend JS logic
    └── index.html   # Main landing page
