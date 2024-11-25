import { userEntity } from "../entities/User.entity";
import { LogError } from "../../utils/logger";

/**
 * Method to obtain all Users from Collection "users"
 */
export const getAllUsers = async (): Promise<any[]> => {
    try {
        const userModel = userEntity();
        return await userModel.find({});
    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Users: ${error}`);
        throw error;
    }
};

/**
 * Method to obtain a User by ID
 */
export const getUserByID = async (id: string): Promise<any | null> => {
    try {
        const userModel = userEntity();
        return await userModel.findById(id);
    } catch (error) {
        LogError(`[ORM ERROR]: Getting User By ID: ${error}`);
        throw error;
    }
};

/**
 * Method to delete a User by ID
 */
export const deleteUserByID = async (id: string): Promise<any | null> => {
    try {
        const userModel = userEntity();
        return await userModel.deleteOne({ _id: id });
    } catch (error) {
        LogError(`[ORM ERROR]: Deleting User By ID: ${error}`);
        throw error;
    }
};

//create New user

export const createUser = async(user: any): Promise<any | undefined> =>{
    try {
        let userModel = userEntity();
        //create / Insert new User
        return await userModel.create(user)
    } catch (error) {
        LogError(`[ORM ERROR]: Creating User ${error}`);
    }
}

export const updateUserById = async (id: string, user:any ): Promise<any | undefined> =>{
    try {
        let userModel = userEntity();

        //update User
        return await userModel.findByIdAndUpdate(id, user);
    } catch (error) {
        LogError(`[ORM ERROR]: Updating User ${id}: ${error}`);
    }
}