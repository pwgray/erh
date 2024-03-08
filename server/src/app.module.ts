import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ErhModule } from "./erh/erh.module";
import { LookupModule } from "./lookup/lookup.module";
import { ApplicationModule } from "./application/application.module";
import { VersionModule } from "./version/version.module";
import { ApplicationItemModule } from "./applicationItem/applicationItem.module";
import { DbQueryConnectionModule } from "./dbQueryConnection/dbQueryConnection.module";
import { MappingLogModule } from "./mappingLog/mappingLog.module";
import { MappingVarianceModule } from "./mappingVariance/mappingVariance.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    ErhModule,
    LookupModule,
    ApplicationModule,
    VersionModule,
    ApplicationItemModule,
    DbQueryConnectionModule,
    MappingLogModule,
    MappingVarianceModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
