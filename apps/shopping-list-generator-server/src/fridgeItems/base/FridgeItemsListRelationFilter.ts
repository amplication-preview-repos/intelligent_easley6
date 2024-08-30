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
import { FridgeItemsWhereInput } from "./FridgeItemsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FridgeItemsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FridgeItemsWhereInput,
  })
  @ValidateNested()
  @Type(() => FridgeItemsWhereInput)
  @IsOptional()
  @Field(() => FridgeItemsWhereInput, {
    nullable: true,
  })
  every?: FridgeItemsWhereInput;

  @ApiProperty({
    required: false,
    type: () => FridgeItemsWhereInput,
  })
  @ValidateNested()
  @Type(() => FridgeItemsWhereInput)
  @IsOptional()
  @Field(() => FridgeItemsWhereInput, {
    nullable: true,
  })
  some?: FridgeItemsWhereInput;

  @ApiProperty({
    required: false,
    type: () => FridgeItemsWhereInput,
  })
  @ValidateNested()
  @Type(() => FridgeItemsWhereInput)
  @IsOptional()
  @Field(() => FridgeItemsWhereInput, {
    nullable: true,
  })
  none?: FridgeItemsWhereInput;
}
export { FridgeItemsListRelationFilter as FridgeItemsListRelationFilter };