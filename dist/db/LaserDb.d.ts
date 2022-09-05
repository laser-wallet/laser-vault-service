import { BigNumberish } from "ethers";
declare type Address = string;
export declare type OffChainTransaction = {
    wallet: Address;
    to: Address;
    value: BigNumberish | Number;
    callData: string;
    nonce: BigNumberish;
    signatures: string;
    signer: string;
    chain: string;
    transactionType: string;
    description?: string;
};
export declare class LaserDB {
    private _db;
    constructor();
    get(addressWithNonce: string): Promise<OffChainTransaction>;
    getAllTransactions(_address: Address): Promise<OffChainTransaction[]>;
    write(tx: OffChainTransaction): Promise<void>;
}
export {};
