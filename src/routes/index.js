import kitten from "./kitten";
import employee from "./employee.route";

export default (router) => {
  //import the routes files in the routers directory
  kitten(router); //test
  employee(router); //จัดการบุคลากร

  return router;
};
