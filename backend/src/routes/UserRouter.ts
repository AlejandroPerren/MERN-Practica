import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { UserController } from "../controller/UsersController";


let usersRouter = express.Router();

// /api/users?id=
usersRouter.route("/")
    .get(async (req: Request, res: Response) => {
        //obtain a Query Param ID
        let id: any = req?.query?.id;
        LogInfo(`QueryParam: ${id}`)
        // Instancia del controlador
        const controller: UserController = new UserController();

        // Obtener la respuesta
        const response: any = await controller.getUsers(id);

        // Mandar la respuesta sin retornar explícitamente
        res.send(response);
    });
    //Delete
    .delete (async (req: Request, res: Response) => {
    try {
        // Obtain a query parameter ID
        const id: string | undefined = req.query.id as string;
        LogInfo(`QueryParam for deletion: ${id}`);

        // Validate ID
        if (!id) {
            res.status(400).send({ message: "User ID is required for deletion" });
            return;
        }

        // Instantiate the controller
        const controller: UserController = new UserController();

        // Call the delete method (assuming it's implemented in the controller)
        const response = await controller.deleteUser(id);

        // Send the response
        res.status(200).send(response);
    } catch (error) {
        LogInfo(`Error deleting user: ${error}`);
        res.status(500).send({
            message: "Error deleting user",
            error: error.message,
        });
    }
});
export default usersRouter;
