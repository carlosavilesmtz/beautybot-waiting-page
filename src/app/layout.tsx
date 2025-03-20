import type { Metadata } from "next";
/*import { Geist, Geist_Mono } from "next/font/google";*/
import "./globals.css";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});*/

/*const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: 'BeautyBot.mx - Próximamente',
  description: 'Lo tuyo es la belleza, lo nuestro es agendar. La mejor plataforma para profesionales de la belleza.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
