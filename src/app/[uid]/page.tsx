import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import dayjs from "dayjs";
import { asText } from "@prismicio/client";
import "./styles.scss";

interface BlogPostProps {
  params: {
    uid: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const prismicClient = createClient();
  const post = await prismicClient
    .getByUID("post_blog", params.uid)
    .catch(() => notFound());
  return (
    <div className="flex flex-col gap-4" id="blogPost">
      <header className="flex flex-col gap-4">
        <Link
          href=".."
          className="hover: opacity-80 transition-opacity flex gap-2 items-center mb-5"
        >
          <CircleArrowLeft /> Voltar
        </Link>
        <h1 className="text-3xl font-bold">{asText(post.data.title)}</h1>
        <h2 className="text-xl">{asText(post.data.subtitle)}</h2>
        <PrismicImage
          field={post.data.image}
          className="h-auto w-auto rounded-xl"
        />
        <section>
          {post.data.autor} - Criado em{" "}
          {dayjs(post.first_publication_date).format("DD/MM/YYYY")}
        </section>
      </header>
      <hr />
      <main className="flex flex-col gap-4 font-light">
        {post.data.content.map((item, index) => (
          <section key={index}>
            <h3 className="text-2xl font-medium ">{asText(item.title)}</h3>
            <PrismicRichText field={item.body} />
          </section>
        ))}
      </main>
    </div>
  );
}
