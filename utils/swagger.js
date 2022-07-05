const swaggerJsDoc = require("swagger-jsdoc");

//Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employee Api",
      description: "Employee Api Information",
      contact: {
        name: "Amazing developer",
      },
      servers: [
        {
          url: "http://localhost:8888",
        },
      ],
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
