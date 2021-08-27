const jwt = require('jsonwebtoken');
const request = require('request-promise');
const User = require('../domain/model/auth.model');

// Registro de usuarios
const register = async (req, res) => {
  console.log('Registrando usuario');
  const { recaptchaToken } = req.body;
  const captchaSecretKey = process.env.SECRETKEY;
  const userIp = process.env.USERIP;

  request
    .get({
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecretKey}&response=${recaptchaToken}&remoteip=${userIp}`,
    })
    // eslint-disable-next-line consistent-return
    .then(async (response) => {
      if (response.success === false) {
        return res.json({
          success: false,
          error: 'Recaptcha token validation failed',
        });
      }
      const {
        email,
        username,
        password,
      } = req.body;

      if (password.length < 4) {
        res.status(401).send('La contraseña debe tener más de 4 caracteres');
      } else {
        const emailUser = await User.findOne({
          email,
        });

        if (emailUser) {
          res.status(401).send('El email ya está en uso');
        } else {
          const newUser = new User({
            email,
            username,
            password,
          });

          //! se deja comentada esta función ya que no se va a encriptar la contraseña
          // hasta que se defina el sistema de roles
          // newUser.password = await newUser.encryptPassword(password);
          await newUser.save();

          const token = jwt.sign({
            _id: newUser._id,
          },
          'secretKey');

          res.json({
            message: 'Usuario registrado correctamente',
            token,
            user: newUser._id,
          });
        }
      }
    });
};

// Login de usuarios
const login = async (req, res) => {
  /*
     ** Validación del captcha
     */
  const { recaptchaToken } = req.body;
  const captchaSecretKey = process.env.SECRETKEY;
  const userIp = process.env.USERIP;

  request
    .get({
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecretKey}&response=${recaptchaToken}&remoteip=${userIp}`,
    })
    .then(async (response) => {
      if (response.success === false) {
        return res.json({
          success: false,
          error: 'Recaptcha token validation failed',
        });
      }

      const { email } = req.body;

      const user = await User.findOne({
        email,
      });

      if (!user) {
        return res.status(401).send('El email no existe');
      }

      // Se comenta hasa que se defina el sistema de roles de la app
      // const match = await user.matchPassword(password);

      // if (match) {
      //     const token = jwt.sign({
      //             _id: user._id,
      //         },
      //         "secretKey"
      //     );
      //     req.session.user_id = user._id;
      //
      //     return res.json({
      //         status: 200,
      //         token,
      //     });
      // }

      if (req.body.password === user.password) {
        const token = jwt.sign({
          _id: user._id,
        },
        'secretKey');
        req.session.user_id = user._id;

        return res.json({
          status: 200,
          token,
          user: user._id,
        });
      }

      return res.status(401).send('La contraseña no coincide');
    });
};

// Función de prueba
const privateRoute = (req, res) => {
  res.json({
    message: 'ruta privada',
  });
};

// Validación del token
function verifyToken(req, res, next) {
  // console.log("req.headers.authorization", req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send('unauthorized request!');
  }

  const token = req.headers.authorization.split(' ')[1];

  if (token === 'null') {
    return res.status(401).send('unauthorized request!');
  }

  const payload = jwt.verify(token, 'secretKey');

  req.user_id = payload._id;
  next();
  return req.user_id;
}

module.exports = {
  register,
  login,
  privateRoute,
  verifyToken,
};
