import { BigNumber, BigNumberish } from "ethers";
export declare class FactoryDto {
    owner: string;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    gasLimit: BigNumber;
    relayer: string;
    laserModule: string;
    laserModuleData: string;
    saltNumber: BigNumberish;
    ownerSignature: string;
}
