import * as express from 'express';
import {MAIN_USER_ID, USERS_MOCK} from "./mocks";
import {Request, Response} from "express";
import {Controller} from "../controller.interface";
import {UserViewModel} from "./types/user.view.model";
import {ChangeFollowStateModel} from "./types/change.follow.state.model";

class UsersController implements Controller {
    public path = '/users';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllUsers);
        this.router.get(this.path + '/:id', this.getUserById);
        this.router.get(this.path + '/main', this.getMainUser);
        this.router.patch(this.path + '/change-follow-state', this.changeFollowState)
    }

    getMainUser = (request: Request, response: Response) => {
        response.send(USERS_MOCK.find(user => user.id == MAIN_USER_ID))
    }

    //TODO: google how define function in class and use it int other functions

    getAllUsers = (request: Request, response: Response) => {

        // TODO: type the response
        function isFollowed(userid: number) : boolean {
            const mainUser = USERS_MOCK.find(mUser => mUser.id == MAIN_USER_ID);
            return mainUser?.followedUsers?.includes(userid) ?? false;
        }

        response.send(USERS_MOCK
            .filter(user => user.id != MAIN_USER_ID)
            .map(user => <UserViewModel> {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                status: user.status,
                imgUrl: user.imgUrl,
                followed: isFollowed(user.id),
            }
        ));
    }

    getUserById = (request: Request<{id : number}>, response: Response) => {
        const user = USERS_MOCK.find(user => user.id == request.params.id);
        response.send(user);
    }

    changeFollowState = (request: Request<{}, {}, ChangeFollowStateModel>, response: Response) => {
        const mainUser = USERS_MOCK.find(mUser => mUser.id == MAIN_USER_ID)!;
        if (request.body.follow)
        {
            mainUser.followedUsers.push(request.body.id);
        }
        else {
            const indexToRemove = mainUser.followedUsers.indexOf(request.body.id);
            if (indexToRemove > -1)
            {
                mainUser.followedUsers.splice(indexToRemove, 1);
            }

        }
        response.sendStatus(200);
    }

}

export default UsersController;