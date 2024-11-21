import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.entity";


@Injectable()
export class userRepositorie{

    constructor(@InjectModel(User.name) private userModel: Model<User>){}


    async create(userData: Partial<User>): Promise<User>{

        const user = new this.userModel(userData);
        return user.save();
    }

    async getByEmail(email: string) : Promise<User>{

        return await this.userModel.findOne({email}).exec();

    }
}