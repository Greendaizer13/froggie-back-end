import {User} from "./types/user.interface";
export const MAIN_USER_ID = 0;
export const USERS_MOCK: User[] = [
    {
        id: 0,
        firstName: 'Viktor',
        lastName: 'The Great',
        imgUrl: 'https://i.ibb.co/HDvn7k3/IMG-8228.jpg',
        status: 'I am a frog and you are not',
        location: {
            city: 'Boloto',
            country: 'Parasha',
        },
        followedUsers: [2, 3],
    },
    {
        id: 1,
        firstName: 'Tilda',
        lastName: 'Swinton',
        imgUrl: 'https://i.pinimg.com/736x/cb/32/bd/cb32bd242d91701692a5707f5fb7e00a--tilda-swinton-scorpio.jpg',
        status: 'I am the Goddess',
        followedUsers: [1],
    },
    {
        id: 2,
        firstName: 'Mom',
        followedUsers: [1],
    },
    {
        id: 3,
        firstName: 'Alla',
        lastName: 'Pugacheva',
        status: 'Зови меня иностранным агентом',
        followedUsers: [1],
    },
    {
        id: 4,
        firstName: 'User 4',
        lastName: 'Last name',
        status: 'I am user 4',
        followedUsers: [1],
    },
    {
        id: 5,
        firstName: 'user 5',
        followedUsers: [1],
    },
    {
        id: 6,
        firstName: 'User 6',
        lastName: 'User user',
        status: 'This is status',
        followedUsers: [1],
    }
];