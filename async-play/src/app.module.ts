import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PlaylistService } from './playlist/playlist.service';
import { PlaylistController } from './playlist/playlist.controller';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [ ConfigModule.forRoot({isGlobal:true}) ,
             MongooseModule.forRoot(process.env.DB),
             UserModule,
             PlaylistModule
  ],
  controllers: [AppController, PlaylistController],
  providers: [AppService, PlaylistService],
})
export class AppModule {}
