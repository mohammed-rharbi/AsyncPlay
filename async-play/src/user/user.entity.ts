import { Schema , Prop , SchemaFactory } from "@nestjs/mongoose";
import { Document , Types } from "mongoose";


@Schema()
export class User extends Document{

    @Prop({required:true})
    userName: string;

    @Prop({required:true , unique:true})
    email: string;

    @Prop({enum:['owner' , 'user'] , default:'user'})
    role: string;


}

export const userSchema = SchemaFactory.createForClass(User);