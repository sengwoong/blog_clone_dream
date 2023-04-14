import { getPostData } from "@/service/posts";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return <div>{post.title}</div>;
}
