import { Hono } from "hono";
import { userApp } from "./routers/user";
import { postApp } from "./routers/post";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

app.use("/api/*", cors());

app.route("/api/v1/user", userApp);
app.route("/api/v1/post", postApp);

export default app;
