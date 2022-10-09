import {Request, Response} from "express";
import {USERS_MOCK} from "./mocks";
import {app} from "../../index";

app.get('/users', (request : Request, response: Response) => {
    response.send(USERS_MOCK);
});

app.get('/users/:id', (request: Request<{id : number}>, response: Response) => {
    response.send(USERS_MOCK.find(user => user.id == request.params.id));
});