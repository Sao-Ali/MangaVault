import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import {FloatingNav} from "@/components/ui/floating-navbar";
const dmSans = DM_Sans({ subsets: ["latin"] });
import {FaBook, FaHome} from "react-icons/fa";
import { FaBookmark} from "react-icons/fa";


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
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
            <FloatingNav navItems={[
                {name: 'Home', link:'/', icon: <FaHome />},
                {name: 'Comics', link:'/', icon:<FaBook />},
                {name: 'Bookmark', link:'/', icon:<FaBookmark />},
            ]}/>
            <Hero />
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
