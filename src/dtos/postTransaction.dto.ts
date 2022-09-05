import { Transform } from "class-transformer";
import { Type } from "class-transformer";
import { IsNumber, Validate } from "class-validator";
import { GetTransactionDto } from "./getTransaction.dto.";
import { IsAddress } from "../validators/isAddress.validator";
import { BigNumber, BigNumberish } from "ethers";

export class PostTransactionDto {
  @Validate(IsAddress, { message: "Invalid wallet address" })
  wallet: string;

  @Validate(IsAddress, { message: "Invalid wallet address" })
  to: string;

  @Transform(({ value }) => BigNumber.from(value))
  value: BigNumberish;

  callData: string;

  nonce: number;

  signatures: string;

  signer: string;

  chain: string;

  transactionType: string;

  description?: string;
}
