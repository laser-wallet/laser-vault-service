import { BigNumberish, Signer } from "ethers";
export declare type Schedule = "fast";
export declare type InfuraSignedTransaction = {
    to: string;
    data: string;
    gas: BigNumberish;
    chainId: number;
    schedule: Schedule;
};
export declare function signRequest(signer: Signer, tx: InfuraSignedTransaction): Promise<string>;
