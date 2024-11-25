import { Body, Delete, Get, Path, Post, Put, Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogError, LogSuccess, LogWarning } from "../utils/logger";
import { getAllUsers, getUserByID, deleteUserByID, createUser, updateUserById } from "../domain/orm/User.orm";

@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {
    
    /**
     * Endpoint to retrieve users from the "Users" collection in the DB.
     * @param If an ID is provided, retrieves the specific user; otherwise, retrieves all users.
     * @returns  all users or one user
    */
    @Get("/")
    public async getUsers(@Query() id?: string): Promise<any> {
        LogSuccess(`[/api/users] Get Users Request with id: ${id || "none"}`);

        return id ? await getUserByID(id) : await getAllUsers();
    }

      /**
     * Endpoint to delete users from the "Users" collection in the DB.
     * @param   if an ID is provided, retrieves the specific user; otherwise, retrieves all users.
     * @returns  message informing if deletion was corrrect
    */
    @Delete("/")
    public async deleteUser(@Query() id?: string): Promise<any> {
        if (id) {
            LogSuccess(`[/api/users] Delete User Request with id: ${id}`);
            const response = await deleteUserByID(id);
            return response?.deletedCount
                ? { message: `User with id ${id} successfully deleted.` }
                : { message: `User with id ${id} not found.` };
        } else {
            LogWarning(`[/api/users] Delete User Request without id.`);
            return { message: "Please, provide a valid ID." };
        }
    }
     /**
     * Endpoint to create a new user from the "Users" collection in the DB.
     * 
     */
     @Post("/")
     public async createUser(@Body() user: any): Promise<any> {
         try {
             const response = await createUser(user);
             return {
                 success: true,
                 message: "User created successfully.",
                 data: response,
             };
         } catch (error) {
             LogError(`[POST /api/users] Error creating user: ${error}`);
             return {
                 success: false,
                 message: "Error creating user.",
                 error: error,
             };
         }
     }
     

     @Put("/")
public async updateUser(@Query() id: string, @Body() user: any): Promise<any> {
    if (id) {
        try {
            const response = await updateUserById(id, user);
            return response
                ? { success: true, message: `User with id ${id} successfully updated.` }
                : { success: false, message: `User with id ${id} not found.` };
        } catch (error) {
            LogError(`[PUT /api/users] Error updating user: ${error}`);
            return { success: false, message: "Error updating user.", error: error };
        }
    } else {
        return { success: false, message: "Please, provide a valid ID." };
    }
}






}
