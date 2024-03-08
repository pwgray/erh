import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DbQueryConnectionService } from "./dbQueryConnection.service";
import { DbQueryConnectionControllerBase } from "./base/dbQueryConnection.controller.base";

@swagger.ApiTags("dbQueryConnections")
@common.Controller("dbQueryConnections")
export class DbQueryConnectionController extends DbQueryConnectionControllerBase {
  constructor(
    protected readonly service: DbQueryConnectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
