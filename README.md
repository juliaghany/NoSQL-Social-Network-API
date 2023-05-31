# NoSQL Challenge: Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 

This is an API for a social network web application where users can post, update, and delete their thoughts, react to other user's thoughts, and add and remove friends from their friend list. This API was built using Express.js for routing, MongoDB for the database, and the Mongoose ODM. 

## Table Of Contents 
- [Technologies Used](#technologies-used)<br>
- [License](#license)<br>
- [Credits](#credits)<br>

## Technologies Used

- Node.js
- MongoDB 
- Express.js
- Mongoose
- JavaScript

# Credits 

- My tutor, Alex Gonzalez, helped by telling me to add `id: false` to my Thought model so that it did not create a duplicate id. He also told me to change line 35 in the thoughtController.js file from `req.params.userId` to `req.body.userId` so that my application would function properly. 
- I referenced this website for formatting date/time: https://day.js.org/docs/en/display/format
- I referenced multiple activities throughout this project; I have added which activities I've referenced for each file in each file. 