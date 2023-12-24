import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const { name, secret } = createCompanyDto;
    const createCompany = await this.prisma.company.create({
      data: { name, secret },
    });
    const ret = createCompany
      ? {
          status: 'success',
          message: `company created`,
          data: { id: createCompany.id },
        }
      : {
          status: 'error',
          message: `Error in create company`,
          data: {},
        };
    return ret;
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return updateCompanyDto;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
