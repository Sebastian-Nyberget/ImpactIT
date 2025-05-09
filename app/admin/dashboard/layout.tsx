import type React from "react";

import { Sidebar } from "./components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { DashboardHeader } from "./components/DashboardHeader";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Sidebar - Desktop */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <DashboardHeader />

          {/* Page Content */}
          <main className="flex-1 p-4 md:p-6 bg-gray-50 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </ClerkProvider>
  );
}
