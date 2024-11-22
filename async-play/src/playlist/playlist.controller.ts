import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { createPlayListDTO } from './DTO/createPlaylist';

@Controller('playlist')
export class PlaylistController {

    constructor(private readonly playlistService: PlaylistService){}


    @Post('create/playlist')
    async createPlaylist(@Body() playlistData: createPlayListDTO){

        return await this.playlistService.createPlaylist(playlistData);
        
    }

    @Get('getPlaylists/:userId')
    async getUserPlaylist(@Param('userId') userId: string){

        return await this.playlistService.getUserPlaylists(userId);
    }

 
    


}
