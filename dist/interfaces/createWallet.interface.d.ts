import { BigNumberish } from "ethers";
export interface FactoryTransaction {
    owner: string;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    gasLimit: BigNumberish;
    relayer: string;
    laserModule: string;
    laserModuleData: string;
    saltNumber: BigNumberish;
    ownerSignature: string;
}
