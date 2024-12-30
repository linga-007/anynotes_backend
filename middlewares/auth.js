import passport from 'passport';
import { Strategy } from 'passport-local';
import userModel from '../models/usersSchema.js';
import comparePassword from '../utils/comparePassword.js';

passport.use(new Strategy(async (username, password, done) => {
    try {
        const user = await userModel.findOne({ username });

        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }

        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModel.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

export const auth = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
};
