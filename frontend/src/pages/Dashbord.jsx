import React from "react";
import { useState } from "react";
import "./../styles/Dashbord.css";
import {
  RedoOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  DashboardOutlined,
  ArrowLeftOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Space } from "antd";
import { Link } from "react-router-dom";
const { Header, Sider, Content, Footer } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(colorBgContainer);
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
    fontFamily: "Montserrat",
    fontSize: "1.5rem",
    fontWeight: "bolder",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };
  return (
    <>
      <div className="Dashbord">
        <Layout>
          <Sider style={siderStyle}>
            <div className="photo" style={{ marginTop: "1rem" }}>
              <img
                src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                alt="profile"
                width="100"
                height="100"
              />
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <DashboardOutlined />,
                  label: "Dashboard",
                },
                {
                  key: "2",
                  icon: <UserAddOutlined />,
                  label: "Nouvelle Affaire",
                },
                {
                  key: "3",
                  icon: <RedoOutlined />,
                  label: "Renouvellement",
                },
                {
                  key: "4",
                  icon: <UnorderedListOutlined />,
                  label: "Bilan",
                },
                {
                  key: "5",
                  icon: <UploadOutlined />,
                  label: "Suivi",
                },
                {
                  key: "6",
                  icon: <ArrowLeftOutlined />,
                  label: "Deconnexion",
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header style={headerStyle}>IACC GESTION</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        <Link to={"/inscription"}>Inscription</Link>
        </Layout>
      </div>
    </>
  );
};
export default Dashboard;
