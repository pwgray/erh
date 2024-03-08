import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MappingVarianceModuleBase } from "./base/mappingVariance.module.base";
import { MappingVarianceService } from "./mappingVariance.service";
import { MappingVarianceController } from "./mappingVariance.controller";
import { MappingVarianceResolver } from "./mappingVariance.resolver";

@Module({
  imports: [MappingVarianceModuleBase, forwardRef(() => AuthModule)],
  controllers: [MappingVarianceController],
  providers: [MappingVarianceService, MappingVarianceResolver],
  exports: [MappingVarianceService],
})
export class MappingVarianceModule {}
