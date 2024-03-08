import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MappingLogService } from "./mappingLog.service";
import { MappingLogControllerBase } from "./base/mappingLog.controller.base";

@swagger.ApiTags("mappingLogs")
@common.Controller("mappingLogs")
export class MappingLogController extends MappingLogControllerBase {
  constructor(
    protected readonly service: MappingLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
