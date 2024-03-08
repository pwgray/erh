import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LookupServiceBase } from "./base/lookup.service.base";

@Injectable()
export class LookupService extends LookupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
