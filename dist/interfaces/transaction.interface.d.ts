import { BigNumberish } from "ethers";
export interface Transaction {
    to: string;
    value: BigNumberish;
    callData: string;
    nonce: BigNumberish;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    gasLimit: BigNumberish;
    relayer: string;
    signatures: string;
}
