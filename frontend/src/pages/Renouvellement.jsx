import React from "react";
import "./../styles/Renouvellement.css";
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
const Renouvellement = () => {
  const { Header, Sider, Content } = Layout;

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

  return (
    <>
      <div className="Renouvellement">
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
            <Menu mode="inline" defaultSelectedKeys={["3"]}>
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="/">Dashboard</Link>
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
          </Sider>
          <Layout>
            <Header style={headerStyle}>IACC GESTION</Header>
            <Content style={contentStyle}>
              <div className="cardre">
                <Card
                  title="AUTOMOBILE"
                  style={{
                    width: 350,
                    textAlign: "center",
                    background: "#4D8076",
                    color: "white",
                  }}>
                  <h2>100clients</h2>
                </Card>
                <Card
                  title="SANTE"
                  style={{
                    width: 350,
                    textAlign: "center",
                    background: "#4D8076",
                    color: "white",
                  }}>
                  <h2>100Clients</h2>
                </Card>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default Renouvellement;
