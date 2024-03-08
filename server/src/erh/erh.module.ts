import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ErhModuleBase } from "./base/erh.module.base";
import { ErhService } from "./erh.service";
import { ErhController } from "./erh.controller";
import { ErhResolver } from "./erh.resolver";

@Module({
  imports: [ErhModuleBase, forwardRef(() => AuthModule)],
  controllers: [ErhController],
  providers: [ErhService, ErhResolver],
  exports: [ErhService],
})
export class ErhModule {}
