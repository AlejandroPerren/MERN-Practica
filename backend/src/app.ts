import express,{Express} from "express";
import cors from "cors"
import helmet from "helmet"

const app: Express = express();

app.use(helmet());
app.use(cors())

app.use(express.json({limit: '50mb'}))

app.use(express.urlencoded({extended: true, limit: '50mb'}))

export default app;
