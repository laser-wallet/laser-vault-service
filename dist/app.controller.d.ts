import { AppService } from "./app.service";
import { GetTransactionDto } from "./dtos/getTransaction.dto.";
import { PostTransactionDto } from "./dtos/postTransaction.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    postTransaction(postTransactionDto: PostTransactionDto): Promise<number>;
    returnTransactions(getTransactionDto: GetTransactionDto): Promise<import("./db/LaserDb").OffChainTransaction[]>;
    returnHello(name: string): string;
}
