import { Outlet, useLocation } from "react-router";
import PropTypes from "prop-types";
import SideBar from "../components/sideBar/SideBar";
import { createContext, useEffect, useState } from "react";
import NavBar from "../components/Navbar/NavBar";

export const SidebarContext = createContext({});

const Layout = ({ children }) => {
  const path = useLocation();
  const [hideSidebar, setHideSideBar] = useState(false);
  const [hideNavbar, setHideNavBar] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const shouldHideSidebar = path.pathname === "/panels/main";
    const shouldHideNavbar = path.pathname === "/panels/main";
    setHideSideBar(shouldHideSidebar);
    setHideNavBar(shouldHideNavbar);
  }, [path.pathname]);

  const openSideBar = () => {
    setIsSidebarOpen(true);
    console.log(isSidebarOpen);
  };

  return (
    <div className="flex">
      {!hideSidebar && (
        <aside
          className={`  ${
            !isSidebarOpen ? "block " : "hidden md:block lg:block"
          }`}
        >
          <SideBar />
        </aside>
      )}
      <main className="w-full ">
        {!hideNavbar && <NavBar openSideBar={openSideBar} />}
        <SidebarContext.Provider value={{ hideSidebar, setHideSideBar }}>
          {children}
          <Outlet />
        </SidebarContext.Provider>
      </main>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
