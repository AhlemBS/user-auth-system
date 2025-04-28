import { IsOptional, IsString, IsEnum, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ example: 'testuser', description: 'Pseudonyme unique de l\'utilisateur' })
  @IsString()
  pseudonyme!: string;

  @ApiProperty({ example: 'password123', description: 'Mot de passe de l\'utilisateur' })
  @IsString()
  password!: string;

  @ApiProperty({ example: 'John Doe', description: 'Nom complet', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: { rue: '1 rue exemple', ville: 'Paris' }, description: 'Adresse postale', required: false })
  @IsOptional()
  @IsObject()
  address?: object;

  @ApiProperty({ example: 'Ceci est un commentaire.', description: 'Commentaire', required: false })
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiProperty({ enum: Role, default: Role.USER, description: 'Type de rôle utilisateur' })
  @IsEnum(Role)
  role!: Role;
}