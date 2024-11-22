import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [ ConfigModule.forRoot({isGlobal:true}) ,
             MongooseModule.forRoot(process.env.DB),
             UserModule,
             PlaylistModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
