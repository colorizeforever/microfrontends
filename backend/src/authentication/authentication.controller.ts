import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { AuthenticationService, TokenT } from './authentication.service';
import { AuthDto } from '../dto/auth.dto';
import { ExceptionsFilter } from '../exceptions/Exception.filter';

@Controller('auth')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Post('login')
  @UseFilters(ExceptionsFilter)
  async login(@Body() authDto: AuthDto): Promise<TokenT> {
    return this.authService.login(authDto);
  }

  @Post('registration')
  @UseFilters(ExceptionsFilter)
  async registration(@Body() authDto: AuthDto): Promise<TokenT> {
    return this.authService.registration(authDto);
  }
}
