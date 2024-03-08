import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationItemServiceBase } from "./base/applicationItem.service.base";

@Injectable()
export class ApplicationItemService extends ApplicationItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
