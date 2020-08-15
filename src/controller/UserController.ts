
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

class UserController {
    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await getRepository(User).find();
            return res.json(users);
        }catch(err) {
            console.error(err);
            return res.status(500).end();
        }
    }

    async findOne(req: Request, res: Response, next: NextFunction) {
        try{
            const user = await getRepository(User).findOne(req.params.id);
            return res.json(user);
        }catch(err) {
            console.error(err);
            return res.status(500).end();
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {

            let user: User = req.body;
            user = await getRepository(User).save(user);
    
            return res.json(user);
        }catch(err) {
            console.error(err);
            return res.status(500).end();
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            let user: User = req.body;
    
            await getRepository(User).update(req.params.id, user);
    
            const updatedUser = await getRepository(User).findOne(req.params.id)
    
            return res.json(updatedUser);
        }catch(err) {
            console.error(err);
            return res.status(500).end();
        }
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            let user = await getRepository(User).findOne(req.params.id);
            user = await getRepository(User).remove(user);
    
            return res.json(user);
        }catch(err) {
            console.error(err);
            return res.status(500).end();
        }
    }

    async search(req: Request, res: Response) {
        try {
            const name: String = req.query.name.toString();

            console.log(name);
    
            const user = await getRepository(User).findOne({ where: { name } });
    
            return res.json(user);
        }catch(err) {
            console.error(err);
            return res.status(500).end();
        }
    }

}

export default UserController;