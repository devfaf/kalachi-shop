import localFont from "next/font/local";

export const peyda = localFont({
    src: [
        {
            path: "../assets/fonts/Peyda-Regular.woff2",
            weight: "400",
        },
        {
            path: "../assets/fonts/Peyda-Bold.woff2",
            weight: "700",
        },
    ],
    variable: "--font-peyda",
})