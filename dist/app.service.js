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
const ethers_1 = require("ethers");
const laser_sdk_1 = require("laser-sdk");
const utils_1 = require("laser-sdk/dist/utils");
const utils_2 = require("./utils/utils");
const providers_1 = require("./providers/providers");
let AppService = class AppService {
    async sendTransaction(sender, chainId, transaction) {
        const data = (0, utils_1.encodeWalletData)(transaction);
        const infuraTx = {
            to: sender,
            data: data,
            gas: transaction.gasLimit.toString(),
            chainId,
            schedule: "fast",
        };
        const networkName = (0, providers_1.getNetworkName)(chainId);
        const relayerProvider = (0, providers_1.createInfuraITXProvider)(networkName, process.env.INFURA_KEY);
        const relayer = new ethers_1.Wallet(`0x${process.env.PRIVATE_KEY}`);
        const signedTransaction = await (0, utils_2.signRequest)(relayer, infuraTx);
        return relayerProvider.send("relay_sendTransaction", [infuraTx, signedTransaction]);
    }
    async createWallet(chainId, transaction) {
        const relayer = new ethers_1.Wallet(`0x${process.env.PRIVATE_KEY}`);
        const data = (0, utils_1.encodeFactoryData)(transaction);
        const networkName = (0, providers_1.getNetworkName)(chainId);
        const provider = new ethers_1.ethers.providers.JsonRpcProvider(`https://${networkName}.infura.io/v3/${process.env.INFURA_KEY}`);
        const factory = new laser_sdk_1.LaserFactory(provider, relayer);
        const factoryAddress = await factory.getAddress();
        const relayerProvider = (0, providers_1.createInfuraITXProvider)(networkName, process.env.INFURA_KEY);
        const infuraTx = {
            to: factoryAddress,
            data: data,
            gas: transaction.gasLimit.toString(),
            chainId,
            schedule: "fast",
        };
        const signedTransaction = await (0, utils_2.signRequest)(relayer, infuraTx);
        return relayerProvider.send("relay_sendTransaction", [infuraTx, signedTransaction]);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map