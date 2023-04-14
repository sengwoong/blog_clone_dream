"use client";
import { Post } from "@/service/posts";
import React, { useState } from "react";
import PostsGrid from "../BlogCard/PostsGrid";
import Categories from "./Categories";
type Props = {
  posts: Post[]; //포스트들
  categoires: string[]; //파람
};

const All_Posts = "All Posts";
export default function FilterAblePost({ posts, categoires }: Props) {
  const [selected, setSelected] = useState(All_Posts);
  const filtered =
    selected === All_Posts
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[All_Posts, ...categoires]}
        selected={selected}
        onClick={(selected) => setSelected(selected)}
      />
    </section>
  );
}
