
export let apikey = "hdsiosdfhsdkmjbncv";
export let dogbone = 123456;
export let fishhead = "glubglubglub"
// only one default export per file. With default, can name variable in importing file
// e.g. default export "hjfsdbfsdikjfsdh"
// in app.js you would --> import apikey from "./util.js"
// can also --> import * as util from "./util.js" --> will pull in all non-default
// exportable variables from util.js. can access specific vars through dot notation
// e.g. console.log(util.apikey)
// can rename in import statement --> import { apikey as content } from "./util.java"