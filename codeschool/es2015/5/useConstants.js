// import {MAX_REPLIES, MAX_USERS} from './constants';

let consts = require("./constants.js");

console.log(consts.MAX_USERS, consts.MAX_REPLIES);

consts.MAX_USERS = 4;

console.log(consts.MAX_USERS, consts.MAX_REPLIES);