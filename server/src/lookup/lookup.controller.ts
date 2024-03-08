import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LookupService } from "./lookup.service";
import { LookupControllerBase } from "./base/lookup.controller.base";

@swagger.ApiTags("lookups")
@common.Controller("lookups")
export class LookupController extends LookupControllerBase {
  constructor(
    protected readonly service: LookupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
