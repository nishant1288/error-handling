import express from 'express';
import { newUser } from '../controllers/userController.js';

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        message : 'Get Message'
    })
})

router.get("/new", newUser)

export default router;