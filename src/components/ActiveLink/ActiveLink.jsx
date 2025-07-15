"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import css from "./ActiveLink.module.css";

export default function ActiveLink({ href, children, locale }) {
  const pathname = usePathname();

  const isHome = href === `/${locale}`;
  const isActive = isHome ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} className={clsx(css.link, isActive && css.active)}>
      {children}
    </Link>
  );
}
