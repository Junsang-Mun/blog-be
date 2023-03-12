import Post from "../interfaces/Post.ts";

// deno-lint-ignore prefer-const
let posts: Post[] = [
	{
		id: self.crypto.randomUUID(),
		title: "First Post",
		body: "<p>asdfasdflaskdjflkasjdlf</p>",
		date: "2022-01-01",
	},
	{
		id: self.crypto.randomUUID(),
		title: "Second Post",
		body: "<p>192384792483749283759860</p>",
		date: "2022-01-02",
	},
	{
		id: self.crypto.randomUUID(),
		title: "Third Post",
		body: "<p>plplmplmplmplmplmplmplmplm</p>",
		date: "2022-01-03",
	}
]

export default posts;