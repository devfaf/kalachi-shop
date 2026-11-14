
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import BottomNavigation from "@/components/layout/mobile/bottom-navigation/BottomNavigation";

export default function ShopLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />

            <main>
                {children}
            </main>

            <BottomNavigation />

            <Footer />
        </>
    );
}
