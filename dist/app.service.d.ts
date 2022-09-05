import { OffChainTransaction } from "./db/LaserDb";
import { Address } from "laser-sdk/dist/types";
export declare class AppService {
    updateDb(tx: OffChainTransaction): Promise<number>;
    getTransactions(address: Address): Promise<OffChainTransaction[]>;
}
