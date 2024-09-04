import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import MainContent from "@/components/layout/main-content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valtech Front Challenge",
  description: "Valtech react front challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <MainContent>{children}</MainContent>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
