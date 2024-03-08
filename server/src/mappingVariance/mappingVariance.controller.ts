import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MappingVarianceService } from "./mappingVariance.service";
import { MappingVarianceControllerBase } from "./base/mappingVariance.controller.base";

@swagger.ApiTags("mappingVariances")
@common.Controller("mappingVariances")
export class MappingVarianceController extends MappingVarianceControllerBase {
  constructor(
    protected readonly service: MappingVarianceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
