<h1 align="center">🏋️ CRUD Fitness Planner (Backend)</h1>
<h3 align="center">NestJS + MySQL API for a calendar-based workout planning app</h3>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" />
</p>

---

## Overview

This is the backend API for the **CRUD Fitness Planner**, a fitness planning app where users get a calendar they can fill with workout plans. It was built as an introductory project for my internship at **Aboitiz Foods**, meant to get me familiar with the tech stack (NestJS, React, MySQL) used on their engineering team.

This service handles the CRUD operations for workout plans — creating, reading, updating, and deleting entries tied to specific calendar dates — and exposes them as a REST API consumed by the [frontend](#) React app.

## Features

- 📅 CRUD endpoints for workout plans mapped to calendar dates
- 🗄️ MySQL database integration for persistent storage
- 🔧 Modular NestJS architecture (controllers, services, modules)

## Tech Stack

| Category | Tools |
|---|---|
| Framework | NestJS |
| Database | MySQL |
| Language | TypeScript |
| Editor | Visual Studio Code |

## Getting Started

```bash
# Install dependencies
npm install

# Configure your environment variables (e.g. database credentials) in a .env file

# Run the development server
npm run start:dev
```

The API will be available at `http://localhost:3000` by default.

## Project Structure

```
src/
├── modules/        # Feature modules (e.g. workout-plans)
├── entities/        # Database entity/schema definitions
├── controllers/    # Route handlers
├── services/       # Business logic
└── main.ts         # Application entry point
```

---

<p align="center"><i>Built as part of my internship onboarding at Aboitiz Foods.</i></p>
