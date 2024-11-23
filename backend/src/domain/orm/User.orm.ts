import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "@/utils/logger";


//CRUD

/**
 * Method to obtain all Users From Collection "users" in Mongo Server
 */
export const GetAllUsers = async (): Promise<any[]| undefined>=> {
    try{
        let userModel = userEntity();

        //search all users
        return await userModel.find({});

    }catch(error){
        LogError(`[ORM ERROR]: Getting All Users: ${error}`);
    }
}

