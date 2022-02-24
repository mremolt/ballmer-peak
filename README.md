# Ballmer Peak

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


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
