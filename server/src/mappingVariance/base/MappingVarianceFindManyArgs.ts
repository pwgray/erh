/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MappingVarianceWhereInput } from "./MappingVarianceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MappingVarianceOrderByInput } from "./MappingVarianceOrderByInput";

@ArgsType()
class MappingVarianceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MappingVarianceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MappingVarianceWhereInput, { nullable: true })
  @Type(() => MappingVarianceWhereInput)
  where?: MappingVarianceWhereInput;

  @ApiProperty({
    required: false,
    type: [MappingVarianceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MappingVarianceOrderByInput], { nullable: true })
  @Type(() => MappingVarianceOrderByInput)
  orderBy?: Array<MappingVarianceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MappingVarianceFindManyArgs as MappingVarianceFindManyArgs };
