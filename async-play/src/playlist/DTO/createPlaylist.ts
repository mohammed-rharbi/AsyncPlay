import { IsNotEmpty , IsString , Length } from "class-validator";


export class createPlayListDTO {

    @IsString()
    @IsNotEmpty()
    @Length(3 , 20)
    title: string;


    @IsString()
    @IsNotEmpty()
    owner: string;


}

