# Article Project README

## Overview

Welcome to the Article project! This repository contains two main components: `article-be` and `article-fe`, which together create a full-stack application. `article-be` is the backend service built with NestJS, while `article-fe` is the frontend application developed with Next.js. These two components work together to provide a seamless user experience for managing and displaying articles.

## `article-be` (Backend)

### Technology Stack

- **NestJS:** A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Docker:** Used for containerization and easy deployment.

### Setup

1. Unzip the project to your local machine:

2. Change to the `article-be` directory:

   ```shell
   cd article-be
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Start the `article-be` service with Docker Compose:

   ```shell
   docker-compose up
   ```

   This will launch the backend service on port 9100.

### API Documentation

- Swagger UI is available at `http://localhost:9100/api` when the backend is running. This interactive documentation provides details about available API endpoints and how to use them.

### Configuration

Before running the article-be backend service, you need to set up a .env file with the following environment variables:

MYSQLDB_PASSWORD: The password for your MySQL database.
MYSQLDB_LOCAL_PORT: The local port on which your MySQL database is running.
MYSQLDB_DOCKER_PORT: The port on which your MySQL database will be exposed in the Docker container.
NESTJS_APP_LOCAL_PORT: The local port on which the NestJS application will run.
NESTJS_APP_DOCKER_PORT: The port on which the NestJS application will be exposed in the Docker container.
MYSQLDB_HOST: The hostname or IP address of your MySQL database server.
MYSQLDB_USER: The username for your MySQL database.
MYSQLDB_DATABASE: The name of the MySQL database to connect to.
You can create a .env file in the article-be directory and populate it with these variables before starting the Docker Compose process. Make sure the values in the .env file match your specific setup.

After setting up the .env file, you can proceed with the installation and startup steps as mentioned in the original section.

## `article-fe` (Frontend)

### Technology Stack

- **Next.js:** A React framework for building server-rendered React applications.
- **React:** A JavaScript library for building user interfaces.
- **NPM:** The Node Package Manager for managing dependencies.

### Setup

1. Change to the `article-fe` directory:

   ```shell
   cd article-fe
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Start the `article-fe` application in development mode:

   ```shell
   npx next dev
   ```

   This will launch the frontend on port 3000.

### Accessing the Frontend

- Open your web browser and navigate to `http://localhost:3000` to access the frontend.

### Configuration

- You can modify the frontend configuration in the `article-fe/.env.local` file.

## Communication Between Backend and Frontend

- The frontend (`article-fe`) communicates with the backend (`article-be`) by making HTTP requests to the backend API endpoints. You can find the API endpoints in the Swagger documentation or by inspecting the frontend code that calls the API.

## Contributors

- List the contributors to the project and how to contact them.

## Issues

- If you encounter any issues or have suggestions for improvements, please open an issue on this GitHub repository.

Thank you for using the Article project! If you have any questions or need further assistance, feel free to reach out to the project maintainers.

Happy coding! 🚀📝📚