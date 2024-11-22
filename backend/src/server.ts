import app from "./app";
import env from "./utils/validateEnv"

const PORT = env.PORT || 4000

app.listen(PORT, ()=> {
    console.log("Server Start in Port: ", PORT);
});

