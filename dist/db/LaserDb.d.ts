declare type Address = string;
export declare type OffChainTransaction = {
    wallet: Address;
    to: Address;
    value: string;
    callData: string;
    nonce: string;
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
