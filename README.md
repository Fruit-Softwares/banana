# Banana Project (WIKI & ~~THIS README~~ IS OUTDATED)

This is a one-page documentation for the Banana Project. This project is primarily made for the HKUGA College student-ran 'College Insider'. Please edit to fit usage purposes when forked.

WIKI:
[Wiki](https://github.com/DashingNights/banana/wiki)
DEMO:
[DEMO: https://insider.argus10q.live](https://insider.argus10q.live)

## Adding to your phone home-screen

[Guide](https://www.macrumors.com/how-to/add-a-web-link-to-home-screen-iphone-ipad/)

## Overview

The Banana Project is a website that allows users to read and write articles. The project has both front-end and back-end components, and it is built using Node.js, Express.js, and MongoDB.

## Getting Started

To run the Banana Project, follow the instructions below:

1. Clone the repository using the following command:

`git clone https://github.com/DashingNights/banana.git`

2. Install the dependencies using the following command:

`npm install`

3. Install MongoDB

[Installing MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)

4. Create the config.js file in the root directory and add the following code:

```javascript
const config = {
  Mongodb: {
    host: "127.0.0.1",
    name: "PROD",
  },
  Session: {
    //Create a web session token (google please)
    token: "token",
  },
  Discord: {
    //THIS IS FOR BUG REPORTING
    webhook: "https://discord.com/api/webhooks/CHANGE_THIS_LINK",
    //THIS IS FOR LOGGING
    webhook2: "https://discord.com/api/webhooks/CHANGE_THIS_LINK",
    //THESE FEATURES CAN ONLY BE TURNED OFF ( IN CODE ) IF YOU KNOW WHAT YOU ARE DOING, PLEASE DO NOT TURN THEM OFF IF YOU DO NOT KNOW WHAT YOU ARE DOING, HAVING A LOGGING SYSTEM IS VERY IMPORTANT FOR DEBUGGING
  },
  auth0: {
    management: {
      domain: "domain here.auth0.com",
      clientId: "AAAAAAAAAA",
      clientSecret: "AAAAAAAAAA",
      scope: "read:role_members read:users",
    },
    config: {
      authRequired: false,
      auth0Logout: true,
      baseURL: 'https://URL',
      clientID: 'AAAAAAAAAA',
      issuerBaseURL: 'https://domain here.auth0.com',
//completely randomly generated string
      secret: 'AAAAAAAAAAAA'
    },
  },
};
module.exports = config;
```

5. Start the server using the following command:

`npm start`

6. Access the website at `http://localhost:1234`

## Front-end

The front-end of the Banana Project is built using HTML, CSS, and JavaScript. The front-end code is located in the `views` directory. The `views` directory contains the files.

## Back-end

The back-end of the Banana Project is built using Node.js, Express.js, and MongoDB. The back-end code is located in the `routes` and `models` directories.

### Routes

The `routes` directory contains the following file(s):

- `articles.js`: The file that defines the routes for handling articles.

The routes are responsible for handling incoming HTTP requests and returning responses to the client. The routes use the models to interact with the database.

### Models

The `models` directory contains the following files:

- `article.js`: The file that defines the schema and model for articles.

The models are responsible for interacting with the database. They define the schemas for the data and provide methods for querying and modifying the data.

## Authentication

This project uses the [Auth0](https://auth0.com/) service for authentication. 
## Conclusion

The Banana Project is a website that allows users to read and write articles. The project has both front-end and back-end components, and it is built using Node.js, Express.js, and MongoDB. 
