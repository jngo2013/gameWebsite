 
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)
 
# **The Board Game Project**
 
# Table of Contents
* [Project Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [Tools, Technologies, and Frameworks](#tools-technologies-and-frameworks)
* [Challenges](#challenges)
* [Future Improvements](#future-improvements)
<!-- * [Tests](#tests) -->
* [License](#license)
<!-- * [Contributions](#contributions) -->
* [Questions](#questions)
* [Helpful Resources](#helpful-resources)
 
## Project Description
The Board Game Project is a full stack MERN (MongoDB, Express, React, NodeJS) Web application that was created for a client that wanted to enhance their online presence within the board gaming community.  Visitors of the site are able to view upcoming events and news, and view and search a collection of board games.  The owner of the site (the client) has the ability to change the image and information in the carousel, add, edit, view, and delete board games, and add and delete events in the calendar.
 
## Installation
Download the code or clone the repository into your local development environment:
```
git clone https://github.com/jngo2013/gameWebsite.git
```

In the root directory, install the dependencies:
```
npm i
```

Run the application:
```
npm start
```
 
## Usage
The actual website that we made for our client for his personal use is located here:  [Drunk on Games](http://www.drunkongames.com/).


A version for testing out the functionality of the application is located here: [The Board Game Project](https://gamewebsiteapp.herokuapp.com/).  In order to test the full functionality of the site, use the following credentials: 
 
 
* Email address: testing123@gmail.com
* Password: 123123
 
 
## Tools, Technologies, and Frameworks
* Front end: Axios, Bootstrap, React, React Bootstrap, React Router DOM, HTML, JavaScript, CSS, Google Calendar
* Back end: bcryptJS, dotenv, Express, if-env, jwt-simple, Mongoose, Multer, passport, passport-jwt, passport-local, validator, MongoDB, NodeJS
* Other: Postman, Heroku, Figma
 
## License
Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).
 
<!-- # Contributions
This project is currently not accepting any contributions. -->
 
## Challenges
* [Creating an edit modal with update and delete functionality](#creating-the-edit-modal-guillermo)
* [Full text search and search bar functionality](#full-text-search-and-search-bar-functionality-guillermo)

### Creating the edit modal (Guillermo)
***
One of the challenges that came up when buildling this application was creating a way for the owner to edit and delete board game data.  We ultimately came up with the idea of using a modal which contained a form.  This form would be pre-filled with board game data that could be edited, updated data would then be sent to the parent component in order to allow the parent to re-render with the updated data.  This form would also allow the user to delete any board game entries.

#### Solution
------
Because the modal had a lot of functionality, it was important to break down this feature into smaller parts and work on each individually.  The first part was getting the modal to work. React Bootstrap offers a modal as a functional component that uses hooks.  Because this feature would be dealing with data, I thought it would be important to convert the modal into a class-based component.  Next, I used React Bootstrap's form and placed it inside of the modal.  In order to get the form inputs to be pre-filled with data, I had the "Edit" button make an API request to retrieve the data from our database and then set a "gameData" state to contain the information.  This information would then be displayed in the form inputs.  

The next step was to work on the edit functionality.  I created the API route for updating (I used a "PUT" request) and then created update functions on the backend.  In order to update a particular board game, I used the ID MongoDB creates when an entry is added to the database.  I sent a board game's ID to the backend and used used Mongoose's "findByIdAndUpdate" in my update functions in order to accomplish this.  The updated data would then be send back to the front end.

In order to get the parent component to update with the new information, I had to pass data from the edit modal to the parent "Details" component.  The parent component would then update its state with the updated data, which would then trigger a re-render of the component.  To accomplish this, I created a "passDataToParent" function:

```
passDataToParent = (childData) => {
  this.setState({ gameData: childData });
}
```

This function was then passed down to the child "EditModal" component as props.  When called in the child "EditModal" component, it would send data back to the parent "Details" component.

The next step was to create the delete functionality. I followed the same steps as when I created the edit functionality:  create the API route, make sure I was hitting it by testing with Postman, creating the appropriate function, and make sure that the front end responds accordingly.  For this particular functionality, we wanted for the user to be redirected back to the collection of games.  In order to accomplish this, I created a "redirect" function that would change a "redirect" state from "false" to "true."  This function would be passed to the child edit modal component via props.  When a board game entry is deleted, the "redirect" function will be called with "true" passed in and the parent's state will be changed.  I used a ternary statement to determine whether or not a redirect would occur:

```
 // ===== FOR DELETING A GAME =====
    // if this.state.redirect is "true"...
    this.state.redirect
    ? 
    // ...then go to "/LegacyGames" route...
    this.props.history.push("/LegacyGames")
    :
    // ...otherwise, display the game info
    <Container>
      <Card className="LegacyGames-details text-center">
    // etc.
```

### Full Text Search and Search Bar Functionality (Guillermo)
***
Another challenge I encountered was implementing the search bar functionality.
It was challenging because two different collections in our MongoDB database had to be searched and the results had to be combined.  

#### Solution
------
In order to accomplish this, I had the "Search" component make two API calls to our database, one for each collection.  Another challenge was to be able to search all of the entries in our database.  After doing some research, I came across using a [Text Index](https://docs.mongodb.com/manual/core/index-text/), which could be used in the schemas: 

```
LegacyGameSchema.index({"$**": "text"});
```

Using Mongoose, our search function looks like this:

```
Legacy.find({ $text: {$search: req.params.game}})
  .then(game => {
    res.json(game);
    console.log(game);
  })
  .catch(err => {
    console.log(err);
  }); 
```

This solution I found for a full text search can be found [here](https://stackoverflow.com/questions/28775051/best-way-to-perform-a-full-text-search-in-mongodb-and-mongoose).

After querying our database, the results would then be combined into a single array in the component and then displayed.

## Future Improvements
***
 
## Questions
***
If you have any questions, you can contact [Jimmy Ngo](jngo2013@gmail.com) or [Guillermo Martin](mailto:gscalica@gmail.com). 

## Helpful Resources
***
* [ScrollToTop implementation with React Hooks](https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition)
* [Preserve Line Breaks in Textarea](https://stackoverflow.com/questions/30593103/preserve-line-breaks-in-textarea)
* [Transparent Textures](https://www.transparenttextures.com/)
* [Breaking to a New Row With Flexbox](https://tobiasahlin.com/blog/flexbox-break-to-new-row/)
* [CSS Flexbox Gap](https://ishadeed.com/article/spacing-in-css/#css-flexbox-gap)
* [Redirect to Another Page](https://www.w3schools.com/howto/howto_js_redirect_webpage.asp)
* [Redirect website after specified amount of time](https://stackoverflow.com/questions/3292038/redirect-website-after-certain-amount-of-time)
* [Validate MongoDB ObjectId](https://stackoverflow.com/questions/53686554/validate-mongodb-objectid)
* [Full Text Search in MongoDB and Mongoose](https://stackoverflow.com/questions/28775051/best-way-to-perform-a-full-text-search-in-mongodb-and-mongoose)

 
## Screenshots
 
<!-- ![user image](https://avatars.githubusercontent.com/u/57199674?v=4)
#### This user's email is private. -->
