import { Injectable } from "@nestjs/common";
import { ethers, providers, Wallet, BigNumberish } from "ethers";
import { encodeFactoryData, encodeWalletData } from "laser-sdk/dist/utils";
import { FactoryTransaction } from "laser-sdk/dist/sdk/LaserFactory";
import { LaserDB, OffChainTransaction } from "./db/LaserDb";
import { Address } from "laser-sdk/dist/types";

@Injectable()
export class AppService {
  async updateDb(tx: OffChainTransaction) {
    const laserDB = new LaserDB();

    try {
      await laserDB.write(tx);
      return 200;
    } catch (e) {
      throw Error(e);
    }
  }

  async getTransactions(address: Address) {
    const laserDB = new LaserDB();

    return laserDB.getAllTransactions(address.toLowerCase());
  }
}
