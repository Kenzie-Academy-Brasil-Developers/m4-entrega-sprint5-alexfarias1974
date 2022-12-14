import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import softDeleteUserController from "../controllers/users/softDeleteUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";
import isAdmValidatorMiddleware from "../middlewares/isAdmValidator.middleware";
import isIdValidatorMiddleware from "../middlewares/isIdValidator.middleware";
import validationBodyPatchMiddleware from "../middlewares/validationBodyPatch.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", getAuthMiddleware, isAdmValidatorMiddleware, listUsersController);

userRoutes.delete("/:id", getAuthMiddleware, isAdmValidatorMiddleware, isIdValidatorMiddleware, softDeleteUserController);
userRoutes.patch("/:id", getAuthMiddleware, isAdmValidatorMiddleware, validationBodyPatchMiddleware, updateUserController);

export default userRoutes;