import { Injectable } from '@nestjs/common';
import { playlistRepositorie } from './playlist.repository';
import { playlist } from './playlist.entity';
import { createPlayListDTO } from './DTO/createPlaylist';

@Injectable()
export class PlaylistService {

    constructor(private readonly playlistRepositorie: playlistRepositorie){}


    async createPlaylist(playlistData: createPlayListDTO): Promise<playlist>{


      return await this.playlistRepositorie.createPlayList(playlistData);


    }

}
