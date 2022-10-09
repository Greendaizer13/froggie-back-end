import {User} from "./user.interface";
export const USERS_MOCK: User[] = [
    {
        id: 0,
        firstName: 'Viktor',
        lastName: 'The Great',
        imgUrl: 'https://i.ibb.co/HDvn7k3/IMG-8228.jpg',
        status: 'I am a frog and you are not',
        followedUsers: [2, 3],
    },
    {
        id: 1,
        firstName: 'Tilda',
        lastName: 'Swinton',
        imgUrl: 'https://avatars.mds.yandex.net/i?id=06f9fd95d436f5e6f313c68d4ff7cbe9-5333993-images-thumbs&n=13&exp=1',
        status: 'I am the Goddess',
        followedUsers: [1],
    },
    {
        id: 2,
        firstName: 'Mom'
    },
    {
        id: 3,
        firstName: 'Alla',
        lastName: 'Pugacheva',
        status: 'Зови меня иностранным агентом'
    }
];