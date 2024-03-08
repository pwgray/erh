import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LookupModuleBase } from "./base/lookup.module.base";
import { LookupService } from "./lookup.service";
import { LookupController } from "./lookup.controller";
import { LookupResolver } from "./lookup.resolver";

@Module({
  imports: [LookupModuleBase, forwardRef(() => AuthModule)],
  controllers: [LookupController],
  providers: [LookupService, LookupResolver],
  exports: [LookupService],
})
export class LookupModule {}
