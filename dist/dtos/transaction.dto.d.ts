import { BigNumber, BigNumberish } from "ethers";
export declare class TransactionDto {
    to: string;
    value: BigNumberish;
    callData: string;
    nonce: number;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    gasLimit: BigNumber;
    relayer: string;
    signatures: string;
}
