import css from "./page.module.css";
import { getPost, getPosts } from "@/lib/api";
import { locales } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionary";
import NotFound from "../../not-found/not-found";
import { capitalizeFirst } from "@/lib/capitalizeFirst";

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const dist = await getDictionary(locale);

  return {
    title: dist.meta?.post || "Post",
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return locales.flatMap((locale) =>
    posts.map((post) => ({
      id: post.id.toString(),
      locale,
    }))
  );
}

export default async function PostPage({ params }) {
  const locale = params.locale;
  const id = params.id;
  const post = await getPost(id);

  if (!post) {
    return <NotFound locale={locale} />;
  }

  return (
    <article>
      <h2 className={css.postTitle}>{capitalizeFirst(post.title)}</h2>
      <p className={css.postBody}>{capitalizeFirst(post.body)}</p>
    </article>
  );
}
