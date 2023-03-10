const axios = require('axios');

const validationOfToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'No token provided',
      validated: false
    });
  }

  try {
    const userData = await axios({
      baseURL: 'http://localhost:5050/user',
      url: '/token/validate',
      method: 'get',
      headers: {
        authorization: token
      },
    });
    req.id = userData.data.id;
    next();
  }
  catch (error) {
    return res.json({
      message: 'auth issue'
    });
  }

};

module.exports = { validationOfToken };