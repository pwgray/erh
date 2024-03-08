import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DbQueryConnectionModuleBase } from "./base/dbQueryConnection.module.base";
import { DbQueryConnectionService } from "./dbQueryConnection.service";
import { DbQueryConnectionController } from "./dbQueryConnection.controller";
import { DbQueryConnectionResolver } from "./dbQueryConnection.resolver";

@Module({
  imports: [DbQueryConnectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [DbQueryConnectionController],
  providers: [DbQueryConnectionService, DbQueryConnectionResolver],
  exports: [DbQueryConnectionService],
})
export class DbQueryConnectionModule {}
