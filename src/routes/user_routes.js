const UserRoutes = require('express').Router();
const userController = require('./../controllers/user_controller');


UserRoutes.post('/createAccount',userController.createAccount);
UserRoutes.post('/signIn',userController.sighIn);
UserRoutes.put("/:id", userController.updateUser);
UserRoutes.post('/updateProfilePic',userController.updateProfileUser);
module.exports = UserRoutes;
