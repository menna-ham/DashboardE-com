import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/elegant-logo.png";
import { BiCategory } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { SiBrandfolder } from "react-icons/si";
import { LuLayoutDashboard, LuBox } from "react-icons/lu";

interface SideTestProps {
  collapseSideBar: boolean;
  setCollapseSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  broken: boolean;
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
  setBroken: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideTest: React.FC<SideTestProps> = ({
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
      }}
    >
      <Sidebar
        backgroundColor='#E7EBF3'
        collapsed={collapseSideBar}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        customBreakPoint="800px"
        onBreakPoint={setBroken}
        rootStyles={{
          border:'none',
          paddingLeft:'10px',
          backgroundColor:'#E7EBF3'
        }}
      >
        <Menu
          menuItemStyles={{
            button: {
              transition:'.2s',
              position: 'relative',
              [`&.active`]: {
                backgroundColor:'#f8f7fa',
                color: "#826DEA",
                borderRadius: "1.5rem",
                borderEndEndRadius:'0rem',
                borderTopRightRadius:'0rem',
                borderLeft:'solid 2px',
                borderLeftColor:'#654ce6',
              },
              ['&.active::before']: {
                content: '""',
                position:'absolute',
                top:'-30px',
                right:'0',
                width:'30px',
                height:'30px',
                borderRadius:'50%',
                boxShadow:'15px 15px 0 #f8f7fa',
              },
              ['&.active::after']: {
                content: '""',
                position:'absolute',
                bottom:'-30px',
                right:'0',
                width:'30px',
                height:'30px',
                borderRadius:'50%',
                boxShadow:'15px -15px 0 #f8f7fa',
              },
              '&:hover': {
                borderRadius: "1.5rem",
                borderEndEndRadius:'0rem',
                borderTopRightRadius:'0rem',
              },
            },
          }}
        >
          <MenuItem className="my-2">
            <img src={logo} alt="logo" />
          </MenuItem>
          <MenuItem icon={<LuLayoutDashboard />} className='.curved-item' component={<NavLink to="/" />}> Dashboard</MenuItem>
          <MenuItem icon={<SiBrandfolder />} component={<NavLink to="/brands" />}> Brands</MenuItem>
          <MenuItem icon={<LuBox />} component={<NavLink to="/products" />}> Products</MenuItem>
          <MenuItem icon={<HiUsers />} component={<NavLink to="/users" />}> Users</MenuItem>
          <MenuItem icon={<BiCategory />} component={<NavLink to="/categories" />}>
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

