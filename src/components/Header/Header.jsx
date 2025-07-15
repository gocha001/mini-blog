import React from "react";
import css from "./Header.module.css";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { getDictionary } from "@/lib/dictionary";
import ActiveLink from "../ActiveLink/ActiveLink";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "uk" }];
}

export default async function Header({ locale }) {
  const dist = await getDictionary(locale);

  return (
    <div className={css.headerWrapper}>
      <div className={css.header}>
        <nav className={css.nav}>
          <ActiveLink href={`/${locale}`} locale={locale}>
            {dist.nav.home}
          </ActiveLink>
          <ActiveLink href={`/${locale}/about`} locale={locale}>
            {dist.nav.about}
          </ActiveLink>
        </nav>
        <LocaleSwitcher currentLocale={locale} />
      </div>
    </div>
  );
}
