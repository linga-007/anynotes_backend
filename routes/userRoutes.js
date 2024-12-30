import express from 'express';
import registerUser from '../controllers/registerUser.js';
import passport from 'passport';

const router = express.Router();

router.post('/login', passport.authenticate('local', {
    successRedirect: '/notes', 
    failureRedirect: '/login',  
    failureFlash: true 
}));

export default router;