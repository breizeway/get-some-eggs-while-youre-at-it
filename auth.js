const { User } = require('./db/models');

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
      return res.redirect('/users/login');
    }
    return next();
  };

  const restoreUser = async (req, res, next) => {
    if (req.session.user) {
      const currUser = req.session.user;

      try {
        const user = await User.findByPk(currUser.id);

        if (user) {
          res.locals.authenticated = true;
          res.locals.user = user;
          next();
        }
      } catch (err) {l
        res.locals.authenticated = false;
        next(err);
      }
    } else {
      res.locals.authenticated = false;
      next();
    }
  };

  module.exports = { restoreUser, requireAuth };
