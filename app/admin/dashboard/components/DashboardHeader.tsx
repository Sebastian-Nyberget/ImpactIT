import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="bg-white border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-2 md:hidden">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        <span className="font-bold">ImpactIT Admin</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Admin User</span>
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
