/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecipesWhereInput } from "./RecipesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RecipesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RecipesWhereInput,
  })
  @ValidateNested()
  @Type(() => RecipesWhereInput)
  @IsOptional()
  @Field(() => RecipesWhereInput, {
    nullable: true,
  })
  every?: RecipesWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecipesWhereInput,
  })
  @ValidateNested()
  @Type(() => RecipesWhereInput)
  @IsOptional()
  @Field(() => RecipesWhereInput, {
    nullable: true,
  })
  some?: RecipesWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecipesWhereInput,
  })
  @ValidateNested()
  @Type(() => RecipesWhereInput)
  @IsOptional()
  @Field(() => RecipesWhereInput, {
    nullable: true,
  })
  none?: RecipesWhereInput;
}
export { RecipesListRelationFilter as RecipesListRelationFilter };
