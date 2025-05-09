"use client";

import Link from "next/link";
import { Laptop } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

interface HeaderProps {
  isAdmin?: boolean;
}

export function Header({ isAdmin }: HeaderProps) {
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
          <div className="flex items-center justify-between gap-x-4">
            <SignInButton>
              <Button variant="outline">Logg inn</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="default">Registrer deg</Button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center justify-between gap-x-4">
            {isAdmin && (
              <Button variant="outline">
                <Link
                  href="/admin/dashboard"
                  className="text-sm font-medium underline-offset-4"
                >
                  Dashboard
                </Link>
              </Button>
            )}
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}
