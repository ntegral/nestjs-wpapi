"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const wpapi_constants_1 = require("./wpapi.constants");
function InjectWpApi() {
    return common_1.Inject(wpapi_constants_1.WPAPI_TOKEN);
}
exports.InjectWpApi = InjectWpApi;
