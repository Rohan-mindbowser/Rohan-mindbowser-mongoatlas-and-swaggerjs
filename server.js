const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const swaggerUiExpress = require("swagger-ui-express");

//Importing swagger configuration
const swaggerDocs = require("./utils/swagger");

//Swagger ui route
app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocs)
);

//Importing DB connection
const connection = require("./config/db_connection");

//Importing employee model
const empModel = require("./model/empModels");

//importing routes
const empRoute = require("./routes/empRoutes");

//setting user routes
app.use("/api/emp", empRoute);

//Checking DB connection here
connection.once("open", function () {
  console.log("MongoDB database connection established successfully...");
});

app.listen(8888, () => {
  console.log("Server running on port 8888...");
});
