import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { dataBaseConf } from './config/configuration';

@Module({
  imports: [
    AuthenticationModule,
    MongooseModule.forRoot(dataBaseConf.url),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
