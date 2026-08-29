import { Metadata } from "next";
import "../styles/globals.css";
import { peyda } from "@/styles/fonts";
import Providers from "@/providers";
import Header from "@/components/layout/Header/Header"
import { CssBaseline } from "@mui/material";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی کالاچی",
  description: "فروشگاه ابزار و لوازم خانگی",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={peyda.variable}
    >
      <body>
        <Providers>
          <Header />
          <main>
            <CssBaseline />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}