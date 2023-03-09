const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(express.json());
app.use(cors());
const recordRoute = require('./src/routes/recordRoute');
app.use('/record', recordRoute);
app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});
