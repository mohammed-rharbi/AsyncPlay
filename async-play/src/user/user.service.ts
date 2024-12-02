import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { userRepositorie } from './user.repository';
import { createUser } from './DTO/createUserDto';
import { checkUser } from './DTO/checkUserDto';
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

    async getIn(userData: checkUser): Promise<User>{

        const user = await this.userRepository.getByEmail(userData.email);

        console.log(user);
        
        if(!user || user === null){
            
            throw new NotFoundException('user not found')
        }

        if(user.email !== userData.email && user.userName !== userData.userName ){

            throw new ForbiddenException('user info does not match');
        }

        return user
    }
}
