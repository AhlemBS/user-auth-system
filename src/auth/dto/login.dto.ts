import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  pseudonyme!: string;

  @IsString()
  password!: string;
}