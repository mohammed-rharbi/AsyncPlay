import { Injectable, NotFoundException } from '@nestjs/common';
import { userRepositorie } from './user.repository';
import { createUser } from './DTO/createUserDto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: userRepositorie ){}


    async CreateUser(userData: createUser): Promise<User>{

        const existUser = await this.userRepository.getByEmail(userData.email);

        if(existUser){

            throw new NotFoundException('user already exiest');
        }
        
        return await this.userRepository.create(userData);  

    }
}
