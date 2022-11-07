import { Router } from "express";
import * as SalesController from "../Controller/salesController"
import { verifyUserToken } from "../middlewares/verifyToken";

const route= Router();
route.use(verifyUserToken);
route.route("/")
.post(SalesController.createController)
.get(SalesController.getAllController);

route.route("/:id")
.patch(SalesController.updateOneController)
.get(SalesController.getOneController)
.delete(SalesController.deleteOneController);


export default route;