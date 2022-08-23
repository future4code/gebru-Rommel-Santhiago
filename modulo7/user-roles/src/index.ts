import { app } from "./controllers/app"
import { userRouter } from "./controllers/routes/UserRoutes"

app.use('/user/', userRouter)
