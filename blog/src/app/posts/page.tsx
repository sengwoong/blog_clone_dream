import FilterAblePost from "@/components/BlogFiterCategory/FilterAblePosts";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categoires = [...new Set(posts.map((posts) => posts.category))];
  return <FilterAblePost posts={posts} categoires={categoires} />;
}
