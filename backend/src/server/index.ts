//express
import express,{Express, Request, Response } from "express";
//security
import cors from "cors";
import helmet from "helmet";

//express Config
const server: Express = express();
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({extended: true, limit: '50mb'}));

//Security Config
server.use(helmet());
server.use(cors());

//Root Router
import router from "../routes";

//Static Server
server.use(express.static('public'));


//server in /api
server.use("/api", router );


//always api redirect
server.get("/",(req: Request, res: Response)=>{
    res.redirect("/api");
});



export default server;