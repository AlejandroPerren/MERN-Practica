import app from "@/app";

import env from "@/utils/validateEnv"

import rootRouter from '../routes'
const PORT = env.PORT || 4000

app.use("/api", rootRouter )



app.listen(PORT, ()=> {
    console.log("Server Start in Port: ", PORT);
});

