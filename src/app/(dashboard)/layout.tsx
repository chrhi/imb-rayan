import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100 min-h-screen h-fit">
      <TooltipProvider>
        <Sidebar />
      </TooltipProvider>

      <div className="w-[calc(100%-80px)] ml-[56px] h-fit flex flex-col">
        {children}
      </div>
    </div>
  );
}
