# YourTube

A full-stack YouTube clone using React.js, Express.js, Node.js and MongoDB, with Firebase storage and styled-components.

Users can sign up, sign in, add a profile picture, upload videos, subscribe to other users, like/dislike videos and view the site in dark mode.

<img width="1440" alt="yourtube" src="https://user-images.githubusercontent.com/97295867/181261717-f703afb3-99eb-42ed-9e71-10b7ff0051de.png">

---

## Video Demo

https://user-images.githubusercontent.com/97295867/181261821-f1eedb51-4b95-473e-b596-60123e7854ee.mp4

---

## Technologies Used

* React.js
* Node.js
* Express.js
* MongoDB
* Redux Toolkit
* OAuth
* Firebase
* JWT Cookies
* styled-components

---

## Database Setup

Install MongoDB. If you are using a Mac you can do this via [Homebrew](https://brew.sh/):

```
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

Set your local MongoDB data directory, for example:

```
mkdir $HOME/mongodb-data
```

Start MongoDB:

```
mongod --dbpath $HOME/mongodb-data
```

Set your MongoDB URI:

```
echo MONGO_URI=mongodb://localhost:27017/yourtube >> .env
```

---

## Installation

Run `npm install` from both the `./server` and `./client` directories.

---

## Running

Launch MongoDB with `mongod`.

Run `npm run dev` from the `./server` directory.

---

## Instructions for use

1. Clone this repository
2. cd into its directory
3. cd into the server folder
4. Run `npm run dev` in the terminal to run the server and client concurrently
5. Visit [http://localhost:3000](http://localhost:3000) in your browser
6. Get Tubing!

---

[Jonny Abrams](https://github.com/jonnyabrams)