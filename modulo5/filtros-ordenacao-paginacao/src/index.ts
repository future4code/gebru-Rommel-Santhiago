import { app } from "./app";
import { getUsersByName, getUsersByType, getUsersByOrder, getUsersByPage} from "./endpoints/getAllUsers";

app.get("/users", getUsersByName);
app.get("/users/order", getUsersByOrder);
app.get("/users/page", getUsersByPage);
app.get("/users/:type", getUsersByType);