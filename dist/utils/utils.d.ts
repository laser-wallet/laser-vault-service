import { OffChainTransaction } from "../db/LaserDb";
export declare function verifyTransactions(tx1: OffChainTransaction, tx2: OffChainTransaction): void;
export declare function bundleTransactions(tr1: OffChainTransaction, tr2: OffChainTransaction): OffChainTransaction;
