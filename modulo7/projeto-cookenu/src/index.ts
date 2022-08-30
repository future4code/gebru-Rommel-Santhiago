import { app } from "./controllers/app"
import { recipeRouter } from "./controllers/routes/RecipeRoutes"
import { userRouter } from "./controllers/routes/UserRoutes"

app.use('/user/', userRouter)

app.use('/recipe/', recipeRouter)