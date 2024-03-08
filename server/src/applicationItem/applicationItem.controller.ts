import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationItemService } from "./applicationItem.service";
import { ApplicationItemControllerBase } from "./base/applicationItem.controller.base";

@swagger.ApiTags("applicationItems")
@common.Controller("applicationItems")
export class ApplicationItemController extends ApplicationItemControllerBase {
  constructor(
    protected readonly service: ApplicationItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
