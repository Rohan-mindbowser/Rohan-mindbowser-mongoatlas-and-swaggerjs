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
    const employee = await empModel.create(req.body);
    await employee.save();
    res.status(201).send("Signup success..!!");
  },
  updateEmpData: async (req, res) => {
    const emp = await empModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );

    if (emp) {
      res.status(200).send("update success..!!");
    } else {
      res.status(403).send("Update failed..!!");
    }
  },
};
