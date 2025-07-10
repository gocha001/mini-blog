"use client";
import { useRouter, usePathname } from "next/navigation";
import css from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (l) => {
    if (l === currentLocale) return;
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = l;
    router.push("/" + segments.join("/"));
  };

  return (
    <div className={css.switcher}>
      {["en", "uk"].map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`${l === currentLocale ? css.active : undefined} ${
            css.btn
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
