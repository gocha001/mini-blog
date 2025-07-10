import React from "react";
import css from "./Header.module.css";
import Link from "next/link";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { getDictionary } from "@/lib/dictionary";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "uk" }];
}

export default async function Header({ locale }) {
  const dist = await getDictionary(locale);

  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <Link href={`/${locale}`}>{dist.nav.home}</Link>
        <Link href={`/${locale}/about`}>{dist.nav.about}</Link>
      </nav>
      <LocaleSwitcher currentLocale={locale} />
    </div>
  );
}
