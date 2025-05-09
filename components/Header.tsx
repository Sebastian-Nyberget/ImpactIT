import Link from "next/link";
import { Laptop } from "lucide-react";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Laptop className="h-6 w-6" />
          <span className="text-xl font-bold">ImpactIT</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Hjem
          </Link>
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Om oss
          </Link>
          <Link
            href="/utstyr"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Utstyr
          </Link>
          <Link
            href="/ansatte"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Ansatte
          </Link>
        </nav>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
