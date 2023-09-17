<!-- [![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/tH9UoxKB) -->
<a name="readme-top"></a>
<br />
<div align="center">
  <h2 align="center">JBApp</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#cloning-the-repository">Cloning the Repository</a></li>
        <li><a href="#installing-npm">Installing NPM</a></li>
        <li><a href="#project-setup">Project Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>

  </ol>
</details>

## About The Application
<img src="/Demo/homepage.png">

JBApp is an web application designed to bridge the gap between dedicated job seekers and reputable employers. Crafted with precision using Express.js for its robust backend, EJS templates for a seamless user experience, and MongoDB for reliable data storage.

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

### Built With
* [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
* [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)]([https://nodejs.org/en])
* [![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)]([https://jquery.com/])
* [![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)]([https://getbootstrap.com/])
* [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)]([https://www.mongodb.com/])
* [![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)]([https://jwt.io/])

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

## Getting Started

### Cloning the Repository:
Clone the repository using the command:
```bash
git clone https://github.com/jhu-oose-f23/homework-1-PrimoKu.git
```

<!-- ### Technologies Used:
- Express.js: \
A minimalist web framework for Node.js, allowing us to set up middleware to respond to HTTP requests, define routing, and interact with our database seamlessly.
- EJS (Embedded JavaScript Templates): \
A templating engine that lets us generate HTML with plain JavaScript. It simplifies the creation of dynamic and reusable UI components.
- MongoDB: \
A NoSQL database that stores data in JSON-like format. It's highly scalable and flexible, ensuring reliable storage and retrieval of our application data. -->

### Installing NPM:
NPM (Node Package Manager) is essential for managing dependencies in our project. Here's how to get it:

#### - Windows & Mac:
1. Install Node.js: \
Download the installer from <ins>**[Node.js official website]([https://nodejs.org/en])**</ins>. This will install both Node.js and npm. Follow the prompts in the installer to complete the installation.

2. Verify Installation:
    - Open your terminal or command prompt.
    - Enter `node -v` and `npm -v`.
    - If both commands return a version number, you're good to go!

#### - Linux:
1. Using Package Manager:
    - For Debian and Ubuntu based destributions, use:
        ```bash
        sudo apt update
        sudo apt install nodejs npm
        ```
    - For Red Hat based distributions, use:
        ```bash
        sudo yum install nodejs npm
        ```
2. Verify Installation:
    - Open your terminal.
    - Enter `node -v` and `npm -v`.
    - If both commands return a version number, the installation was successful!

### Project Setup:
#### 1. Installing Dependencies:
Once you've cloned the repository and have `npm` installed, navigate into the directory and install the project's dependencies.
```bash
npm install
```
#### 2. Setting Up the `.env` File:
Configuration variables, such as local host port, database connection strings, or secret keys, are often stored in environment variables for security. In local development, these are often loaded from an `.env` file.

- Start by copying the provided `.env.example` file to create your own `.env` file.
- Populate the `.env` file based on the guildlines below:
    - `APP_ENV`: \
    Set this to `'development'` for local development.
    - `LocalHostPort`: \
    Specify the port you'd like the server to run on. E.g., 3000.
    - `DB_CONNECTION_STRING`: \
    This is the connection string for MongoDB. The connection string for MongoDB is provided in the `.env.example` file. You can use it directly to connect to the provided database.
    - `ACCESS_TOKEN_SECRET`: \
    This is a secret key for token-based authentication. To generate a secret, run the command provided in `.env.example`:
        ```bash
        node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
        ```
        Copy the output and paste it as the value for `ACCESS_TOKEN_SECRET`.

### Usage

#### Running the Application:
After setting up the project (as described in the ["Project Setup"](#project-setup) section), you can run the application using:
```bash
npm start
```
This will start the application, and it should be accessible at `http://localhost:[LocalHostPort]/`, where `[LocalHostPort]` is the port you specified in the `.env` file.

#### Navigating the Application:
1. **Home Page:** Access all job listings. Use the search bar to refine your search based on keywords, job title, job type, company, etc.
2. **Login/Register:** Navigate to the top right corner for options to register as a 'Job Seeker' or an 'Employer'. If already registered, simply log in.
3. **My Jobs:** 
    - **For Employers:** Once logged in as an 'Employer', this page lists the jobs you've posted. You have the options to create, update, or delete job posts.
    - **For Job Seekers:** As a 'Job Seeker', the "My Jobs" page lists the jobs you've added to your favorites.

#### Interactions:
1. **Posting a Job:** As an Employer, navigate to the "My Jobs" page and use the "Post New Job" button to create a new job listing.
2. **Adding to Favorites:** On the home page, Job Seekers can see star icons in the first column of each job listing row. Clicking these icons allows you to add jobs to your favorites. Active stars indicate the jobs you've already marked as favorite.

