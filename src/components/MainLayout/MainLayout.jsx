import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import SideTest from "../SideTest/SideTest";



const MainLayout = () => {
  let [collapseSideBar, setCollapseSideBar] = useState(false);
  const [toggled, setToggled] = useState(false);
  let [broken, setBroken] = useState(window.matchMedia("(max-width: 800px)").matches);



  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideTest
         collapseSideBar={collapseSideBar}
         setCollapseSideBar={setCollapseSideBar}
         broken={broken}
         toggled={toggled}
         setToggled={setToggled}
         setBroken={setBroken}
      />
      <main style={{ flex: 1, padding: 10 }}>
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
