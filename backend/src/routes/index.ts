/*
Root Router
Se encarga de las peticiones
*/

import express,{Request, Response} from "express";
import helloRouter from "./HelloRoutes";
import { LogInfo } from "../utils/logger";
import usersRouter from "./UserRouter";

//intancia del server

let server = express();

//instancia del ruter

let rootRouter = express.Router();

//activar cuando hagamos peticiones

rootRouter.get("/", (req: Request, res: Response)=> {
    LogInfo("que onda chabal")
    res.send("hola que tal probando")
})

//redirecciones
server.use("/", rootRouter);
server.use("/hello", helloRouter);

//Users
server.use("/users", usersRouter)


export default server;
