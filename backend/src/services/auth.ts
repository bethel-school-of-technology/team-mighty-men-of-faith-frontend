import bcrypt from 'bcrypt';
import { IUser, UsersModel } from '../models/user';
import { Request } from 'express';
import jwt from 'jsonwebtoken';

const secret = 'hmmm, my aunt is very sick.';

export const hashPassword = async (plainTextPassword: string) => {
    const saltRound = 10;
    const hash = await bcrypt.hash(plainTextPassword, saltRound);
    return hash;
}

export const comparePasswords = async (plainTextPassword: string, hashPassword: string) => {
    return await bcrypt.compare(plainTextPassword, hashPassword);
}

export const signUserToken = async (user: IUser) => {
    let token = jwt.sign(
        { userId: user._id },
        secret,
        { expiresIn: '2hr' }
    );
    
    return token;
}

export const verifyUser = async (req: Request) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            let decoded: any = await jwt.verify(token, secret);
            const user = await UsersModel.findById(decoded.userId);
            return user
        }
        catch (err) {
            return null;
        }
    }
    else {
        return null;
    }
}