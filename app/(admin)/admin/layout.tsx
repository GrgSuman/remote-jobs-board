import NavBar from "@/components/admin/NavBar";
import { Sidebar } from "@/components/admin/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <NavBar />
          <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
