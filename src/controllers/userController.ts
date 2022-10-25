import { RequestHandler } from "express";
import { UsersModel, IUser } from "../models/user";
import { comparePasswords, hashPassword, signUserToken, verifyUser } from "../services/auth";

export const createUser: RequestHandler = async (req, res, next) => {
    try {
        let newUser: IUser = req.body;
        if (newUser.email && newUser.password) {
            let hashedPassword = await hashPassword(newUser.password);
            newUser.password = hashedPassword;
            let created = await UsersModel.create(newUser);
            res.status(201).json(created);
        }
        else {
            res.status(400).send('Username and password required');
        }
    }catch(err){
        res.status(500).send()
    }
    
}

export const loginUser: RequestHandler = async (req, res, next) => {
    let existingUser: IUser | null = await UsersModel.findOne({ 
          email: req.body.email
    });

    if (existingUser) {
        let passwordsMatch = await comparePasswords(req.body.password, existingUser.password);
        
        if (passwordsMatch) {
            let token = await signUserToken(existingUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json('Invalid password');
        }
    }
    else {
        res.status(401).json('Invalid username');
    }
}

export const getUser: RequestHandler = async (req, res, next) => {
    let user: IUser | null = await verifyUser(req);
    let reqId = parseInt(req.params.id);
    if (user && user._id == reqId) {
        res.status(200).json(user);
    }
    else {
        res.status(401).send();
    }
}