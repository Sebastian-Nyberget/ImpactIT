"use client";

import { LayoutDashboard, Package, ClipboardList, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white">
      <div className="p-4 border-b border-gray-800">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <Package className="h-6 w-6" />
          <span className="text-xl font-bold">ImpactIT Admin</span>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <Link
          href="/admin/dashboard"
          className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 ${
            pathname === "/admin/dashboard" && `bg-gray-800`
          }`}
        >
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/admin/dashboard/historie"
          className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 ${
            pathname === "/admin/dashboard/historie" && `bg-gray-800`
          }`}
        >
          <ClipboardList className="h-5 w-5" />
          <span>Utlån historie</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 text-gray-300"
        >
          <LogOut className="h-5 w-5" />
          <span>Tilbake</span>
        </Link>
      </div>
    </aside>
  );
};
