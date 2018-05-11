import Department from "../../models/employee/department.model";
import { pagination } from "../../helpers/utility";

class DepartmentCtrl {
  async getAll(req, res) {
    try {
      const { name, current, pageSize } = req.query;
      let departments = [];
      let numOfDept = 0;
      const { skip, limit } = pagination({ current, pageSize });
      if (!name) {
        departments = await Department.find({})
          .sort("name")
          .select("name desc")
          .skip(skip)
          .limit(limit)
          .exec();
        numOfDept = await Department.count({});
      } else {
        departments = await Department.find({ name: { $regex: `.*${name}.*` } })
          .sort("name")
          .select("name desc")
          .exec();
        numOfDept = await Department.count({ name: { $regex: `.*${name}.*` } });
      }
      res.status(200).json({ success: true, data: departments, numOfDept });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  create = async (req, res) => {
    try {
      this.validateRequest(req);

      const Data = new Department(req.body);
      await Data.save();

      res.status(201).json({ success: true, message: "บันทึกข้อมูลเรียบร้อย" });
    } catch (err) {
      if (err.code === 11000) {
        res.status(422).json({ success: false, message: "ข้อมูลแผนกนี้มีในระบบแล้ว" });
      } else {
        res.status(400).json({ success: false, message: err });
      }
    }
  };

  update = async (req, res, next) => {
    try {
      this.validateRequest(req);

      await Department.findByIdAndUpdate(req.params.id, req.body);

      res.status(200).json({ success: false, message: "แก้ไขข้อมูลเรียบร้อย" });
    } catch (err) {
      next({ status: 400, err });
    }
  };

  validateRequest(req) {
    req.check("name", "กรุณาใส่ชื่อแผนก").notEmpty();
    const errors = req.validationErrors();
    if (errors) throw errors[0].msg;
  }

  async delete(req, res, next) {
    try {
      await Department.findByIdAndRemove(req.params.id);
      res.status(200).json({ success: true, message: "ลบข้อมูลเรียบร้อย" });
    } catch (err) {
      next({ status: 400, err });
    }
  }
}

export default new DepartmentCtrl();
