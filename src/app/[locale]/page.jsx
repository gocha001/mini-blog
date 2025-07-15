import css from "./page.module.css";
import React from "react";
import Link from "next/link";
import { getPosts } from "@/lib/api";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const dist = await getDictionary(locale);
  return {
    title: dist.meta?.home || "Posts",
  };
}

export default async function Home({ params }) {
  const locale = params.locale;
  const posts = await getPosts();
  const dist = await getDictionary(locale);

  return (
    <>
      <h1 className={css.title}>{dist.home}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${locale}/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
