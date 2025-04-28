import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { pseudonyme: createUserDto.pseudonyme },
    });

    if (existingUser) {
      throw new BadRequestException('Ce pseudonyme est déjà utilisé.');
    }

    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`Utilisateur avec ID ${id} non trouvé`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id); // On vérifie que l'utilisateur existe avant

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // On vérifie que l'utilisateur existe avant

    return this.prisma.user.delete({
      where: { id },
    });
  }

  async validateUser(pseudonyme: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { pseudonyme } });

    if (!user || user.password !== password) {
      throw new BadRequestException('Identifiants invalides');
    }

    return user;
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken },
    });
  }

  async removeRefreshToken(userId: number) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  async getUserById(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException(`Utilisateur avec ID ${userId} non trouvé`);
    }

    return user;
  }
}
