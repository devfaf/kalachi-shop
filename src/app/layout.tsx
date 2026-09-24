import { Metadata } from "next";
import "../styles/globals.css";
import { peyda } from "@/styles/fonts";
import Providers from "@/lib/providers";
import Header from "@/components/layout/Header/Header"
import Footer from "@/components/layout/Footer/Footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی کالاچی",
  description: "فروشگاه ابزار و لوازم خانگی",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("font-sans", peyda.variable)}
    >
      <body>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}