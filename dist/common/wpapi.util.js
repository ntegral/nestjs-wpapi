"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WPAPI = require("wpapi");
function createWpApiClient(options) {
    const client = new WPAPI(options);
    return client;
}
exports.createWpApiClient = createWpApiClient;
