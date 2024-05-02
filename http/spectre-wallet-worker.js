export * from "@spectre/wallet-worker";

let a = 0;
export const test = ()=>{ console.log("test::::", a++)}
/*
//let lib = require("bitcore-lib")
//let lib2 = require("../../spectre-wallet/node_modules/bitcore-lib")

//import lib from "../../spectre-wallet/node_modules/bitcore-lib";
//import lib2 from "../../spectre-wallet/node_modules/bitcore-lib";

import a from './a.js';
import b from './a.js';
import c from './a.js';
import e from './a.js';
let test = ()=>{
	//let lib = require("../../spectre-wallet/node_modules/bitcore-lib")
	//let lib2 = require("../../spectre-wallet/node_modules/bitcore-lib")
	
	a.test();
	b.test();
	c.test();
	e.test();
	//require("./a.js")();
	//require("./a.js")();
	//require("./a.js")();
	//require("./a.js")();
}
module.exports = {test};
*/
