export interface UserViewModel{
    id: number,
    firstName: string,
    lastName?: string,
    status?: string,
    imgUrl?: string,
    followed: boolean,
}