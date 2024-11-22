import { Injectable, NotFoundException } from '@nestjs/common';
import { playlistRepositorie } from './playlist.repository';
import { playlist } from './playlist.entity';
import { createPlayListDTO } from './DTO/createPlaylist';

@Injectable()
export class PlaylistService {

    constructor(private readonly playlistRepositorie: playlistRepositorie){}


    async createPlaylist(playlistData: createPlayListDTO): Promise<playlist>{


      return await this.playlistRepositorie.createPlayList(playlistData);

      
    }

    async getUserPlaylists(userId: string): Promise<playlist[]>{

        const playlist =  await this.playlistRepositorie.getUserPlaylist(userId);

        if(!playlist || playlist.length === 0){
            throw new NotFoundException('no playlists found');
        }

        return playlist

    }

}
