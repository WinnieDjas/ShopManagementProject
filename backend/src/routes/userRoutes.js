import { Router } from "express";
import * as UserController from "../Controller/userCotnroller"
import { checkUser,loginUser } from "../middlewares/checkUserExist";


const route= Router();

route.post("/login",loginUser);

route.route("/")
.post(checkUser,UserController.createController)
.get(UserController.getAllController);

route.route("/:id")
.patch(UserController.updateOneController)
.get(UserController.getOneController)
.delete(UserController.deleteOneController);


export default route;