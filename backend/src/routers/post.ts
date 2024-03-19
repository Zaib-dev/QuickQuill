import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { Hono } from "hono";
import { createPostInput, updatePostInput } from "@shahzaib_01/medium_common";

export const postApp = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

postApp.use("/*", async (c, next) => {
  try {
    const jwt = c.req.header("Authorization") || "";
    if (!jwt) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    const token = jwt.split(" ")[1];
    const secretKey = c.env.JWT_SECRET;
    const decodedPayload = await verify(token, secretKey);
    if (!decodedPayload) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    c.set("userId", decodedPayload.id);
    await next();
  } catch (error) {
    c.status(401);
    return c.json({ message: error });
  }
});

postApp.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid Input" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("userId"),
      },
    });
    return c.json({ post });
  } catch (error) {
    c.status(404);
    return c.json({ error });
  }
});

postApp.put("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  const { success } = updatePostInput.safeParse(body);
  console.log(success);
  if (!success) {
    c.status(400);
    return c.json({ message: "Invalid Input" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({ post });
  } catch (error) {
    c.status(404);
    return c.json({ error });
  }
});

postApp.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      c.status(401);
      c.json({ message: "Post not found" });
    }
    return c.json({ post });
  } catch (error) {
    c.status(404);
    return c.json({ error });
  }
});

postApp.get("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    if (!posts) {
      c.status(401);
      c.json({ message: "Posts not found" });
    }
    return c.json({ posts });
  } catch (error) {
    c.status(404);
    return c.json({ error });
  }
});
