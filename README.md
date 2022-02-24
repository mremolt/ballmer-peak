# Ballmer Peak

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Installation 

* Make sure your local machine is set up for Angular development (NodeJS, Git, Code Editor). 
* Checkout the project with Git to your local machine. 
  * Optional: First fork the project to your own Github account if available.
* Install the NPM dependencies.
* Start the dev server.

## Interview tasks

Please choose one of the following tasks. 
Optional: If you finish the first one in time, you may of course take another. 

### Infrastructure task

The test suite currently throws an error. 
Please make all existing tests pass. 

### UX task 

The users detail page currently only shows the raw data. 

Please display name, email, phone and company name of the current user in a nicely formatted way.
You may use the already installed [Angular Material](https://material.angular.io/) library or choose to roll your own styling. 

### Code quality task

The code quality in the current project *can be improved* to put it mildly. 

Please identify code pieces lacking quality, then describe the existing problem and your suggested solution. 

Bonus: Try to improve some of the pieces with live coding. 

Bonus: Also keep in mind, the project will grow over time and is planned to contain dozens of individual pages. 
So also try to identify issues with the underlying architecture, that will probably bite the project later and suggest improvements. 

### Feature task

On the user detail page we need to also display the open TODOs for each user. 

Study the API on https://jsonplaceholder.typicode.com/ and add the described feature to the page. 
Some basic styling is required (no "JSON Pipe"), but it does not have to look pretty. ;)

### Testing task

The UsersService is missing tests. Please bring the code coverage for this class to 100%. 

Hints:
* Each test run automatically generates coverage info inside the *coverage* folder of the project. First have a look at the current results.
* For mocking the `HttpClient` dependency you may use the `HttpClientTestingModule` or roll a manually created mock, whichever you prefer. 
* This project uses Jest as test runner. Should you be used to Karma, this is no problem. The current tests run unmodified with both tools. 
