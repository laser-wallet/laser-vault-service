import { InfuraProvider } from "@ethersproject/providers";
declare type SupportedNetworks = "mainnet" | "goerli" | "kovan" | "ropsten";
export declare function getNetworkName(chainId: number): SupportedNetworks;
export declare function createInfuraITXProvider(network: SupportedNetworks, infuraKey: string): InfuraProvider;
export {};
