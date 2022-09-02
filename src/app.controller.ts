import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { GetTransactionDto } from "./dtos/getTransaction.dto.";
import { PostTransactionDto } from "./dtos/postTransaction.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("transaction")
  postTransaction(@Body() postTransactionDto: PostTransactionDto) {
    return this.appService.updateDb(postTransactionDto);
  }

  @Get("getTransactions")
  returnTransactions(@Body() getTransactionDto: GetTransactionDto) {
    return this.appService.getTransactions(getTransactionDto.wallet);
  }
}
