# Time Logger Back-End

I've used Express.js for creating API's, MySQL Database & **Sequelize ORM** for interacting with MySQL using node.

## Express/API Code

- [Express](./Express/index.js)
- [Log Route](./Express/Routes/Log.js)
- [Body Required Middleware](./Express/Middleware/bodyRequired.js)

## Database

- [DB Configuration & Connection](./Config/db.js)

## Model

- [Log Model](./Models/Log.js)

## Controller

- [Log Controller](./Controller/Log.js)

## Using the Project:

Install all the Project Dependencies using the following command:

```bash
$ yarn

---or Using NPM---

$ npm install
```

Create the Database. (Table will be created automatically using Sequelize)

Create a **.env** file in root folder & set the following variables:

1. **PORT**: PORT on which the Server will Run.
2. **DB_HOST**: MySQL Server Host Name/Location
3. **DB_USER**: MySQL Database Username. (User should have read & write permissions for the **logs** table)
4. **DB_PASSWORD**: MySQL Users Password
5. **DB_DATABASE**: MySQL Database name

Starting the Project:

```bash
$ yarn start

--or--

$ npm run start
```
