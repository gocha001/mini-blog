import css from "./layout.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Localized App",
  icons: {
    icon: "/favicon.png",
  },
  description: "Page with i18n layout",
};

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;
  return (
    <>
      <Header locale={locale} />
      <main className={css.main}>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
