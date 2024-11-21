import { IsString , IsNotEmpty , IsEmail } from "class-validator";


export class createUser{


    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string
}