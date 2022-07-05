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


//Get data
router.get("/getdata", mainController.getAllUserController);

//Exporting routes
module.exports = router;