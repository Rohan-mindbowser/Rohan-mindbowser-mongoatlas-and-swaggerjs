const empModel = require("../model/empModels");

module.exports = {
  getAllUserController: async (req, res) => {
    try {
      const apiData = await empModel.find({});
      if (apiData) {
        res.status(200).send(apiData);
      } else {
        throw err;
      }
    } catch (error) {
      res.status(404).send(error);
    }
  },
  postEmpData: async (req, res) => {
    res.status(201).send("employee added");
  },
};
