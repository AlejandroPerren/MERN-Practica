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

export default usersRouter;
