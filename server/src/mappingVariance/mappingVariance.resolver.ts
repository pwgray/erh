import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MappingVarianceResolverBase } from "./base/mappingVariance.resolver.base";
import { MappingVariance } from "./base/MappingVariance";
import { MappingVarianceService } from "./mappingVariance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MappingVariance)
export class MappingVarianceResolver extends MappingVarianceResolverBase {
  constructor(
    protected readonly service: MappingVarianceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
