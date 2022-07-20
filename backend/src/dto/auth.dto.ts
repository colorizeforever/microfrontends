import { MinLength } from 'class-validator';

export class AuthDto {
  @MinLength(4)
  readonly login: string;
  @MinLength(4)
  readonly password: string;
}
