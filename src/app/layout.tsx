
import type { Metadata } from "next";
import "../styles/globals.css";
import { peyda } from "@/styles/fonts";
import Providers from "@/lib/providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "فروشگاه اینترنتی کالاچی",
    description: "فروشگاه ابزار و لوازم خانگی",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fa"
            dir="rtl"
            className={cn("font-sans", peyda.variable)}
        >
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
