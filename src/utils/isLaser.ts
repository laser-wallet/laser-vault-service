import { ethers, utils } from "ethers";

import { getProvider, Chain } from "../provider/getProvider";

// bytes4(keccak256("I_AM_LASER"))
const hash = utils.keccak256(utils.toUtf8Bytes("I_AM_LASER"));
const magicValue = hash.slice(0, 10);

const abi = [
  "function supportsInterface(bytes4) external view returns (bool) ",
];

// This can easily be bypassed, but it acts as a regular filter for the db.
export async function isLaser(address: string, chain: Chain): Promise<Boolean> {
  const provider = getProvider(chain);

  const contract = new ethers.Contract(address, abi, provider);

  const ERROR = "Address is not a Laser contract.";

  try {
    const response = await contract.supportsInterface(magicValue);
    if (response.toLowerCase() === magicValue.toLowerCase()) return true;
    else throw Error(ERROR);
  } catch (e) {
    throw Error(ERROR);
  }
}
