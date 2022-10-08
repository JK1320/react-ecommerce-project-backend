# react-ecommerce-project-backend
## --------*** first to get json file ***--------
npm init
## -------*** second to install express, mongoose for database, dotenv for env file to store confidential info & nodemon ***--------
npm i express mongoose dotenv nodemon

### ------*** models folder for database schemas for different pages ***--------
### -------*** routes folder for routes => CRUD => create, read, update, delete:    'GET, POST, PUT, DELETE' ***--------
##### ---------*** for password authentication ****----------
=>   cryptoJS to hash password
    - to install cryptoJS =>  npm i crypto-js

#### -----***Had below error at login route***---
node:internal/process/promises:225
          triggerUncaughtException(err, true /* fromPromise */);
          ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:278:15)
    at ServerResponse.setHeader (node:_http_outgoing:563:11)
    at ServerResponse.header (/Users/jas/Documents/GitHub/react-ecommerce-project-backend/node_modules/express/lib/response.js:794:10)
    at ServerResponse.send (/Users/jas/Documents/GitHub/react-ecommerce-project-backend/node_modules/express/lib/response.js:174:12)
    at ServerResponse.json (/Users/jas/Documents/GitHub/react-ecommerce-project-backend/node_modules/express/lib/response.js:278:15)
    at /Users/jas/Documents/GitHub/react-ecommerce-project-backend/routes/auth.js:55:25
    at processTicksAndRejections (node:internal/process/task_queues:93:5) {
  code: 'ERR_HTTP_HEADERS_SENT'
}

=> => => resolved above error by replacing ternary operator with if else statement at login route

==================================

