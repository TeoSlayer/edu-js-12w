# Node.js Fullstack 12-Week Learning Plan

This comprehensive 12-week plan guides learners from environment setup through fullstack development and deployment.  It begins with Node.js fundamentals and JavaScript refresh, then covers backend (Express, databases), frontend (HTML/CSS, React) and tooling (Git, testing, deployment).  Node.js uses a single-threaded event loop for non-blocking I/O ([Node.js — The Node.js Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#:~:text=The%20event%20loop%20is%20what,the%20system%20kernel%20whenever%20possible)) and supports asynchronous patterns (callbacks, promises, async/await) to keep the server responsive ([Asynchronous Programming  in NodeJS | GeeksforGeeks](https://www.geeksforgeeks.org/asynchronous-patterns-in-node-js/#:~:text=match%20at%20L280%20run%20efficiently,hell%2C%20and%20leveraging%20promises%20or)).  The npm package manager (with over 2 million packages in its registry ([Node.js — An introduction to the npm package manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager#:~:text=,js))) provides ready-made modules at every step.  Each week’s session has clear goals, key concepts, and a slide-by-slide outline, accompanied by hands-on homework tasks and mini-projects.  Best practices (modular code, error-handling, version control, testing, etc.) are emphasized throughout.

## Week 1: Setup & JavaScript Refresher  

**Session Goal:** Set up the development environment and review core JavaScript/ES6 basics. Students will install Node.js/npm, choose an editor, and practice modern JS syntax.  

**Key Concepts:**  
- Installing Node.js and npm (Node’s package manager ([Node.js — An introduction to the npm package manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager#:~:text=,js))).  
- Using the Node REPL and running scripts.  
- JavaScript fundamentals: `let`/`const` vs `var`, data types (string, number, object, array), template literals.  
- ES6 features: arrow functions, classes, destructuring, modules (`import`/`export`).  

**Weekly Homework:**  
- **Install and Practice:** Install Node.js and npm. In a new folder, run `npm init -y` and create a simple script (`index.js`) that exports a function from one file and imports it in another. Commit code to a local Git repo.  
- **JS Exercises:** Solve short JavaScript exercises (e.g. array/map problems, arrow function transformations). Use modern syntax (let/const, arrow functions).  
- **Mini-Project:** Write a Node script that reads a text file (e.g. using `fs.readFileSync`) and logs its contents or word count. Submit code with screenshots of execution.

## Week 2: Node Core & npm

**Session Goal:** Explore Node.js core modules and npm workflows. Students will learn built-in modules (fs, http, path, events), how to use npm to manage dependencies, and how to read documentation.  

**Key Concepts:**  
- Node’s module system: CommonJS (`require`) and core modules.  
- Core modules: `fs`, `path`, `http`, `events`, etc.  
- Using npm: `npm install`, `package.json` (name, version, scripts), semantic versioning.  
- Creating and publishing basic Node modules (npm init, semantic versioning).  

**Weekly Homework:**  
- **Core Module Practice:** Extend the Week 1 Node script into a small tool that uses one core module. For example, create a simple HTTP server that reads and serves a file from disk (using `http` + `fs`).  
- **npm Project:** Initialize a new npm project (`npm init`), install at least two packages (e.g. `express`, `lodash`), and write a Node script that uses them. Check `node_modules` and `package.json`.  
- **Mini-Project:** Build a CLI tool: e.g., using the `readline` or `process.stdin`, make a command-line note-taker or calculator. Include a `start` script in package.json. Submit via Git (e.g. push to GitHub).

## Week 3: Asynchronous Patterns

**Session Goal:** Understand Node.js’s non-blocking architecture and practice asynchronous code. Topics include the event loop, callbacks, Promises, and `async/await`.  

**Key Concepts:**  
- Event Loop & non-blocking I/O ([Node.js — The Node.js Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#:~:text=The%20event%20loop%20is%20what,the%20system%20kernel%20whenever%20possible)). Single-threaded concurrency.  
- Callbacks: error-first callback convention (Node style), “callback hell” problem.  
- Promises: using `.then()`, `.catch()`.  
- `async/await`: syntactic sugar over Promises, `try/catch` error handling.  
- Best practices: Avoid long-running loops, use asynchronous APIs or worker threads for CPU-heavy tasks.  

**Weekly Homework:**  
- **Callback to Promise:** Take a Node function that uses callbacks (e.g. `fs.readdir`) and wrap it in a Promise manually, then use `.then()` or `await`.  
- **Build Async Logic:** Write a Node script that reads multiple JSON files asynchronously and combines the data (using Promises or `async/await`). Show proper error handling if a file is missing.  
- **Mini-Project:** Create a simple HTTP fetch utility using `https` or a library like `node-fetch`/`axios`. Fetch data from a public API (e.g. JSONPlaceholder) and log results. Practice async/await. Commit code and note any issues.

## Week 4: Express & Routing

**Session Goal:** Introduce Express.js for building web servers and RESTful routes. Students will create routes, use middleware, and structure a basic API.  

**Key Concepts:**  
- Express framework overview: fast, unopinionated web framework for Node.  
- Creating an Express app: `npm install express`, `const app = express()`.  
- Routing: Using `app.get()`, `app.post()`, etc., to define endpoints. (An Express *route* pairs an HTTP verb and URL path to a handler function ([Express Tutorial Part 4: Routes and controllers - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#:~:text=A%20route%20is%20a%20section,called%20to%20handle%20that%20pattern)).)  
- URL parameters and query strings (e.g. `/:id`, `?search=term`).  
- Middleware: built-in (e.g. `express.json()` for parsing JSON) and custom.  
- Modular routes: using `express.Router()` to group routes.  

**Weekly Homework:**  
- **Basic API:** Using Express, build a mini API with at least two endpoints. Example: a “Todo” API with `GET /todos` and `POST /todos`. Store data in memory for now (an array). Test with Postman/curl.  
- **Middleware Practice:** Add middleware to your API: e.g., a simple authentication stub (check for a header) or request logger.  
- **Mini-Project:** Create a multi-route Express app (e.g. a note-taking service) with routes for creating, reading, and deleting items. Organize routes using `express.Router()` in separate files. Push to Git.

## Week 5: Persistent Storage (Databases)

**Session Goal:** Learn to connect Node/Express apps to a database. Students will work with MongoDB (using Mongoose) or a SQL database (using an ORM) to persist data.  

**Key Concepts:**  
- Why use a database? (Persistence beyond server runtime.)  
- NoSQL vs SQL overview (e.g. MongoDB vs PostgreSQL).  
- Connecting to MongoDB with Mongoose: schemas and models.  
- CRUD operations: creating, reading, updating, deleting records.  
- Environment configuration: storing DB connection strings securely (dotenv).  

**Weekly Homework:**  
- **Database Setup:** Set up a MongoDB database (local or cloud). In your Express app, install Mongoose and connect to the DB.  
- **Model Creation:** Define a Mongoose schema/model for your data (e.g. Todo, Note, User).  
- **CRUD Endpoints:** Implement at least two API endpoints that interact with the DB (e.g. POST to create a record, GET to list records). Test that data is actually saved in MongoDB.  
- **Mini-Project:** If you haven’t already, convert your Week 4 mini-project so that data persists in the database. For example, the Todo API now stores todos in MongoDB. Ensure you can restart the server and data remains.

## Week 6: Frontend Foundations

**Session Goal:** Introduce basic frontend web development: HTML, CSS, and client-side JavaScript. Students will learn to build simple web pages and understand how the browser works.  

**Key Concepts:**  
- HTML structure: elements (`<html>`, `<head>`, `<body>`, headers, paragraphs, lists, forms). Semantic tags (nav, main, footer).  
- CSS basics: selectors, the box model (margin, padding, border), layouts (flexbox or grid intro), typography, colors.  
- Responsive design: mobile-first approach, meta viewport, media queries.  
- JavaScript in the browser: `<script>` tags, the DOM (Document Object Model), simple DOM manipulation (e.g. `document.getElementById`).  
- Browser DevTools: using the inspector, console for debugging, network tab.  

**Weekly Homework:**  
- **Static Page:** Create a static webpage (for example, a personal profile or a product page) using HTML and CSS. Ensure it looks good on desktop and mobile (use responsive techniques).  
- **Styling Practice:** Add a CSS file and style the page (colors, fonts, layout using flexbox or grid). Use DevTools to debug layout issues.  
- **Mini-Project:** Design a simple UI (e.g. a list of items or a form to add items) that will later be powered by React. Submit HTML/CSS files. Optionally include a bit of inline JavaScript to handle a click event (e.g. alert or console.log).

## Week 7: React Basics

**Session Goal:** Teach React fundamentals for building interactive frontends. Students will create React components, manage state, and understand props.  

**Key Concepts:**  
- React introduction: “A JavaScript library for building user interfaces” ([React – A JavaScript library for building user interfaces](https://legacy.reactjs.org/#:~:text=A%20JavaScript%20library%20for%20building,user%20interfaces)). Component-based architecture.  
- JSX syntax: writing HTML-like code in JavaScript.  
- Components: functional (and mention class) components, returning JSX.  
- Props: passing data to components, `props` object.  
- State: using `useState` hook in functional components to manage local state.  
- Event handling in React (onClick, onChange).  
- Project structure: using Create React App (or Vite) to scaffold the project.  

**Weekly Homework:**  
- **React Setup:** Initialize a new React project. Create a few components (e.g. `Header`, `Footer`, `ItemList`).  
- **Stateful Component:** Build a simple component with state, such as a counter or a todo list where you can add items.  
- **Props Practice:** Pass data between components (e.g. a list component that receives an array of items via props).  
- **Mini-Project:** Refactor the static HTML page from Week 6 into React components. For example, if you made a product list in HTML, make a `ProductList` component that renders items from an array in state. Ensure the UI updates when state changes.

## Week 8: Frontend-Backend Integration & Authentication

**Session Goal:** Connect the React frontend with the Express backend. Introduce API calls from the browser and basic authentication (e.g. JWT).  

**Key Concepts:**  
- RESTful API consumption: using `fetch` or `axios` in React to call backend endpoints.  
- CORS: Cross-Origin Resource Sharing (enabling requests from React dev server to Express API).  
- Authentication flow: stateless JWT authentication (client sends token in header).  
- Protecting routes: verifying JWT on the server for private endpoints.  
- Storing tokens safely (in HTTP-only cookies or localStorage – mention pros/cons).  

**Weekly Homework:**  
- **API Integration:** Update the React app to consume your Express API. For example, fetch a list of items from the backend and display them in a component. Ensure data persists and updates correctly.  
- **CORS Setup:** If needed, configure your Express server to allow requests from the React frontend (using CORS middleware).  
- **Authentication Endpoints:** Create `/register` and `/login` endpoints in Express. On login, return a JWT. In React, build a simple login/register form. Store the received token.  
- **Protected Route:** Add a protected endpoint (e.g. `/api/secret`) on the server that returns data only if a valid JWT is provided. Have React call this after login and display the response.  
- **Mini-Project:** Extend your app: e.g., a user can log in and create personal items (todos, notes). Ensure that only the authenticated user can see their data. Push all code and demo screenshots.

## Week 9: Testing & Quality Assurance

**Session Goal:** Introduce testing frameworks and code quality tools. Students will write automated tests and use linters to ensure code reliability.  

**Key Concepts:**  
- Why test? (Catch bugs early, ensure future changes don’t break functionality.)  
- Unit testing: testing small pieces of code in isolation (e.g. functions, React components).  
- Integration testing: testing API endpoints with a database.  
- Testing tools: Jest (popular test runner) and Supertest (for HTTP endpoints).  
- Code linting and formatting: ESLint (find code issues), Prettier (consistent style).  
- Continuous integration basics: running tests automatically on push (mention GitHub Actions).  

**Weekly Homework:**  
- **Unit Tests:** Write at least one unit test using Jest for a function in your project (e.g. test a data manipulation function or React component output).  
- **API Tests:** Write an integration test for one Express endpoint using Supertest (e.g. test that GET/POST returns correct status and data).  
- **Lint Your Code:** Configure ESLint for your project (use a popular style guide or Airbnb preset). Fix any linting errors or warnings.  
- **Mini-Project:** Ensure your project has at least 2-3 automated tests passing. Add a CI configuration (e.g. `.github/workflows/node.js.yml`) that runs `npm test` on push. Share test results.

## Week 10: Git & Collaboration

**Session Goal:** Teach version control with Git and best practices for collaboration. Students will use Git branches, push to remote repos, and practice pull requests.  

**Key Concepts:**  
- Git fundamentals: init, add, commit, status, log.  
- Branching model: create feature branches, merging, avoiding “master/main” direct commits.  
- Remotes: pushing to GitHub/GitLab, setting up SSH keys or HTTPS access.  
- Pull Requests (PRs): Code review, resolving conflicts, merging via PR.  
- Workflow: GitFlow or GitHub Flow concepts.  
- Collaboration: using Issues and project boards for planning.  

**Weekly Homework:**  
- **Branching Exercise:** Create a new branch for a feature in your project (e.g. `feature/auth`). Make a change, commit, and push it. Open a pull request to `main`.  
- **Resolve a Conflict:** Intentionally create a conflict (edit the same line in main and the branch), then resolve it in Git. Document the steps.  
- **Collaboration Simulation:** Pair up with a classmate (or simulate by making two accounts). Each should review and approve the other’s PR.  
- **Mini-Project:** Ensure your project’s code history is clean: main has all merged work, no obvious errors. Tag a “v1.0” release or milestone in GitHub representing completion of MVP features.

## Week 11: Deployment

**Session Goal:** Deploy the application to a live environment. Students will learn how to prepare for production, deploy a Node/React app, and configure environment variables.  

**Key Concepts:**  
- Deployment platforms: Vercel(Serverless) and AWS(VM)
- Preparing a Node app for production: setting `NODE_ENV=production`, building React (`npm run build`).  
- Serving React: either via Node (`express.static` for build folder) or separate (deploy frontend and backend separately).  
- Process: pushing code to deploy (e.g. `git push heroku main`), managing environment variables (Heroku’s config vars or `.env`).  
- Monitoring: checking logs, restarting on crashes.  
- Continuous Deployment: auto-deploy on push to main (if set up).  

**Weekly Homework:**  
- **Deploy to Heroku (or chosen platform):** Follow the tutorial to deploy your Node/React app. Verify it’s live and the frontend can talk to the backend.  
- **Environment Variables:** Add a real environment variable (e.g. DB connection string or API key) in production and modify your code to use it. Confirm it works on the live site.  
- **Final Testing:** Test all features on the deployed app (e.g. login, data fetching). Fix any deployment-related bugs (e.g. CORS, file paths).  
- **Mini-Project:** Publish the URL of your deployed mini-project for review. Prepare a brief report of the deployment process and any issues encountered.

## Week 12: Capstone Project

**Session Goal:** Guide students in applying everything learned to a final capstone project. This week focuses on project planning, implementation, and presentation.  

**Key Concepts:**  
- Fullstack integration: combining React frontend with Node/Express backend and database.  
- Project planning: defining scope, milestones, and tasks.  
- Code quality and testing in a larger project.  
- Deployment and future improvements.  

**Weekly Homework (Capstone Tasks):**  
- **Capstone Start:** Finalize the project idea and outline features. Set up the repository and initial commit (basic file structure).  
- **Midterm Checkpoint:** (By mid-week) Have an MVP running locally (e.g. basic routes and UI). Share progress with instructor/peers for feedback.  
- **Final Submission:** Complete all features, write unit/integration tests, lint the code, and deploy the app publicly. Prepare a short presentation/demo for the deadline.  
- **Deliverables:** Working web app URL, GitHub repo link, brief presentation (e.g. slides or video demo).  

## Overall Timeline & Milestones

- **Week 1-2 (Setup & Node Basics):** Complete environment setup, JavaScript refresh, and basic Node server (milestone: HelloWorld server running).  
- **Week 3-4 (Async & Express):** Build understanding of async patterns and create a REST API with Express (milestone: a working multi-route API).  
- **Week 5 (Database Integration):** Connect the API to a database. Milestone: persistent storage for data (e.g. items saved in MongoDB).  
- **Week 6-7 (Frontend Foundations & React):** Develop static pages and React components. Milestone: a basic React app (e.g. a list or form) running in the browser.  
- **Week 8 (Integration & Auth):** Link React frontend to Express backend and implement user authentication. Milestone: registered user can log in and access protected features.  
- **Week 9 (Testing & Quality):** Add automated tests and code quality tools. Milestone: passing test suite and linting for all components.  
- **Week 10 (Git Collaboration):** Use Git/GitHub to manage code. Milestone: collaborative workflow with branches and pull requests, no major merge conflicts.  
- **Week 11 (Deployment):** Deploy the fullstack app to a public URL. Milestone: live site accessible, environment variables configured.  
- **Week 12 (Capstone):** Final integration and polish. **Capstone Demo & Deadline:** Final project submitted and presented.  