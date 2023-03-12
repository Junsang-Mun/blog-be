import { Context, RouterContext } from "https://deno.land/x/oak/mod.ts";
import posts from "../mocks/post.ts";
import Post from "../interfaces/Post.ts";

export default {
	getAllPosts: ({ response }: Context) => {
		response.status = 200;
		response.body = {
			success: true,
			data: posts,
		}
	},
	createPost: async ( ctx: Context, ) => {
		const { value } = ctx.request.body({ type: 'json' });
		const { title, body, date } = await value;
		if (!title || !body || !date) {
			ctx.response.status = 400;
			ctx.response.body = {
				success: false,
				message: "No data provided",
			};
			return;
		}
		const newPost: Post = {
			id: self.crypto.randomUUID(),
			title: title,
			body: body,
			date: date,
		};
		const data = [...posts, newPost];
		ctx.response.body = {
			success: true,
			data,
		};
	},
	getPostById: (ctx: RouterContext) => {
		const post: Post | undefined = posts.find((t) => {
			return t.id === ctx.params.id;
		});
		if (!post) {
			ctx.response.status = 404;
			ctx.response.body = {
				success: false,
				message: "No such post",
			};
			return;
		}
		ctx.response.status = 200;
		ctx.response.body = {
			success: true,
			data: post,
		};
	},
	updatePostById: () => {},
	deletePostById: () => {},
}