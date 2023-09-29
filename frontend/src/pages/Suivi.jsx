import React, { useState, useEffect } from "react";
import "./../styles/Suivi.css"; // Assurez-vous d'importer le CSS de Bootstrap
import { url } from "../utils/url";
import { useQuery } from "react-query";
import {
  RedoOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  DashboardOutlined,
  ArrowLeftOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Table, Pagination } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import axios from "axios";
const Suivi = () => {
  document.title = "Suivi";
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
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState(1);

  const adminAuth = async () => {
    const cookie = Cookies.get("token");
    const response = await axios.get(`${url}api/client`, {
      headers: { Authorization: `Bearer ${cookie}` },
    });
    return response;
  };

  const { data, isLoading, isError, isSuccess } = useQuery("admin", adminAuth);
  console.log("data" ,data);

  const clientsData = [
    {
      id: 1,
      nom: "Nom 1",
      prenom: "Prénom 1",
      immatriculation: "12345",
      dateEcheance: "2023-09-30",
    },
    {
      id: 2,
      nom: "Nom 2",
      prenom: "Prénom 2",
      immatriculation: "67890",
      dateEcheance: "2023-10-15",
    },
  ];
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

  const filterDataByMonth = (data, selectedMonth) => {
    return data.filter((client) => {
      const clientDate = new Date(client.dateEcheance);
      const clientMonth = clientDate.getMonth() + 1; // Les mois commencent à partir de 0
      return clientMonth === selectedMonth;
    });
  };

  const filteredData = filterDataByMonth(clientsData, selectedMonth);

  return (
    <>
      <div className="Suivi">
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
            <Menu mode="inline" defaultSelectedKeys={["5"]}>
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/dashbord">
                  Dashboard
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserAddOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/nouvelle-affaire">
                  Nouvelle Affaire
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<RedoOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/renouvellement">
                  Renouvellement
                </Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UnorderedListOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/bilan">
                  Bilan
                </Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<UploadOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/suivi">
                  Suivi
                </Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<ArrowLeftOutlined />}>
                <Link style={{ textDecoration: "none" }} to="/login">
                  Deconnexion
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                textAlign: "center",
                color: "#fff",
                height: 64,
                paddingInline: 50,
                lineHeight: "64px",
                backgroundColor: "#1A2639",
                fontFamily: "Montserrat",
                fontSize: "1.5rem",
                fontWeight: "bolder",
              }}>
              FinanSimpli
            </Header>
            <Content
              style={{
                minHeight: 120,
                color: "#fff",
                backgroundColor: "#fff",
              }}>
              <Pagination>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                  <Pagination.Item
                    key={month}
                    active={month === selectedMonth}
                    onClick={() => setSelectedMonth(month)}>
                    {month}
                  </Pagination.Item>
                ))}
              </Pagination>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nom</th>
                      <th>Prénom</th>
                      <th>Immatriculation</th>
                      <th>Date d'échéance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((client) => (
                      <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.nom}</td>
                        <td>{client.prenom}</td>
                        <td>{client.immatriculation}</td>
                        <td>{client.dateEcheance}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default Suivi;
