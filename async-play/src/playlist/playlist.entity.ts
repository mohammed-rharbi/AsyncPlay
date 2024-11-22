import { Schema ,Prop  ,SchemaFactory } from "@nestjs/mongoose";
import { Document , Types } from "mongoose";

@Schema()
export class playlist extends Document{
    
    @Prop({required:true})
    title: string;

    @Prop({ type: Types.ObjectId , ref: 'User' , required:true})
    owner: Types.ObjectId;

    @Prop({ type: [{ type: Types.ObjectId }] , ref: 'Video' })
    viedos: Types.ObjectId[];
}

export const playlistShema = SchemaFactory.createForClass(playlist);