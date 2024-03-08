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
import { ApplicationItemController } from "../applicationItem.controller";
import { ApplicationItemService } from "../applicationItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicationId: "exampleApplicationId",
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isDeleted: "true",
  itemId: "exampleItemId",
  name: "exampleName",
  parentId: "exampleParentId",
  sourceSystemId: "exampleSourceSystemId",
  sourceSystemParentId: "exampleSourceSystemParentId",
  updatedAt: new Date(),
  versionId: "exampleVersionId",
};
const CREATE_RESULT = {
  applicationId: "exampleApplicationId",
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isDeleted: "true",
  itemId: "exampleItemId",
  name: "exampleName",
  parentId: "exampleParentId",
  sourceSystemId: "exampleSourceSystemId",
  sourceSystemParentId: "exampleSourceSystemParentId",
  updatedAt: new Date(),
  versionId: "exampleVersionId",
};
const FIND_MANY_RESULT = [
  {
    applicationId: "exampleApplicationId",
    createdAt: new Date(),
    id: "exampleId",
    isActive: "true",
    isDeleted: "true",
    itemId: "exampleItemId",
    name: "exampleName",
    parentId: "exampleParentId",
    sourceSystemId: "exampleSourceSystemId",
    sourceSystemParentId: "exampleSourceSystemParentId",
    updatedAt: new Date(),
    versionId: "exampleVersionId",
  },
];
const FIND_ONE_RESULT = {
  applicationId: "exampleApplicationId",
  createdAt: new Date(),
  id: "exampleId",
  isActive: "true",
  isDeleted: "true",
  itemId: "exampleItemId",
  name: "exampleName",
  parentId: "exampleParentId",
  sourceSystemId: "exampleSourceSystemId",
  sourceSystemParentId: "exampleSourceSystemParentId",
  updatedAt: new Date(),
  versionId: "exampleVersionId",
};

const service = {
  createApplicationItem() {
    return CREATE_RESULT;
  },
  applicationItems: () => FIND_MANY_RESULT,
  applicationItem: ({ where }: { where: { id: string } }) => {
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

describe("ApplicationItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicationItemService,
          useValue: service,
        },
      ],
      controllers: [ApplicationItemController],
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

  test("POST /applicationItems", async () => {
    await request(app.getHttpServer())
      .post("/applicationItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /applicationItems", async () => {
    await request(app.getHttpServer())
      .get("/applicationItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /applicationItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicationItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicationItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /applicationItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicationItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/applicationItems")
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
