const fs = require("fs");
const appRoot = require("app-root-path");

const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`,
    // path.join(__dirname, 'log', 'access.log'),
    { flags: 'a' }
);
 
module.exports = accessLogStream;