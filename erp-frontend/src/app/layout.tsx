import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
// import Link from "next/link";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admmiz",
  description: "",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="ico" href="./favicon.ico" sizes="any" />
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
