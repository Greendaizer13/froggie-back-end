import express from 'express';
import { Request, Response }  from 'express';

const app = express();
const port = 3004;

export interface User {
    id: number,
    firstName: string,
    lastName?: string,
    status?: string,
    imgUrl?: string,
    location?: {
        country?: string,
        city?: string
    },
    followed?: boolean,
}

export const USERS_DATA: User[] = [
    {
        id: 0,
        firstName: 'Viktor',
        lastName: 'The Great',
        imgUrl: 'https://i.ibb.co/HDvn7k3/IMG-8228.jpg',
        status: 'I am a frog and you are not',
        followed: true,
    },
    {
        id: 1,
        firstName: 'Tilda',
        lastName: 'Swinton',
        imgUrl: 'https://avatars.mds.yandex.net/i?id=06f9fd95d436f5e6f313c68d4ff7cbe9-5333993-images-thumbs&n=13&exp=1',
        status: 'I am the Goddess',
        followed: true,
    },
    {
        id: 3,
        firstName: 'Mom'
    },
    {
        id: 4,
        firstName: 'Viego',
    },
    {
        id: 5,
        firstName: 'Ekaterina',
        lastName: 'Sovetnikova',
    },
    {
        id: 6,
        firstName: 'Savelev',
        lastName: 'Dmitry',
        status: "I'm the best at react and front-end coding",
        location: {
            country: 'Russia',
            city: 'Krasnodar'
        },
        followed: true,
    },
    {
        id: 7,
        firstName: 'Sean',
        lastName: 'Dias',
    },
];

app.get('/users', (request : Request, response: Response) => {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    response.send(USERS_DATA);
});

app.get('/users/:id', (request: Request<{id : number}>, response: Response) => {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    response.send(USERS_DATA.find(user => user.id == request.params.id));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});