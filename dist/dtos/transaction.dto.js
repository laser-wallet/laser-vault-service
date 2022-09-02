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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const ethers_1 = require("ethers");
const isAddress_validator_1 = require("../validators/isAddress.validator");
class TransactionDto {
}
__decorate([
    (0, class_validator_1.Validate)(isAddress_validator_1.IsAddress, { message: "Invalid address" }),
    __metadata("design:type", String)
], TransactionDto.prototype, "to", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => ethers_1.BigNumber.from(value)),
    __metadata("design:type", Object)
], TransactionDto.prototype, "value", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => ethers_1.BigNumber.from(value)),
    __metadata("design:type", ethers_1.BigNumber)
], TransactionDto.prototype, "maxFeePerGas", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => ethers_1.BigNumber.from(value)),
    __metadata("design:type", ethers_1.BigNumber)
], TransactionDto.prototype, "maxPriorityFeePerGas", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => ethers_1.BigNumber.from(value)),
    __metadata("design:type", ethers_1.BigNumber)
], TransactionDto.prototype, "gasLimit", void 0);
__decorate([
    (0, class_validator_1.Validate)(isAddress_validator_1.IsAddress, { message: "Invalid address" }),
    __metadata("design:type", String)
], TransactionDto.prototype, "relayer", void 0);
exports.TransactionDto = TransactionDto;
//# sourceMappingURL=transaction.dto.js.map