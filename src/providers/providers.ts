import { ethers } from "ethers";
import { Provider } from "@ethersproject/providers";

require("dotenv").config();

const INFURA_KEY = process.env.INFURA_KEY;

export function getProvider(chain: string): Provider {
  if (INFURA_KEY !== undefined) {
    return new ethers.providers.JsonRpcProvider(
      `https://${chain}.infura.io/v3/${INFURA_KEY}`
    );
  } else {
    return ethers.providers.getDefaultProvider(chain);
  }
}
