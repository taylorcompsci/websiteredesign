import type { Metadata } from "next";
import { Intel_One_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const IntelOneMonoFont = Intel_One_Mono({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-intel-one",
  display: "swap"
})

const BricolageGrotesqueFont = Bricolage_Grotesque({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${IntelOneMonoFont.variable} ${BricolageGrotesqueFont.variable} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
