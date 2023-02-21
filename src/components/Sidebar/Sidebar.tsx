import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import threed from "../../assets/sidebarIcons/3d-square.png";
import discount from "../../assets/sidebarIcons/discount-shape.png";
import key from "../../assets/sidebarIcons/key-square.png";
import message from "../../assets/sidebarIcons/message-question.png";
import user from "../../assets/sidebarIcons/user-square.png";
import wallet from "../../assets/sidebarIcons/wallet-money.png";
import avatar from "../../assets/avatar.png";
import menu from "../../assets/menu.png";
import { useMediaQuery } from "react-responsive";

interface ISidebarProps {
  icon: string;
  title: string;
  href: string;
}

const sidebarItems: ISidebarProps[] = [
  { title: "Dashboard", href: "/dashboard", icon: key },
  { title: "Product", href: "/product", icon: threed },
  { title: "Customers", href: "/customers", icon: user },
  { title: "Income", href: "/income", icon: wallet },
  { title: "Promote", href: "/promote", icon: discount },
  { title: "Help", href: "/help", icon: message },
];

const Sidebar = () => {
  const [activeTab] = useState(2);

  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img src={logo} alt="logo" className="sidebar__logo" />
        <span>v.01</span>
        <button className="menu__button" hidden onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu icon" />
        </button>
      </div>
      {(!isMobile || open) && (
        <div className="sidebar__content">
          <ul>
            {sidebarItems.map(({ title, href, icon }, index) => (
              <li key={title} className={activeTab === index ? "active" : ""}>
                <a href={href}>
                  <img src={icon} alt={title} />
                  <span>{title}</span>
                </a>
                {index !== 0 ? ">" : ""}
              </li>
            ))}
          </ul>
          <div className="sidebar__footer">
            <img src={avatar} alt="avatar" />
            <div className="sidebar__footer-about">
              <span className="name">Evano</span>
              <span className="role">Project Manager</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
