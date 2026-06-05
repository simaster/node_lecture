"use strict";

const app = require('../app');
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000;
// const PORT = 3000;

app.listen(PORT, () => {
  logger.info(`Example app listening at http://localhost:${PORT}`);
});


