import "@/app/globals.css";
import css from "./layout.module.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${font.className} ${css.body}`}>
        <Header />
        <main className={css.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
