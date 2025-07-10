import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";

export default async function NotFound({ locale }) {
  const dict = await getDictionary(locale);

  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404</h1>
      <h2>{dict.notFound.title}</h2>
      <Link href={`/${locale}`}>{dict.notFound.back}</Link>
    </div>
  );
}
