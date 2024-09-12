import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { createClient } from "@/prismicio";
import PostItem from "@/components/Posts/PostItem";

export default async function ArticlePage() {
  const prismicClient = createClient();
  const posts = await prismicClient.getAllByType("post_blog").catch((e) => {
    console.error(e);
    return [];
  });
  return (
    <div>
      <Link href="/">
        <span>
          <ArrowBigLeft />
        </span>
      </Link>
      <article className="mx-auto max-w-4xl space-y-6 px-4 sm:px-0">
        <div className="grid grid-cols-1 space-y-8">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </article>
    </div>
  );
}
