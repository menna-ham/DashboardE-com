import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/elegant-logo.png";
import { BiCategory } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { SiBrandfolder } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

const SideTest = ({
  collapseSideBar,
  setCollapseSideBar,
  broken,
  toggled,
  setToggled,
  setBroken,
}) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        minHeight: "400px",
        padding: "10px",
      }}
    >
      <Sidebar
        collapsed={collapseSideBar}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        customBreakPoint="800px"
        onBreakPoint={setBroken}
        rootStyles={{
          background: "#FFFFFF !important",
          boxShadow:'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        }}
      >
        {/* <div className=" absolute right-0">
          <button className="p-3 " onClick={() => setToggled(false)}><IoMdClose /></button>
        </div> */}

        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                background:
                  "linear-gradient(270deg, rgba(115, 103, 240, 0.7) 0%, #7367f0 100%)",
                color: "white",
                borderRadius: ".375rem",
              },
            },
          }}
        >

          <MenuItem className="my-2">
            {" "}
            <img src={logo} alt="logo" />
          </MenuItem>
          <MenuItem  icon={<LuLayoutDashboard />} component={<NavLink to="/" />}> Dashboard</MenuItem>
          <MenuItem icon={<SiBrandfolder />} component={<NavLink to="/brands" />}> Brands</MenuItem>
          <MenuItem icon={<HiUsers />} component={<NavLink to="/users" />}> Users</MenuItem>
          <MenuItem icon={<BiCategory />} component={<NavLink to="/categories" />}>
            {" "}
            Categories
          </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideTest;
