import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ImpactIT - Profesjonell IT-utstyr",
  description:
    "Lån profesjonell IT-utstyr til din bedrift. Laptops, skjermer, nettbrett, og mer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
