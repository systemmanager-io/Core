import UserLoginController from "../Controllers/UserLoginController";
import jwtMiddleware from "../Middlewares/jwtMiddleware";
import {app} from "../../connectors";

app.post("/manage/login", function (req, res, next) {
    UserLoginController.login(req, res, next)
});

app.use("/manage", function (req, res, next) {
    jwtMiddleware(req, res, next)
});