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
import { MappingVarianceWhereUniqueInput } from "./MappingVarianceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MappingVarianceUpdateInput } from "./MappingVarianceUpdateInput";

@ArgsType()
class UpdateMappingVarianceArgs {
  @ApiProperty({
    required: true,
    type: () => MappingVarianceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MappingVarianceWhereUniqueInput)
  @Field(() => MappingVarianceWhereUniqueInput, { nullable: false })
  where!: MappingVarianceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MappingVarianceUpdateInput,
  })
  @ValidateNested()
  @Type(() => MappingVarianceUpdateInput)
  @Field(() => MappingVarianceUpdateInput, { nullable: false })
  data!: MappingVarianceUpdateInput;
}

export { UpdateMappingVarianceArgs as UpdateMappingVarianceArgs };
