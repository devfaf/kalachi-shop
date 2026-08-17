import { Metadata } from "next";
import "../styles/globals.css";
import { peyda } from "@/styles/fonts";
import Providers from "@/providers";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}