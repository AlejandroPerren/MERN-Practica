import express, { Request, Response } from "express";
import { LogInfo, LogError } from "../utils/logger";
import { UserController } from "../controller/UsersController";

let usersRouter = express.Router();

// /api/users
usersRouter
    .route("/")
    // GET: Retrieve users
    .get(async (req: Request, res: Response) => {
        try {
            // Obtain a query parameter ID
            const id = req.query.id as string | undefined;
            LogInfo(`QueryParam: ${id}`);

            // Instantiate the controller
            const controller: UserController = new UserController();

            // Obtain the response
            const response = await controller.getUsers(id);

            // Send the response
            res.status(200).send(response);
        } catch (error) {
            LogError(`[GET /api/users] Error: ${error}`);
            res.status(500).send({
                message: "Error retrieving users",
                error: error,
            });
        }
    })
    // POST: Create a new user
    .post(async (req: Request, res: Response) => {
        try {
            // Get user data from the body
            const userData = req.body;
            LogInfo(`Request Body: ${JSON.stringify(userData)}`);

            // Instantiate the controller
            const controller: UserController = new UserController();

            // Call the create method
            const response = await controller.createUser(userData);

            // Send the response
            res.status(201).send(response);
        } catch (error) {
            LogError(`[POST /api/users] Error: ${error}`);
            res.status(500).send({
                message: "Error creating user",
                error: error,
            });
        }
    })
    // DELETE: Delete a user by ID
    .delete(async (req: Request, res: Response) => {
        try {
            // Obtain a query parameter ID
            const id = req.query.id as string | undefined;
            LogInfo(`QueryParam for deletion: ${id}`);

            // Validate ID
            if (!id) {
                res.status(400).send({ message: "User ID is required for deletion" });
                return;
            }

            // Instantiate the controller
            const controller: UserController = new UserController();

            // Call the delete method
            const response = await controller.deleteUser(id);

            // Send the response
            res.status(200).send(response);
        } catch (error) {
            LogError(`[DELETE /api/users] Error: ${error}`);
            res.status(500).send({
                message: "Error deleting user",
                error: error,
            });
        }
    })
    .put(async (req: Request, res: Response) => {
        try {
            // Obtain query param and body
            const id = req.query.id as string | undefined;
            const userData = req.body;

            if (!id) {
                res.status(400).send({ success: false, message: "User ID is required for updating" });
                return;
            }

            LogInfo(`Updating user with ID: ${id}`);

            // Instantiate the controller
            const controller: UserController = new UserController();

            // Call the update method
            const response = await controller.updateUser(id, userData);

            res.status(200).send(response);
        } catch (error) {
            LogError(`[PUT /api/users] Error: ${error}`);
            res.status(500).send({ success: false, message: "Error updating user", error: error });
        }
    });



export default usersRouter;
