import { LaserDB, OffChainTransaction } from "./db/LaserDb";
import { Address } from "laser-sdk/dist/types";
export declare class AppService {
    db: LaserDB;
    constructor();
    updateDb(tx: OffChainTransaction): Promise<number>;
    getTransactions(address: Address): Promise<OffChainTransaction[]>;
}
