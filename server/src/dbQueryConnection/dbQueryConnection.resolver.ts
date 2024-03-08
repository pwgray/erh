import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DbQueryConnectionResolverBase } from "./base/dbQueryConnection.resolver.base";
import { DbQueryConnection } from "./base/DbQueryConnection";
import { DbQueryConnectionService } from "./dbQueryConnection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DbQueryConnection)
export class DbQueryConnectionResolver extends DbQueryConnectionResolverBase {
  constructor(
    protected readonly service: DbQueryConnectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
