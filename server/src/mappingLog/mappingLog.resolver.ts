import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MappingLogResolverBase } from "./base/mappingLog.resolver.base";
import { MappingLog } from "./base/MappingLog";
import { MappingLogService } from "./mappingLog.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MappingLog)
export class MappingLogResolver extends MappingLogResolverBase {
  constructor(
    protected readonly service: MappingLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
