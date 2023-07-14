const jwt = require('jsonwebtoken');

const authVerify = (req, res, next) => {
  console.log(req.header(process.env.TOKEN_HEADER_KEY));
  try {
    const verified = jwt.verify(
      req.header(process.env.TOKEN_HEADER_KEY),
      process.env.JWT_SECRET_KEY
    );
    console.log('verified ::');
    console.log(verified);
    next();
  } catch (error) {
    console.log('e', error);
    res.status(401).send(error);
  }
};

module.exports = authVerify;
