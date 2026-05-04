import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aether Flux | Web3 Command Center",
  description: "Real-time blockchain intelligence and portfolio visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <main style={{ marginLeft: '240px', minHeight: '100vh', padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
