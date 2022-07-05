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
 *     - Add Employee
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



/**
 * @openapi
 * '/api/emp/updatedata/{id}':
 *  patch:
 *     tags:
 *     - Update employee
 *     summary: Update employee data
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the employee
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *            properties:
 *              id:
 *                type: string
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */



//Get data
router.get("/getdata", mainController.getAllUserController);

//Post data
router.post("/postdata", mainController.postEmpData);

//Update data
router.patch("/updatedata/:id", mainController.updateEmpData);

//Exporting routes
module.exports = router;
