import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ErhService } from "./erh.service";
import { ErhControllerBase } from "./base/erh.controller.base";

@swagger.ApiTags("erhs")
@common.Controller("erhs")
export class ErhController extends ErhControllerBase {
  constructor(
    protected readonly service: ErhService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
