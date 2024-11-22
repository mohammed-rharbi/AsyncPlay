import { Body, Controller, Post } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { createPlayListDTO } from './DTO/createPlaylist';

@Controller('playlist')
export class PlaylistController {

    constructor(private readonly playlistService: PlaylistService){}


    @Post('create/playlist')
    async createPlaylist(@Body() playlistData: createPlayListDTO){

        return await this.playlistService.createPlaylist(playlistData);

    }

 
    


}
