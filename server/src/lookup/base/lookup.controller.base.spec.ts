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
import { LookupController } from "../lookup.controller";
import { LookupService } from "../lookup.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  altValue1: "exampleAltValue1",
  altValue2: "exampleAltValue2",
  category: "exampleCategory",
  context: "exampleContext",
  createdAt: new Date(),
  description: "exampleDescription",
  endDate: new Date(),
  id: "exampleId",
  isActive: "true",
  isDeleted: "true",
  isEditableByTechAdminOnly: "true",
  isViewableByTechAdminOnly: "true",
  parentId: "exampleParentId",
  sortOrder: "exampleSortOrder",
  startDate: new Date(),
  updatedAt: new Date(),
  value: "exampleValue",
};
const CREATE_RESULT = {
  altValue1: "exampleAltValue1",
  altValue2: "exampleAltValue2",
  category: "exampleCategory",
  context: "exampleContext",
  createdAt: new Date(),
  description: "exampleDescription",
  endDate: new Date(),
  id: "exampleId",
  isActive: "true",
  isDeleted: "true",
  isEditableByTechAdminOnly: "true",
  isViewableByTechAdminOnly: "true",
  parentId: "exampleParentId",
  sortOrder: "exampleSortOrder",
  startDate: new Date(),
  updatedAt: new Date(),
  value: "exampleValue",
};
const FIND_MANY_RESULT = [
  {
    altValue1: "exampleAltValue1",
    altValue2: "exampleAltValue2",
    category: "exampleCategory",
    context: "exampleContext",
    createdAt: new Date(),
    description: "exampleDescription",
    endDate: new Date(),
    id: "exampleId",
    isActive: "true",
    isDeleted: "true",
    isEditableByTechAdminOnly: "true",
    isViewableByTechAdminOnly: "true",
    parentId: "exampleParentId",
    sortOrder: "exampleSortOrder",
    startDate: new Date(),
    updatedAt: new Date(),
    value: "exampleValue",
  },
];
const FIND_ONE_RESULT = {
  altValue1: "exampleAltValue1",
  altValue2: "exampleAltValue2",
  category: "exampleCategory",
  context: "exampleContext",
  createdAt: new Date(),
  description: "exampleDescription",
  endDate: new Date(),
  id: "exampleId",
  isActive: "true",
  isDeleted: "true",
  isEditableByTechAdminOnly: "true",
  isViewableByTechAdminOnly: "true",
  parentId: "exampleParentId",
  sortOrder: "exampleSortOrder",
  startDate: new Date(),
  updatedAt: new Date(),
  value: "exampleValue",
};

const service = {
  createLookup() {
    return CREATE_RESULT;
  },
  lookups: () => FIND_MANY_RESULT,
  lookup: ({ where }: { where: { id: string } }) => {
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

describe("Lookup", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LookupService,
          useValue: service,
        },
      ],
      controllers: [LookupController],
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

  test("POST /lookups", async () => {
    await request(app.getHttpServer())
      .post("/lookups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /lookups", async () => {
    await request(app.getHttpServer())
      .get("/lookups")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /lookups/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/lookups"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /lookups/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/lookups"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /lookups existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/lookups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/lookups")
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
