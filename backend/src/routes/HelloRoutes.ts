import express, { Request, Response } from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";


let helloRouter = express.Router();

helloRouter.route("/")
    .get(async (req: Request, res: Response) => {
    //obtener a Query Param

    let name: string | undefined = req?.query?.name;
    LogInfo(`Query Param: ${name}`);

    // instancia del Controllador
    const controller: HelloController = new HelloController();
    //obtenemos la respuesta
    const response = await controller.getMessage(name)
    //mandamos la Respuesta
    return res.send(response)
})

export default helloRouter;