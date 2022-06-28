import { app } from "./app";
import { getUsersByName, getUsersByType, getUsersByOrder} from "./endpoints/getAllUsers";

app.get("/users", getUsersByName);
app.get("/users/order", getUsersByOrder);
app.get("/users/:type", getUsersByType);