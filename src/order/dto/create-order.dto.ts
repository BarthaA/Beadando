import { IsNotEmpty, IsString, IsPostalCode, Matches, Length, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  billingCountry: string;

  @IsNotEmpty()
  @IsPostalCode()
  billingZip: string;

  @IsNotEmpty()
  @IsString()
  billingCity: string;

  @IsNotEmpty()
  @IsString()
  billingAddress: string;

  @IsOptional()
  @IsString()
  shippingCountry?: string;

  @IsOptional()
  @IsPostalCode()
  shippingZip?: string;

  @IsOptional()
  @IsString()
  shippingCity?: string;

  @IsOptional()
  @IsString()
  shippingAddress?: string;

  @IsOptional()
  @Matches(/^[A-Z]{2}-\d{4}$/, { message: 'Invalid coupon format, expected BB-SSSS' })
  coupon?: string;

  @IsNotEmpty()
  @Matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, { message: 'Invalid credit card number format' })
  cardNumber: string;

  @IsNotEmpty()
  @Matches(/^\d{2}\/\d{2}$/, { message: 'Invalid expiration date format, expected MM/YY' })
  expirationDate: string;

  @IsNotEmpty()
  @Length(3, 3, { message: 'Invalid security code format' })
  securityCode: string;
}
