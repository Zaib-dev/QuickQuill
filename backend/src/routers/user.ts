import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { Hono } from "hono";
import { signinInput, signupInput } from "@shahzaib_01/medium_common";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

type Variables = {
  userId: string;
};

export const userApp = new Hono<{
  Bindings: Bindings;
  Variables: Variables;
}>();

userApp.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid Input" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const payload = { id: user.id };
    const secret = c.env.JWT_SECRET;
    const token = await sign(payload, secret);
    return c.json({ token: `Bearer ${token}` });
  } catch (error) {
    c.status(404);
    return c.json({ message: "Invalid Credentials" });
  }
});
userApp.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ messaeg: "Invalid Input" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) {
      c.status(404);
      return c.json({ message: "invalid crendentials" });
    }
    const payload = { id: user.id };
    const secret = c.env.JWT_SECRET;
    const token = await sign(payload, secret);
    return c.json({ token: `Bearer ${token}` });
  } catch (error) {
    c.status(404);
    return c.json({ error });
  }
});
