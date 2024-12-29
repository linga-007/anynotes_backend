import express from 'express';
import registerUser from '../controllers/registerUser.js';

const router = express.Router();

router.post('/login', registerUser);

export default router;