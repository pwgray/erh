import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationItemResolverBase } from "./base/applicationItem.resolver.base";
import { ApplicationItem } from "./base/ApplicationItem";
import { ApplicationItemService } from "./applicationItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationItem)
export class ApplicationItemResolver extends ApplicationItemResolverBase {
  constructor(
    protected readonly service: ApplicationItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
