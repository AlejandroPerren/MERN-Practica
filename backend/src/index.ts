import server from "./server";
import { LogError } from "./utils/logger";
import dotenv from "dotenv";
dotenv.config();

const PORT: string | number  = process.env.PORT || 8000


server.listen(PORT, ()=> {
    console.log("Server Start in Port: ", PORT);
});

server.on('error',(error)=> {
    LogError(`[SERVER ERROR]: ${error}`)
})