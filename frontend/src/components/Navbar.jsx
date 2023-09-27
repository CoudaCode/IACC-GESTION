import React from "react";
import { useState } from "react";
import {
  RedoOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  DashboardOutlined,
  ArrowLeftOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function Navbar() {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };
  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]} // Utiliser la clé sélectionnée dans l'état local
      onClick={handleMenuClick} // Appeler la fonction de gestion du clic
    >
      <Menu.Item key="1" icon={<DashboardOutlined />}>
        <Link to="/dashbord">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserAddOutlined />}>
        <Link to="/nouvelle-affaire">Nouvelle Affaire</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<RedoOutlined />}>
        <Link to="/renouvellement">Renouvellement</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<UnorderedListOutlined />}>
        <Link to="/bilan">Bilan</Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<UploadOutlined />}>
        <Link to="/suivi">Suivi</Link>
      </Menu.Item>
      <Menu.Item key="6" icon={<ArrowLeftOutlined />}>
        <Link to="/login">Deconnexion</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
