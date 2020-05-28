# gather
This project utilizes Mongo, Express, React and Node.js to allow users to join rooms based on common interests and communicate.

## Functionality
A Registration and Login system ensure that only registered users are able to log in and communicate on the application.
Once a user logs in, they have a number of groups displayed that they may join.
When they click a group, it will bring them into a chat room where they can communicate with other users.
For each group and user, we store and recall data to Mongo databases by way of utilizing Mongoose.

## Run
Before running, if the user wants to run in dev mode in chrome, the user must install the Redux DevTools application.
Once that is installed, in the main folder, run <code>npm i</code> to install the top level modules,
then change to the client directory (<code>cd client</code>) and run <code>npm i</code> again
to install the client modules. change directory back to the main folder and run npm start dev to start the chat, server and client.

## Repository
Repo: https://github.com/davidshur/gather

## Deployed App
App: https://gather-mern.herokuapp.com/
