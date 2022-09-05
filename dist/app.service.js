"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const LaserDb_1 = require("./db/LaserDb");
let AppService = class AppService {
    async updateDb(tx) {
        const laserDB = new LaserDb_1.LaserDB();
        try {
            await laserDB.write(tx);
            return 200;
        }
        catch (e) {
            throw Error(e);
        }
    }
    async getTransactions(address) {
        const laserDB = new LaserDb_1.LaserDB();
        return laserDB.getAllTransactions(address.toLowerCase());
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map