/* <--- Import ---> */

const ms = require('ms');
const fetch = require('node-fetch');
const clr = require('colors');

const config = require('../config.json');
const realDate = require('../functions/realDate.js')


/* <--- Event ---> */

module.exports = {
    name: 'ready',

    execute(client) {

        /* <--- on-ready ---> */

        console.log(`> ` + clr.brightCyan(`[${realDate()}]`) + ` Bot logged in successfully.\n`);

    }
};