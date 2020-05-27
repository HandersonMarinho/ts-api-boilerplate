# Typescript Express API Boilerplate

This is a very basic Express api using Typescript as code base, you can use it to save time when starting a new project if you will, also I gonna be updating that repo with new approaches once my typescript journey gets long :). Hope I can make your life easier! 

## Project structure

Find below a resume about with is being used in this project and how it's structured.

|                |Description                          |
|----------------|-------------------------------|
|`Startup.ts`| Initializes the express routes and middlewares|
|`Server.ts`| Starts the server it self|
|`Routes.ts`| Contains all the router and call it's related controllers/services|
|`/Service`| That folder contains all service modules|
|`/Repository`| That folder contains all database mobules|
|`/Abstraction`| Keeps all abstraction objects used to segregate responsabilities (SOLID), yes I like Interfaces |
|`/Model`| Our api domain objects|

## References
If you are looking for more information about what's being used in this project I have some good links for you:

 - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
 - [https://expressjs.com/](https://expressjs.com/)
 - [https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
