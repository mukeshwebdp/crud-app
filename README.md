# CRUD Application with React and Node.js

`This project is a simple CRUD (Create, Read, Update, Delete) application built using React for the frontend and Node.js/Express for the backend to manage a list of items.`

### Features
* Create: Add new items to the list.
* Read: View all items in the list.
* Update: Edit existing items in the list.
* Delete: Remove item from the list.
### Tech Stack
* Frontend: React, Axios
* Backend: Node.js, Express
* Database: MongoDB

## Backend Setup
```
  ./server
  npm i
  npm run start
```
## Frontend Setup
```
  ./client
  npm i
  npm run start
```
## Project Structure
### Backend (`crud-react-backend`)
* `index.js`: Entry point for the backend server.
* `routes/:` Directory for Express route files.
* `models/`: Directory for Mongoose models (if using MongoDB).
* `controllers/`: Directory for controller functions.

### Frontend (`crud-react-frontend`)
* `src/App.js`: Main application component.
* `src/components/`: Directory for React components.

### Usage
* Create: Use the form to add a new item to the list. This will send a POST request to the backend API.
* Read: The list of items is displayed on the main page. This is fetched from the backend using a GET request.
* Update: Click the edit button next to an item to modify its details. This will send a PUT request to the backend API.
* Delete: Click the delete button next to an item to remove it from the list. This will send a DELETE request to the backend API.



