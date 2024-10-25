import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.tsx";
import SideTest from "../SideTest/SideTest.tsx";

interface MainLayoutProps {
  LogOut?: () => void; // Ensure that LogOut is a function
}

const MainLayout: React.FC<MainLayoutProps> = ({LogOut}) => {
  let [collapseSideBar, setCollapseSideBar] = useState(false);
  const [toggled, setToggled] = useState(false);
  let [broken, setBroken] = useState(window.matchMedia("(max-width: 800px)").matches);
  const [, forceRender] = useState(0); 


  const handleSidebarToggle = () => {
    setCollapseSideBar(!collapseSideBar);
    forceRender(prev => prev + 1); 
  };


  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    const handleResize = () => setBroken(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(()=>{
    console.log('rerender called')
  },[collapseSideBar,toggled])


  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideTest
        collapseSideBar={collapseSideBar}
        setCollapseSideBar={handleSidebarToggle}
        //  setCollapseSideBar={setCollapseSideBar}
        broken={broken}
        toggled={toggled}
        setToggled={setToggled}
        setBroken={setBroken}
      />
      <main
        key={collapseSideBar ? "collapsed" : "expanded"} // Force re-render when sidebar collapses/expands
        
        style={{
          flexGrow: 1, // This makes the main content take up the remaining space
          transition: "all 0.3s ease",
          padding: "5px",
        }}
        className={collapseSideBar?'w-full':'w-10 '}
      >
        <div>
          <Navbar
            collapseSideBar={collapseSideBar}
            setCollapseSideBar={setCollapseSideBar}
            broken={broken}
            toggled={toggled}
            setToggled={setToggled}

          />
        </div>
        <div className="py-4">
          <Outlet />
          <div className="footer w-full">
            <Footer />
          </div>
        </div>
      </main>
    </div>

  );
};

export default MainLayout;
