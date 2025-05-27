import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky navbar directly included here */}
      <Navbar />

      {/* Page content with unified max-width container and padding */}
      <main className="flex-grow w-full bg-gray-900 px-4 md:px-8">
          <Outlet />
      </main>

      {/* You can add footer here with same container for alignment */}
      <Footer />
    </div>
  );
};

export default MainLayout;
