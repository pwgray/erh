import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MappingVarianceServiceBase } from "./base/mappingVariance.service.base";

@Injectable()
export class MappingVarianceService extends MappingVarianceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
