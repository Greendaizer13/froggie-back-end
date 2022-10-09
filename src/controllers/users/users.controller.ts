import * as express from 'express';
import {USERS_MOCK} from "./mocks";
import {Request, Response} from "express";
import {Controller} from "../controller.interface";

class UsersController implements Controller {
    public path = '/users';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllUsers);
        this.router.get(this.path + '/:id', this.getUserById);
    }

    getAllUsers = (request: Request, response: Response) => {
        response.send(USERS_MOCK);
    }

    getUserById = (request: Request<{id : number}>, response: Response) => {
        const user = USERS_MOCK.find(user => user.id == request.params.id);
        response.send(user);
    }
}

export default UsersController;