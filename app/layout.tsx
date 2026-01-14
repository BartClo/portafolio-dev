import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio de Ingeniería",
  description: "Portafolio personal de estudiante de ingeniería de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
