import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { MappingLogController } from "../mappingLog.controller";
import { MappingLogService } from "../mappingLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: "exampleApplicationId",
  applicationMappedRecordCount: 42,
  applicationRecordCount: 42,
  applicationUnmappedRecordCount: 42,
  createdAt: new Date(),
  deletedMappingsRecordCount: "exampleDeletedMappingsRecordCount",
  id: "exampleId",
  mappedRecordCount: 42,
  newMappingRecordCount: 42,
  recordCount: 42,
  statusId: "exampleStatusId",
  unmappedRecordCount: 42,
  updatedAt: new Date(),
  versionId: "exampleVersionId",
};
const CREATE_RESULT = {
  applicationId: "exampleApplicationId",
  applicationMappedRecordCount: 42,
  applicationRecordCount: 42,
  applicationUnmappedRecordCount: 42,
  createdAt: new Date(),
  deletedMappingsRecordCount: "exampleDeletedMappingsRecordCount",
  id: "exampleId",
  mappedRecordCount: 42,
  newMappingRecordCount: 42,
  recordCount: 42,
  statusId: "exampleStatusId",
  unmappedRecordCount: 42,
  updatedAt: new Date(),
  versionId: "exampleVersionId",
};
const FIND_MANY_RESULT = [
  {
    applicationId: "exampleApplicationId",
    applicationMappedRecordCount: 42,
    applicationRecordCount: 42,
    applicationUnmappedRecordCount: 42,
    createdAt: new Date(),
    deletedMappingsRecordCount: "exampleDeletedMappingsRecordCount",
    id: "exampleId",
    mappedRecordCount: 42,
    newMappingRecordCount: 42,
    recordCount: 42,
    statusId: "exampleStatusId",
    unmappedRecordCount: 42,
    updatedAt: new Date(),
    versionId: "exampleVersionId",
  },
];
const FIND_ONE_RESULT = {
  applicationId: "exampleApplicationId",
  applicationMappedRecordCount: 42,
  applicationRecordCount: 42,
  applicationUnmappedRecordCount: 42,
  createdAt: new Date(),
  deletedMappingsRecordCount: "exampleDeletedMappingsRecordCount",
  id: "exampleId",
  mappedRecordCount: 42,
  newMappingRecordCount: 42,
  recordCount: 42,
  statusId: "exampleStatusId",
  unmappedRecordCount: 42,
  updatedAt: new Date(),
  versionId: "exampleVersionId",
};

const service = {
  createMappingLog() {
    return CREATE_RESULT;
  },
  mappingLogs: () => FIND_MANY_RESULT,
  mappingLog: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("MappingLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MappingLogService,
          useValue: service,
        },
      ],
      controllers: [MappingLogController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /mappingLogs", async () => {
    await request(app.getHttpServer())
      .post("/mappingLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /mappingLogs", async () => {
    await request(app.getHttpServer())
      .get("/mappingLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /mappingLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mappingLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mappingLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mappingLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /mappingLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mappingLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/mappingLogs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
