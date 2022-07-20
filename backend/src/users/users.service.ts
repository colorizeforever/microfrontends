import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async getAll(count = 10, offset = 0): Promise<Users[]> {
    return await this.usersModel.find().skip(offset).limit(count)
  }
}
