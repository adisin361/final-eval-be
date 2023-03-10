const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(express.json());
app.use(cors());
const recordRoutes = require('./src/routes/recordRoute');
app.use('/record', recordRoutes);

const collectionRoutes = require('./src/routes/collectionRoute');
app.use('/collection', collectionRoutes);

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});
