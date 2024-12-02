import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUser } from './DTO/createUserDto';
import { checkUser } from './DTO/checkUserDto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}


    @Post('register')
    async register(@Body() userData: createUser){


        return await this.userService.CreateUser(userData);

    }

    @Post('getIn')
    async GetIn(@Body() userData: checkUser){

        return await this.userService.getIn(userData);
    }
}
