import React from "react";
import { useState } from "react";
import "./../styles/Dashbord.css";
import Statistique from "../components/Statistique";
import NouvelleAffaire from "../components/NouvelleAffaire";
import {
  RedoOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  DashboardOutlined,
  ArrowLeftOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Card, theme, Space } from "antd";
const Dashboard = () => {
  const { Header, Sider, Content, Footer } = Layout;
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
    backgroundColor: "#1A2639",
    fontFamily: "Montserrat",
    fontSize: "1.5rem",
    fontWeight: "bolder",
  };
  const contentStyle = {
    // textAlign: "center",
    minHeight: 120,
    // lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#fff",
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
            <div className="photo" style={{ marginTop: "2rem" }}>
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
                  link: "/",
                },
                {
                  key: "2",
                  icon: <UserAddOutlined />,
                  label: "Nouvelle Affaire",
                  link: "/nouvelle-affaire",
                },
                {
                  key: "3",
                  icon: <RedoOutlined />,
                  label: "Renouvellement",
                  link: "/renouvellement",
                },
                {
                  key: "4",
                  icon: <UnorderedListOutlined />,
                  label: "Bilan",
                  link: "/bilan",
                },
                {
                  key: "5",
                  icon: <UploadOutlined />,
                  label: "Suivi",
                  link: "/suivi",
                },
                {
                  key: "6",
                  icon: <ArrowLeftOutlined />,
                  label: "Deconnexion",
                  link: "/login",
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header style={headerStyle}>IACC GESTION</Header>
            <Content style={contentStyle}>
              <NouvelleAffaire />
              {/* <div className="cardre">
                <Card title="AUTOMOBILE" style={{ width: 350, textAlign: "center", background: "#4D8076", color:"white"}}>
                 <h2>100clients</h2>
                </Card>
                <Card title="SANTE" style={{ width: 350, textAlign: "center", background: "#4D8076", color:"white"}}>
                 <h2>100Clients</h2>
                </Card>
              </div> */}
            </Content>
            {/* <Footer style={footerStyle}>Footer</Footer> */}
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default Dashboard;
