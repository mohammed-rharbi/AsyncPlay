import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { playlistRepositorie } from './playlist.repository';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { playlist, playlistShema } from './playlist.entity';

@Module({

    providers: [PlaylistService , playlistRepositorie] ,
    controllers: [PlaylistController],
    imports: [ ConfigModule , MongooseModule.forFeature([{name: playlist.name , schema: playlistShema}])]
  

})
export class PlaylistModule {}
