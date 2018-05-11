import Department from "../controllers/employee/department.controller";

export default app => {
  app.route("/department").post(Department.create).get(Department.getAll);
  app.route("/department/:id").delete(Department.delete).put(Department.update);
};
