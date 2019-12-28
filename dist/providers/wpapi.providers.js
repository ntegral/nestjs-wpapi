"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
function createWpApiProviders(options) {
    return {
        provide: common_1.WPAPI_TOKEN,
        useValue: common_1.createWpApiClient(options),
    };
}
exports.createWpApiProviders = createWpApiProviders;
