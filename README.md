# URL Shortener with Node.js

This is a URL shortener web application built with Node.js, Express, and MongoDB. It allows users to shorten long URLs and redirect them to the original URL when accessed.

## Project Structure

```
├── connection.js
├── controllers
│   ├── url.js
│   └── user.js
├── index.js
├── middlewares
│   └── auth.js
├── models
│   ├── url.js
│   └── user.js
├── package-lock.json
├── package.json
├── routes
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
├── service
│   └── auth.js
└── views
    ├── home.ejs
    ├── login.ejs
    └── signup.ejs
```


## Prerequisites

- **Node.js** (download from [here](https://nodejs.org/))
- **MongoDB** for database storage
- A basic understanding of Express.js and MongoDB

## Setup Instructions

Follow these steps to set up and run the project:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

Install the required Node.js dependencies:

```bash
npm install
```

This will install all the necessary packages listed in `package.json`.

### 3. Set Up MongoDB

Make sure you have MongoDB running locally or use a cloud-based MongoDB service. You will need the MongoDB connection URL for configuration.

### 4. Configure Database Connection

In `connection.js`, update the MongoDB connection string:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/url_shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

Replace the URL with your own MongoDB connection string if necessary.

### 5. Run the Application

Start the server by running:

```bash
node index.js
```

This will start the application on `http://localhost:3000`.

### 6. Routes and Features

- **Home Page**: Displays the URL shortening form (`GET /`)
- **Login**: Login form (`GET /login`)
- **Signup**: Signup form (`GET /signup`)
- **Shorten URL**: Shorten a URL (`POST /`)
- **Redirect**: Redirect from shortened URL to the original URL (`GET /:shortenedUrl`)
  
### 7. Authentication

The application supports user registration and login:

- **Signup**: Register a new user (`POST /user/signup`)
- **Login**: Login with existing credentials (`POST /user/login`)
- **Authentication Middleware**: Ensures routes are protected (`middlewares/auth.js`)

### 8. Customizing the Application

- **URL Shortening**: Modify the `controllers/url.js` to adjust how URLs are shortened.
- **User Authentication**: Customize user registration and login in `controllers/user.js`.
- **Database Models**: Edit `models/url.js` and `models/user.js` to change the database schema.
- **Views**: Customize the views in the `views` folder (e.g., `home.ejs`, `login.ejs`).

