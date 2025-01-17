import { IsString, IsEmail, IsOptional, IsInt } from 'class-validator';  
export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsInt()
  @IsOptional()
  rolId?: number;
}
