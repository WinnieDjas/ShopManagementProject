import { Router } from "express";
import * as PurchaseController from "../Controller/purchaseController"
// import { verifyUserToken } from "../middlewares/verifyToken";

const route= Router();
// route.use(verifyUserToken);
route.route("/")
.post(PurchaseController.createController)
.get(PurchaseController.getAllController);

route.route("/:id")
.patch(PurchaseController.updateOneController)
.get(PurchaseController.getOneController)
.delete(PurchaseController.deleteOneController);


export default route;