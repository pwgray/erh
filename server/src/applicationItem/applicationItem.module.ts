import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationItemModuleBase } from "./base/applicationItem.module.base";
import { ApplicationItemService } from "./applicationItem.service";
import { ApplicationItemController } from "./applicationItem.controller";
import { ApplicationItemResolver } from "./applicationItem.resolver";

@Module({
  imports: [ApplicationItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationItemController],
  providers: [ApplicationItemService, ApplicationItemResolver],
  exports: [ApplicationItemService],
})
export class ApplicationItemModule {}
