import User from '../models/user.model'
import {RegisterRequest} from '../dtos/auth.dto'

class UserService {

  async createUser(userDTO: RegisterRequest) {
    const user = await User.create(
      {
        email: userDTO.email,
        password: userDTO.password

      }
    )
  }
}

export default new UserService()
