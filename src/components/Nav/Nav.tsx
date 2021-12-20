import { Menu } from "antd";
import { Link } from "react-router-dom";

const Nav = () => {
  const nav = [
    { href: "/", name: "Home" },
    { href: "/profile", name: "Profile" },
  ];
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      selectedKeys={["1"]}
    >
      {nav.map((_, index) => {
        const key = index + 1;
        return (
          <Link to={_.href}>
            <Menu.Item key={key}>{_.name}</Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
};

export default Nav;
