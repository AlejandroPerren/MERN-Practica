import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";


//CRUD

/**
 * Method to obtain all Users From Collection "users" in Mongo Server
 */
export const getAllUsers = async (): Promise<any[]| undefined>=> {
    try{
        let userModel = userEntity();

        //search all users
        return await userModel.find({});

    }catch(error){
        LogError(`[ORM ERROR]: Getting All Users: ${error}`);
    }
}

export const getUserByID = async (id: string): Promise<any | undefined>=> {
    try{
        let userModel = userEntity();

        //search user BY id
        return await userModel.findById(id);

    }catch(error){
        LogError(`[ORM ERROR]: Getting User By Id: ${error}`);
    }
}


