# Employee Review System
 Create an application that allows employees to submit feedback toward each other’s performance
It is built using NodeJs, ExpressJs, MongoDB, EJS and JavaScript.

### 🔗 Hosted link: [Employee review system]
https://atul-e-r-s.onrender.com

## ⚙️ Functionality

  ### Admin's functions

  - Add employee
  - Delete employee
  - Update employee details
  - Assign review to employee
  - Update review of employee

  ### Employee's functions

  - Submit reviews assigned to it
  - View reviews given by others

## 🧑‍💻 Getting started

- Fork the project
- Clone the forked repository in your local system
- Create .env file in the root directory and add the following:-
  - PORT="Your port number"
  - MONGODB_URL="Your MongoDB URL"
  - SESSION_SECRET_KEY="Your secret session key"
- Install all required packages

```bash
npm install
```

- Run project

```bash
nodemon index.js
```

The project is running on the port number provided by you.

## 🛠️ Tools Used

- NodeJS
- MongoDB
- ExpressJS
- EJS
- Bootstrap

### 📚 Libraries:

- bcryptjs
- connect-flash
- connect-mongo
- cookie-parser
- dotenv
- ejs
- express
- express-ejs-layout
- express-session
- mongoose
- passport
- passport-jwt
- passport-local
