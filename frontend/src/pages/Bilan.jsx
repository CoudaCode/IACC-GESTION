import React, { useEffect,useState } from "react";

import "./../styles/Bilan.css";
import {
  RedoOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  DashboardOutlined,
  ArrowLeftOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Card, theme, Menu } from "antd";
import { Link } from "react-router-dom";
const Bilan = () => {
  document.title = "Bilan";
  const { Header, Sider, Content } = Layout;

  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#1A2639",
    fontFamily: "Montserrat",
    fontSize: "4vw",
    fontWeight: "bolder",
  };
  const contentStyle = {
    minHeight: 120,
    color: "#fff",
    backgroundColor: "#fff",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };
  const [collapsed, setCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Écoutez les changements de taille de l'écran
    window.addEventListener("resize", handleResize);

    // Nettoyez l'écouteur lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const shouldCollapseSidebar = windowWidth < 768;

  return (
    <>
      <div className="Bilan">
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={shouldCollapseSidebar}
            style={siderStyle}>
            <div className="photo" style={{ marginTop: "2rem" }}>
              <img
                src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                alt="profile"
                width={collapsed ? 50 : 100} 
                height={collapsed ? 50 : 100}
                className="img-fluid"
              />
            </div>
            <Menu mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/dashbord">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserAddOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/nouvelle-affaire">Nouvelle Affaire</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<RedoOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/renouvellement">Renouvellement</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UnorderedListOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/bilan">Bilan</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<UploadOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/suivi">Suivi</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<ArrowLeftOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/login">Deconnexion</Link>
              </Menu.Item>
            </Menu>
        
          </Sider>
          <Layout>
            <Header style={headerStyle}>FinanSimpli</Header>
            <Content style={contentStyle}>
              
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default Bilan;
