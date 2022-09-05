# Master Calculator

Node.js express application that implements certain functionality in different paths.

## Installation

```bash
npm install
```

## Usage

```bash
npm run start
```

## Project Components

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- | 
| **client_input**         |  Prepared input files for the client app usage.                                               |
| **curl_test**            |  Contains 2 repositories for different run modes – JSON/HTML Each repository includes input files for CURL   usage.                                                                       | 
| **node_modules**         | Contains the installed packages: express, mongoose, pug, dotenv and the devDependencies: eslint and readme-md-generator                                                                                                        |
| **src**                  | Contains the source code                                                                      |
| **src/models**           | Contains student model file and log model file                                                |
| **src/public**           | Contains the main CSS file and 404 error file                                                 |
| **src/routes**           | Contains the router file (the response for every path and method)                             |
| **views**                | Contains all Pug files (responsible for the HTML template)                                    |
| .env.example             | Contains my environment variables                                                             |
| .eslintrc.js             | Config settings for ESLint to checks code integrity                                           |
| .gitignore               | Config settings for my git repository that tells git not to track certain files and folders that i don't want being uploaded to my main repository.    |                                                                                             
| package.json             | File that contains metadata relevant to the project and it is used for managing the project's dependencies, scripts, version and more.  |                                                                                               |
| server.js               | The main file and the starting point of the server application                                |
| client.js               | The main file of the client application                                                       |
| httpJSONRequest.js      | JS file that work with any type of HTTP request. Work in JSON mode only and receieve only JSON strings (not buffers) and return only the body (the payload) and not the HTTP headers.                                                           |        

## Author

👤 **Shai Geffen**

* Github: [@shai987](https://github.com/shai987)
* LinkedIn: [@Shai Geffen](https://linkedin.com/in/shai-geffen-24373721a)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/shai987/
Master-calculator/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Shai Geffen](https://github.com/shai987).<br />
This project is [MIT](https://github.com/shai987/Master-calculator/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_