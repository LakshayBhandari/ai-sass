import Navbar from "@/components/Navbar";
import { ModalProvider } from "@/components/modal-provider";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const apiLimitCount = await getApiLimitCount();
  return (
    <>
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
      <Sidebar apiLimitCount={apiLimitCount}/>
      </div>
      <main className="md:pl-72">
      <ModalProvider/>
        <Navbar/>
        {children}
      </main>
    </div>
  
    </>
  );
}
