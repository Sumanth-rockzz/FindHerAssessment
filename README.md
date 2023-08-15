# FindHerAssessment



# FindHerAssessment

# Task: Create a User Management Application

This repository contains a simple User Management Application built using React for the frontend and Node.js with MongoDB for the backend.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Bonus](#bonus)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is divided into two parts: a React frontend and a Node.js backend with MongoDB integration. The frontend allows users to sign up or log in, while the backend handles user data storage and retrieval.

## Features

- Sign up or log in with name and email.
- Display a list of users.

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/user-management-app.git

2. Navigate to the project directory:
   ```sh cd user-management-app

3. Directory:
   ```sh cd user-management-app

4. Install frontend dependencies:
  ```sh cd frontend
  ```sh npm install
5. Install backend dependencies:

```sh cd ../backend
```sh npm install
Configure MongoDB:
Create a MongoDB database and update the MongoDB connection URL in the backend/config.js file.
Usage
Run the frontend:

```sh cd frontend
```sh npm start
Access the frontend at http://localhost:3000.

Run the backend:

```sh cd backend
```sh npm start
The backend will be available at http://localhost:5000.

API Endpoints
GET /users: Fetch all users.
POST /users: Add a new user.
Bonus
Delete User: Click the delete button next to a user's name to delete them.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License. See the LICENSE file for details.
