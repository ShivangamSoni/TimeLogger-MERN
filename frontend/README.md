# Time Logger Front-End

I've used Styled Components for Styling, Material UI for Input Components, redux, react-redux & redux-thunk for State Management and react-router for Routing.

## Pages

-   [Home](./src/Pages/Home/index.js)
-   [Listing](./src/Pages/Listing/index.js)
-   [NotFound](./src/Pages/NotFound/index.js)

## Components

-   [Header](./src/Components/Header/index.js)
-   [Navbar](./src/Components/Navbar/index.js)
-   [ListItem](./src/Components/ListItem/index.js)

## Using the Project:

Install all the Project Dependencies using the following command:

```bash
$ yarn

---or Using NPM---

$ npm install
```

Create a **.env** file in root folder & set the variable **_REACT_APP_BASE_URL_**. This Environment Variable is used for making API Calls.

```env
REACT_APP_BASE_URL=<Base URL of the Backend>
```

Starting the Project:

```bash
$ yarn start

--or--

$ npm run start
```

Building the Project:

```bash
$ yarn build

--or--

$ npm run build
```
