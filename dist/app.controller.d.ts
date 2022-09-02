import { AppService } from "./app.service";
import { CreateWalletDto } from "./dtos/createWallet.dto";
import { SendTransactionDto } from "./dtos/sendTransactionDto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendTransaction(sendTransactionDto: SendTransactionDto): Promise<any>;
    createWallet(createWalletDto: CreateWalletDto): Promise<any>;
}
