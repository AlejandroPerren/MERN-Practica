import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?: string): Promise<BasicResponse>
    
}


export interface IUserController {
    //Read all users from Database || Find User by ID(Object ID)
    getUsers(id?: string): Promise<any>
    
    //Delete Users by id
    deleteUser(id?: string): Promise<any>

    //Create new User
    createUser(user: any): Promise<any>

    //Update User
    updateUser(id: string, user: any): Promise<any>
}
