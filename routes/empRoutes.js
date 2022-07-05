const router = require("express").Router();

//Importing employees model
const empModel = require("../model/empModels");

//Importing Controllers
const mainController = require("../controllers/mainController");

/**
 * @openapi
 * /api/emp/getdata:
 *  get:
 *     tags:
 *     - Get all Employees
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */

/**
 * @openapi
 * /api/emp/postdata:
 *  post:
 *     tags:
 *     - Post employee data
 *     description: Returns API operational status
 *     responses:
 *       201:
 *         description: API is  running
 */

//Get data
router.get("/getdata", mainController.getAllUserController);

//Post data
router.post("/postdata", mainController.postEmpData);

//Exporting routes
module.exports = router;
