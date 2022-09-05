import { BigNumberish } from "ethers";
export declare class PostTransactionDto {
    wallet: string;
    to: string;
    value: BigNumberish;
    callData: string;
    nonce: number;
    signatures: string;
    signer: string;
    chain: string;
    transactionType: string;
    description?: string;
}
