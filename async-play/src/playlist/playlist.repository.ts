import { playlist , playlistShema } from "./playlist.entity";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { createPlayListDTO } from "./DTO/createPlaylist";


@Injectable()
export class playlistRepositorie {

    constructor( @InjectModel(playlist.name) private playListModel: Model<playlist> ){}


    async createPlayList(playlistData: createPlayListDTO): Promise<playlist>{

        const playlist = new this.playListModel(playlistData);

        return playlist.save();
    }

}