/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VersionService } from "../version.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VersionCreateInput } from "./VersionCreateInput";
import { Version } from "./Version";
import { VersionFindManyArgs } from "./VersionFindManyArgs";
import { VersionWhereUniqueInput } from "./VersionWhereUniqueInput";
import { VersionUpdateInput } from "./VersionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VersionControllerBase {
  constructor(
    protected readonly service: VersionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Version })
  @nestAccessControl.UseRoles({
    resource: "Version",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVersion(
    @common.Body() data: VersionCreateInput
  ): Promise<Version> {
    return await this.service.createVersion({
      data: data,
      select: {
        clonedFromId: true,
        comment: true,
        createdAt: true,
        goActiveDate: true,
        id: true,
        isActive: true,
        isDeleted: true,
        name: true,
        sortOrder: true,
        statusId: true,
        updatedAt: true,
        wasSynchRun: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Version] })
  @ApiNestedQuery(VersionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Version",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async versions(@common.Req() request: Request): Promise<Version[]> {
    const args = plainToClass(VersionFindManyArgs, request.query);
    return this.service.versions({
      ...args,
      select: {
        clonedFromId: true,
        comment: true,
        createdAt: true,
        goActiveDate: true,
        id: true,
        isActive: true,
        isDeleted: true,
        name: true,
        sortOrder: true,
        statusId: true,
        updatedAt: true,
        wasSynchRun: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Version })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Version",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async version(
    @common.Param() params: VersionWhereUniqueInput
  ): Promise<Version | null> {
    const result = await this.service.version({
      where: params,
      select: {
        clonedFromId: true,
        comment: true,
        createdAt: true,
        goActiveDate: true,
        id: true,
        isActive: true,
        isDeleted: true,
        name: true,
        sortOrder: true,
        statusId: true,
        updatedAt: true,
        wasSynchRun: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Version })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Version",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVersion(
    @common.Param() params: VersionWhereUniqueInput,
    @common.Body() data: VersionUpdateInput
  ): Promise<Version | null> {
    try {
      return await this.service.updateVersion({
        where: params,
        data: data,
        select: {
          clonedFromId: true,
          comment: true,
          createdAt: true,
          goActiveDate: true,
          id: true,
          isActive: true,
          isDeleted: true,
          name: true,
          sortOrder: true,
          statusId: true,
          updatedAt: true,
          wasSynchRun: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Version })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Version",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVersion(
    @common.Param() params: VersionWhereUniqueInput
  ): Promise<Version | null> {
    try {
      return await this.service.deleteVersion({
        where: params,
        select: {
          clonedFromId: true,
          comment: true,
          createdAt: true,
          goActiveDate: true,
          id: true,
          isActive: true,
          isDeleted: true,
          name: true,
          sortOrder: true,
          statusId: true,
          updatedAt: true,
          wasSynchRun: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
