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
import { MappingVarianceController } from "../mappingVariance.controller";
import { MappingVarianceService } from "../mappingVariance.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationErhId: "exampleApplicationErhId",
  createdAt: new Date(),
  erhId: "exampleErhId",
  id: "exampleId",
  mappingLogId: "exampleMappingLogId",
  updatedAt: new Date(),
  varianceTypeId: "exampleVarianceTypeId",
  versionId: "exampleVersionId",
};
const CREATE_RESULT = {
  applicationErhId: "exampleApplicationErhId",
  createdAt: new Date(),
  erhId: "exampleErhId",
  id: "exampleId",
  mappingLogId: "exampleMappingLogId",
  updatedAt: new Date(),
  varianceTypeId: "exampleVarianceTypeId",
  versionId: "exampleVersionId",
};
const FIND_MANY_RESULT = [
  {
    applicationErhId: "exampleApplicationErhId",
    createdAt: new Date(),
    erhId: "exampleErhId",
    id: "exampleId",
    mappingLogId: "exampleMappingLogId",
    updatedAt: new Date(),
    varianceTypeId: "exampleVarianceTypeId",
    versionId: "exampleVersionId",
  },
];
const FIND_ONE_RESULT = {
  applicationErhId: "exampleApplicationErhId",
  createdAt: new Date(),
  erhId: "exampleErhId",
  id: "exampleId",
  mappingLogId: "exampleMappingLogId",
  updatedAt: new Date(),
  varianceTypeId: "exampleVarianceTypeId",
  versionId: "exampleVersionId",
};

const service = {
  createMappingVariance() {
    return CREATE_RESULT;
  },
  mappingVariances: () => FIND_MANY_RESULT,
  mappingVariance: ({ where }: { where: { id: string } }) => {
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

describe("MappingVariance", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MappingVarianceService,
          useValue: service,
        },
      ],
      controllers: [MappingVarianceController],
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

  test("POST /mappingVariances", async () => {
    await request(app.getHttpServer())
      .post("/mappingVariances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /mappingVariances", async () => {
    await request(app.getHttpServer())
      .get("/mappingVariances")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /mappingVariances/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mappingVariances"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /mappingVariances/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/mappingVariances"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /mappingVariances existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/mappingVariances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/mappingVariances")
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
