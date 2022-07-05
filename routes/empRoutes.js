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
 *     - Employee
 *     summary: Add an employee
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *            properties:
 *              name:
 *                type: string
 *                default: siddd
 *              email:
 *                type: string
 *                default: sidd@gmail.com
 *              password:
 *                type: string      
 *                default: assdddd
 *     responses:
 *      201:
 *        description: Employee Added
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

//Get data
router.get("/getdata", mainController.getAllUserController);

//Post data
router.post("/postdata", mainController.postEmpData);

//Exporting routes
module.exports = router;
