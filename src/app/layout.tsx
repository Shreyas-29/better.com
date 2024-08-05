import "@/styles/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { generateMetadata } from "@/utils/generate-metadata";
import { Manrope } from "next/font/google";

const font = Manrope({ subsets: ["latin"] });

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen w-full antialiased",
                    font.className
                )}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};
