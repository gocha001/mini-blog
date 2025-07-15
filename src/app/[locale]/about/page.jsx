import css from "./page.module.css";
import React from "react";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const dist = await getDictionary(locale);

  return {
    title: dist.meta?.about || "About Us",
  };
}

export default async function aboutPage({ params }) {
  const locale = params.locale;
  const dist = await getDictionary(locale);

  return (
    <div className={css.about}>
      <h2 className={css.aboutTitle}>{dist.about.title}</h2>
      <p className={css.aboutContent}>{dist.about.content}</p>
    </div>
  );
}
