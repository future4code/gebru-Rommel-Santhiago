import { app } from "./app";
import { getAllUsers, getUsersByName, getUsersByType, getUsersByOrder, getUsersByPage} from "./endpoints/getAllUsers";

app.get("/users", getAllUsers);
app.get("/users/:type", getAllUsers);
app.get("/users/name", getUsersByName);
app.get("/users/order", getUsersByOrder);
app.get("/users/page", getUsersByPage);
app.get("/users/type/:type", getUsersByType);