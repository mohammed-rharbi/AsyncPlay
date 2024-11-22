import { playlist , playlistShema } from "./playlist.entity";
import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { createPlayListDTO } from "./DTO/createPlaylist";


@Injectable()
export class playlistRepositorie {

    constructor( @InjectModel(playlist.name) private playListModel: Model<playlist> ){}


    async createPlayList(playlistData: createPlayListDTO): Promise<playlist>{

        const playlist = new this.playListModel(playlistData);

        return playlist.save();
    }

    async getUserPlaylist(userId: string): Promise<playlist[]>{

        const playlists =  await this.playListModel.find({owner: userId}).exec();

        if(!playlists){
            throw new NotFoundException('no playlist found')
        }

        return playlists
    }

}