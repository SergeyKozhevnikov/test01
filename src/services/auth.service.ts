import {RegisterRequest} from "../dtos/auth.dto"
import userService from './user.service'

class AuthService{
    
    async register(userDTO:RegisterRequest){
        const user = await userService.createUser(userDTO)
        
    }
}

export default new AuthService()