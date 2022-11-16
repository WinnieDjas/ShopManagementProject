import { Router } from "express";
import * as ProductController from "../Controller/productController"
// import { verifyUserToken } from "../middlewares/verifyToken";

const route= Router();
// route.use(verifyUserToken);
route.route("/")
.post(ProductController.createController)
.get(ProductController.getAllController);

route.route("/:id")
.patch(ProductController.updateOneController)
.get(ProductController.getOneController)
.delete(ProductController.deleteOneController);


export default route;