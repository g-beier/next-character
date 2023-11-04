import type { Metadata } from "next";
import "./globals.css";
import NextAuthProvider from "./_components/NextAuthProvider";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "NextCharacter",
  description: "RPG character sheet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
