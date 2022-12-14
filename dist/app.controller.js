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
const getTransaction_dto_1 = require("./dtos/getTransaction.dto.");
const postTransaction_dto_1 = require("./dtos/postTransaction.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    postTransaction(postTransactionDto) {
        return this.appService.updateDb(postTransactionDto);
    }
    returnTransactions(getTransactionDto) {
        console.log("wallet -->", getTransactionDto.wallet);
        return this.appService.getTransactions(getTransactionDto.wallet);
    }
    returnHello(name) {
        return "hey there working";
    }
};
__decorate([
    (0, common_1.Post)("transaction"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postTransaction_dto_1.PostTransactionDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "postTransaction", null);
__decorate([
    (0, common_1.Get)("get-transactions"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getTransaction_dto_1.GetTransactionDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "returnTransactions", null);
__decorate([
    (0, common_1.Get)("hello"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "returnHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map