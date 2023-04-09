import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  imgUrl1: string;

  @IsString()
  @IsOptional()
  imgUrl2: string;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  quantity: number;

  @IsString()
  @IsOptional()
  size: string;

  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  @IsOptional()
  shippings: string;

  @IsString()
  @IsOptional()
  sex: string;

  @IsString()
  @IsOptional()
  brands: string;

  @IsString()
  @IsOptional()
  category: string;
}
