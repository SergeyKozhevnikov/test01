import {Response, Request, NextFunction} from 'express'
import authService from '../services/auth.service'


class AuthController{
    async register(req: Request, res: Response, next: NextFunction){
        try {
            await authService.register(req.body)
            return res.status(201).json({message: "Пользователь зарегестрирован!"})
        } catch(e) {
            next(e)
        }
    }
}

export default new AuthController();