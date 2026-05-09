import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PiP Cam - Widget de Câmera Flutuante",
  description:
    "Widget de câmera flutuante inteligente (Picture-in-Picture) desenvolvido com Python e PyQt6. Sobreposição de webcam sempre-visível para streamers e apresentadores.",
  keywords: [
    "pip cam",
    "picture-in-picture",
    "webcam overlay",
    "streaming",
    "pyqt6",
    "python",
    "câmera flutuante",
  ],
  openGraph: {
    title: "PiP Cam - Widget de Câmera Flutuante",
    description:
      "Widget de câmera flutuante inteligente (Picture-in-Picture) desenvolvido com Python e PyQt6.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
