import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";
import { BasicResponse } from "@/controller/types";

let helloRouter = express.Router();

helloRouter.route("/")
    .get(async (req: Request, res: Response) => {
        // Obtener el parámetro de consulta
        let name: string | undefined = req?.query?.name as string | undefined;
        LogInfo(`Query Param: ${name}`);

        // Instancia del controlador
        const controller: HelloController = new HelloController();

        // Obtener la respuesta
        const response: BasicResponse = await controller.getMessage(name);

        // Mandar la respuesta sin retornar explícitamente
        res.send(response);
    });

export default helloRouter;
