import React from "react";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params: { locale } }) {
  const dist = await getDictionary(locale);
  return {
    title: dist.meta?.about || "About Us",
  };
}

export default async function aboutPage() {
  return <div>Page</div>;
}
