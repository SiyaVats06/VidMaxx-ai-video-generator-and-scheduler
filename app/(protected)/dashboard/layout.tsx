import DashBoardMain from "@/components/dashboard/DashBoardMain";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-500/30 overflow-hidden">
      <DashboardSidebar />
      <DashBoardMain>{children}</DashBoardMain>
    </div>
  );
}
