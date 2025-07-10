import React from "react";
import css from "./Footer.module.css";
import { getDictionary } from "@/lib/dictionary";

export default async function Footer({ locale }) {
  const dist = await getDictionary(locale);

  return <div className={css.footer}>© 2025 {dist.footer}</div>;
}
