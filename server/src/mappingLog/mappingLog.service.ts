import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MappingLogServiceBase } from "./base/mappingLog.service.base";

@Injectable()
export class MappingLogService extends MappingLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
