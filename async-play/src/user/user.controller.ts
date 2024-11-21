import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUser } from './DTO/createUserDto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}


    @Post('register')
    async register(@Body() userData: createUser){


        return await this.userService.CreateUser(userData);

    }
}
