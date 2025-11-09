import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // Recommended for better font loading experience
  variable: "--font-poppins", // Define a CSS variable for easy use
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify desired weights
});

export const metadata: Metadata = {
  title: "Imersão Next.js - Do Zero ao Deploy",
  description:
    "Treinamento de Next.js oferecido pela Serra Jr. Engenharia, empresa júnior da UERJ - Nova Friburgo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
