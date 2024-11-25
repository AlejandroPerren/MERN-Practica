import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?: string): Promise<BasicResponse>
    
}


export interface IUserController {
    //Read all users from Database || Find User by ID(Object ID)
    getUsers(id?: string): Promise<any>   
}
