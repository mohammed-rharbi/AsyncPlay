import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userRepositorie } from './user.repository';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './user.entity';

@Module({
  providers: [UserService , userRepositorie],
  controllers: [UserController],
  imports: [ ConfigModule , MongooseModule.forFeature([{name: User.name , schema: userSchema}])]
})
export class UserModule {}
