import { getPost, getPosts } from "@/lib/api";
import { locales } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionary";
import NotFound from "../../not-found/not-found";

export async function generateMetadata({ params: { locale } }) {
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

export default async function PostPage({ params: { id, locale } }) {
  const post = await getPost(id);

  if (!post) {
    return <NotFound locale={locale} />;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
