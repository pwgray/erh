import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DbQueryConnectionServiceBase } from "./base/dbQueryConnection.service.base";

@Injectable()
export class DbQueryConnectionService extends DbQueryConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
