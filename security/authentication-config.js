/**
 * Created by crist on 07/04/2017.
 */
import passport from "passport";
import local from "passport-local";
import bCrypt from "bcrypt-nodejs";
import {DatabaseConnection} from "./../config/database-connection";
import User from "./../models/users-model";

const LocalStrategy = local.Strategy;

class Authentication {

  constructor() {
    this._passport = passport;
  }

  initPassport() {
    // used to serialize the user for the session
    this._passport.serializeUser((user, done) => done(null, user._id));
    // used to deserialize the user
    this._passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)));

    this._passport.use('login', new LocalStrategy({passReqToCallback: true}, (req, username, password, done) => {
      const db = DatabaseConnection.open();
      User.findOne({local: {'username': username}}, (err, user) => {
        DatabaseConnection.close(db);
        console.log(err);
        console.log(user);
        if (err) return done(err);
        // Nome de usuário não existe, logar o erro & redirecione de volta
        if (!user) return done(null, false, req.flash('message', 'Usuário não encontrado.'));
        // Usuário existe mas a senha está errada, logar o erro
        if (!this.isValidPassword(user, password)) return done(null, false, req.flash('message', 'Senha Inválida'));
        // Tanto usuário e senha estão corretos, retorna usuário através
        // do método done, e, agora, será considerado um sucesso
        return done(null, user);
      });
    }));

    this._passport.use('signup', new LocalStrategy({passReqToCallback: true}, (req, username, password, done) => {
        const db = DatabaseConnection.open();
        let findOrCreateUser = () => {
          // find a user in Mongo with provided username
          User.findOne({'username': username}, function (err, user) {
            // In case of any error, return using the done method
            DatabaseConnection.close(db);
            if (err) {
              console.log('Error in SignUp: ' + err);
              return done(err);
            }
            // already exists
            if (user) {
              console.log('User already exists with username: ' + username);
              return done(null, false, req.flash('message', 'User Already Exists'));
            } else {
              // if there is no user with that email
              // create the user
              const newUser = new User();

              // set the user's local credentials
              newUser.local.username = username;
              newUser.local.password = authentication.createHash(password);

              // save the user
              newUser.save(function (err) {
                if (err) {
                  console.log('Error in Saving user: ' + err);
                  throw err;
                }
                console.log('User Registration succesful');
                return done(null, newUser);
              });
            }
          });
        };
        // Delay the execution of findOrCreateUser and execute the method
        // in the next tick of the event loop
        process.nextTick(findOrCreateUser);
      })
    );
  }

  isValidPassword(user, password) {
    return bCrypt.compareSync(password, user.password);
  }

  // Generates hash using bCrypt
  createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  }

  get passport() {
    return this._passport;
  }
}

export const authentication = new Authentication();