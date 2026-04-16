import express from "express";
import taskRoute from "./src/routes/task.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extends : true,
    limit : "20kb"
}));

app.use("/api/v1/",taskRoute);

export default app;