"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const createWallet_dto_1 = require("./dtos/createWallet.dto");
const sendTransactionDto_1 = require("./dtos/sendTransactionDto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    sendTransaction(sendTransactionDto) {
        return this.appService.sendTransaction(sendTransactionDto.sender, sendTransactionDto.chainId, sendTransactionDto.transaction);
    }
    createWallet(createWalletDto) {
        return this.appService.createWallet(createWalletDto.chainId, createWalletDto.transaction);
    }
};
__decorate([
    (0, common_1.Post)("transactions"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sendTransactionDto_1.SendTransactionDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "sendTransaction", null);
__decorate([
    (0, common_1.Post)("wallets"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createWallet_dto_1.CreateWalletDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createWallet", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map