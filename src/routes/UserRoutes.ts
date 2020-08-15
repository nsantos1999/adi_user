import { Router } from 'express';

import UserController from '../controller/UserController';

const router = Router();

const userController = new UserController();

router.get("/", userController.list);
router.get("/search", userController.search);
router.get("/:id", userController.findOne);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

export default router;