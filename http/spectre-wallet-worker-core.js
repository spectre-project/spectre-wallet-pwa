//import "@spectre/wallet-worker/worker.js";
//if(typeof window == 'undefined')
	globalThis['window'] = globalThis;

require("@spectre/wallet-worker/worker.js")
