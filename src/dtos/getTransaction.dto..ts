import { Transform } from "class-transformer";
import { Validate } from "class-validator";
import { BigNumber, BigNumberish } from "ethers";
import { IsAddress } from "src/validators/isAddress.validator";

export class GetTransactionDto {
  @Validate(IsAddress, { message: "Invalid address" })
  wallet: string;
}
