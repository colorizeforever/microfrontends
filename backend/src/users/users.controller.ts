import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from '../schemas/users.schema';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(
    @Query('count') count: number,
    @Query('offset') offset: number,
  ): Promise<Users[]> {
    return this.usersService.getAll(count, offset);
  }
}
