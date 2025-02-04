import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Headers from "@/components/Header";
const dmSans = DM_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Anime Vault",
    description: "Your favorite anime, all in one place.",
};
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={dmSans.className}>
        <Headers />
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
            <Hero />
            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}
