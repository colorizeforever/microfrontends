import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from '../schemas/auth.schema';
import { Error, Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from '../dto/auth.dto';
import { Errors } from '../constants/erorrs.constants';

export type TokenT = {
  token: string;
};

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectModel(Auth.name) private authModel: Model<AuthDocument>,
    private jwtService: JwtService,
  ) {}

  async login(authDto: AuthDto): Promise<TokenT> {
    const user = await this.validateUser(authDto);
    return this.generateToken(user);
  }

  async registration(authDto: AuthDto): Promise<TokenT> {
    const candidate = await this.getUserByLogin(authDto.login);
    if (candidate) {
      throw new Error(Errors.ALREADY_EXIST);
    }
    const hashPass = await bcrypt.hash(authDto.password, 4);
    const user = await new this.authModel({
      login: authDto.login,
      password: hashPass,
    }).save();
    return this.generateToken(user);
  }

  private async generateToken(user: Auth) {
    const payload = { login: user.login };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(authDto: AuthDto): Promise<Auth> {
    const user = await this.getUserByLogin(authDto.login);
    if (!user) {
      throw new Error(Errors.NO_USER);
    }
    const passwordEquals = await bcrypt.compare(
      authDto.password,
      user.password,
    );

    if (passwordEquals) {
      return user;
    }

    throw new Error(Errors.WRONG_PASSWORD);
  }

  private async getUserByLogin(login: string): Promise<any> {
    return this.authModel.findOne({ login }).lean();
  }
}
