const axios = require('axios');

const validate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'No token provided',
      validated: false
    });
  }

  try {
    const userData = await axios.get({
      baseURL: 'http://localhost:5050',
      url: '/token/validate',
      method: 'get',
      headers: {
        authorization: token
      },
    });

    req.id = userData.data.id;
  }
  catch (error) {
    return res.json({
      message: 'auth issue'
    });
  }
  next();
};

module.exports = { validate };