import { TransactionDto } from "./transaction.dto";
export declare class SendTransactionDto {
    sender: string;
    chainId: number;
    transaction: TransactionDto;
}
