import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import '../app/styles/globals.css';
import Whats from "./components/Whatsapp";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Techtins",
  description: "Empresa Júnior de Tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full antialiased">
      <body className={`${montserrat.variable} font-sans min-h-full flex flex-col`}>
        {children}
        <Whats></Whats>
      </body>
    </html>
  );
}