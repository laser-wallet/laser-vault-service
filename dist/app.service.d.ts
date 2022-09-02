import { FactoryTransaction } from "laser-sdk/dist/sdk/LaserFactory";
import { Transaction } from "./interfaces/transaction.interface";
export declare class AppService {
    sendTransaction(sender: string, chainId: number, transaction: Transaction): Promise<any>;
    createWallet(chainId: number, transaction: FactoryTransaction): Promise<any>;
}
