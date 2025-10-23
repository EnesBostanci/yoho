
import type { Metadata } from "next";
import { Lexend, Space_Grotesk, DM_Sans } from 'next/font/google';
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { CardsProvider } from "@/context/CardsContext";
import "./globals.css";

{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
// add logo

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap"
});

const space_grotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap"

});

const dm_snans= DM_Sans({
  variable: "--font-dm_sans",
  subsets: ["latin"],
  display: "swap"

});

export const metadata: Metadata = {
  title: "Yoho",
  description: " YohoWork, the global platform empowering freelancers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <body
        className={`${space_grotesk.variable} ${dm_snans.variable} ${lexend.variable} antialiased`}
      >
        <SiteHeader/>
        <CardsProvider>
        {children}
        </CardsProvider>
        <SiteFooter/>
        
      </body>
    </html>
  );
}
