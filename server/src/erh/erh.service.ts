import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ErhServiceBase } from "./base/erh.service.base";

@Injectable()
export class ErhService extends ErhServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
