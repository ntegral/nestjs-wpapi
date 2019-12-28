"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WpApiModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const wpapi_core_module_1 = require("./wpapi-core.module");
let WpApiModule = WpApiModule_1 = class WpApiModule {
    static forRoot(options) {
        return {
            module: WpApiModule_1,
            imports: [wpapi_core_module_1.WpApiCoreModule.forRoot(options)],
        };
    }
    static forRootAsync(options) {
        return {
            module: WpApiModule_1,
            imports: [wpapi_core_module_1.WpApiCoreModule.forRootAsync(options)],
        };
    }
};
WpApiModule = WpApiModule_1 = __decorate([
    common_1.Module({})
], WpApiModule);
exports.WpApiModule = WpApiModule;
