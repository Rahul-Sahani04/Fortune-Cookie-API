# Fortune Cookie API
 Just a normal everyday fortune cookie for you.


## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [License](#license)

## Introduction

Welcome to FortuneAPI, an engaging and efficient API built using FastAPI. Designed to bring a touch of surprise to your applications, FortuneAPI lets you access a collection of random fortune cookie messages. Whether you're looking to add a fun element to your projects or seeking a delightful way to interact with users, FortuneAPI has you covered. This project showcases the power of FastAPI and demonstrates how simple it can be to integrate an interactive and entertaining API into your applications.

## Installation

To get started with Fortune Cookie API, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Rahul-Sahani04/Fortune_Cookie_FastAPI.git
   cd your-project
   ```

2. Install dependencies:
  ```sh
  npm install
  ```

**Part 5: Usage**

## Usage

Run Fortune Cookie API:
```sh
  npm run dev
```

Visit http://localhost:8000 in your browser to explore the API.

**Part 6: API Endpoints**

## API Endpoints

Here are some of the key API endpoints:

- **GET /cookie/random/**
  Get a random fortune cookie message.

- **GET /cookie/all/**
  Get all available fortune cookie messages.

- **DELETE /cookie/{message_id}/**
  Delete a specific fortune cookie message.

  
**Part 7: Configuration**

## Configuration

To configure your application, create a `.env` file in the project root and add the following:

```env
DB_NAME=verceldb
DB_USER=default1
DB_PASSWORD=************
DB_HOST=HOST
DB_PORT=1234
```
Make sure to replace the values with your actual database configuration.


**Part 8: License**
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

