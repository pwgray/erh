import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MappingLogModuleBase } from "./base/mappingLog.module.base";
import { MappingLogService } from "./mappingLog.service";
import { MappingLogController } from "./mappingLog.controller";
import { MappingLogResolver } from "./mappingLog.resolver";

@Module({
  imports: [MappingLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [MappingLogController],
  providers: [MappingLogService, MappingLogResolver],
  exports: [MappingLogService],
})
export class MappingLogModule {}
