import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
import { IMPACTIT_CONFIG } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {IMPACTIT_CONFIG.isProd && (
            <Script
              id="CookieConsent"
              src="https://policy.app.cookieinformation.com/uc.js"
              data-culture="NB"
              data-gcm-version="2.0"
              type="text/javascript"
            />
          )}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
