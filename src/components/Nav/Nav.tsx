import { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Nav = () => {
  const [pathname, setPathname] = useState(window.location.pathname);
  const nav = [
    { href: "/", name: "Home" },
    { href: "/profile", name: "Profile" },
  ];

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
      {nav.map(({ href, name }) => (
        <Menu.Item key={href}>
          <Link to={href} onClick={() => setPathname(href)}>
            {name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Nav;
