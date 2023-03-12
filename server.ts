import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import postController from "./controllers/post.ts"

const router = new Router();
router
  .get('/api/posts', postController.getAllPosts)
  .post('/api/posts', postController.createPost)
  .get('/api/posts/:id', postController.getPostById)
  .put('/api/posts/:id', postController.updatePostById)
  .delete('/api/posts/:id', postController.deletePostById);

const app = new Application();
const port = 8080;
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener(
  "listen",
  (_e) => console.log(`Listening on http://localhost:${port}`),
);
await app.listen({ port: port });
