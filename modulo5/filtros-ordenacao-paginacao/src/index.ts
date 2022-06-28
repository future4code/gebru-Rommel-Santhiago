import { app } from "./app";
import { getUsersByName, getUsersByType} from "./endpoints/getAllUsers";

app.get("/users", getUsersByName);
app.get("/users/:type", getUsersByType);