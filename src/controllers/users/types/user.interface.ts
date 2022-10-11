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
    followedUsers: number[],
}