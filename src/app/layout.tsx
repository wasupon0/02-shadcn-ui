import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cook book",
  description: "Cook book recipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-slate-900 to-indigo-900`}
      >
        <nav>
          <h1 className="text-white m-8">Recipes and Foods</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
