const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "rrxU2LKQ#ihXNd79w53ZO1cp-FrvO-pFMEAZ1FPV0U79oOSrvI6Y",
MONGODB: process.env.MONGODB || "enter mongodb url",
};
