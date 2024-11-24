//express
import express,{Express, Request, Response } from "express";
//security
import cors from "cors";
import helmet from "helmet";

//ENV
import dotenv from "dotenv";
dotenv.config();

//express Config
const server: Express = express();
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({extended: true, limit: '50mb'}));

//swagger
import swaggerUi from "swagger-ui-express";


//Security Config
server.use(helmet());
server.use(cors());

//Root Router
import router from "../routes";
import mongoose from "mongoose";

//Static Server
server.use(express.static('public'));

//Mongoose Conection
const DBMONGO = process.env.MONGO_CONNECTION;
if (!DBMONGO) {
    throw new Error("MONGO_CONNECTION is not defined in environment variables.");
}
mongoose
    .connect(DBMONGO)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

//swagger config route
server.use("/docs", swaggerUi.serve, swaggerUi.setup(undefined,{
    swaggerOptions: {
        url: "/swagger.json",
        explorer: true
    }
}));

//server in /api
server.use("/api", router);


//always api redirect
server.get("/",(req: Request, res: Response)=>{
    res.redirect("/api");
});



export default server;