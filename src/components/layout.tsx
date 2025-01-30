import { Outlet } from "react-router-dom";
import NavBar from "@/components/navbar";

function Layout() {
  return (
    <>
      <header className={`h-[80px] w-[100vw] px-8`}>
        <NavBar />
      </header>
      <main className={`min-h-[calc(100vh-80px)] w-full px-8 py-4`}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
