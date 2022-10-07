import { app } from "./controller/app";
import { dogWalkingRouter } from "./controller/routes/dogWalkingRouter";

app.use('/', dogWalkingRouter );