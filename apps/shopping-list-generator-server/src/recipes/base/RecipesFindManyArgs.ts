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
import { RecipesWhereInput } from "./RecipesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RecipesOrderByInput } from "./RecipesOrderByInput";

@ArgsType()
class RecipesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RecipesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RecipesWhereInput, { nullable: true })
  @Type(() => RecipesWhereInput)
  where?: RecipesWhereInput;

  @ApiProperty({
    required: false,
    type: [RecipesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RecipesOrderByInput], { nullable: true })
  @Type(() => RecipesOrderByInput)
  orderBy?: Array<RecipesOrderByInput>;

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

export { RecipesFindManyArgs as RecipesFindManyArgs };
