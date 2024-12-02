import { IsString , IsNotEmpty , IsEmail  } from "class-validator";


export class checkUser{


    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string
}