import {Get, Query, Route, Tags} from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

//ORM Users-Collection
import { getAllUsers, getUserByID } from "../domain/orm/User.orm";



@Route("/api/users")
@Tags("UserController")

@Get("/")
export class UserController implements IUserController {
    /**
     * Endpoint to retrieve users from the "Users" collection in the DB.
     * If an ID is provided, retrieves the specific user; otherwise, retrieves all users.
     */
    public async getUsers(@Query() id?: string): Promise<any> {
        LogSuccess(`[/api/users] Get Users Request with id: ${id || 'none'}`);

        if (id) {
            // Fetch user by ID
            const response = await getUserByID(id);
            return response;
        } else {
            // Fetch all users
            const response = await getAllUsers();
            return response;
        }
    }
}

