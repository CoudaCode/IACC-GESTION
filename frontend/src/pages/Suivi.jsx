import React, { useState } from "react";
import "./../styles/Suivi.css"; // Assurez-vous d'importer le CSS de Bootstrap
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
import "bootstrap/dist/css/bootstrap.min.css";

const Suivi = () => {
  document.title = "Suivi";
  const { Header, Sider, Content } = Layout;

  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState(1);

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
            style={{
              textAlign: "center",
              color: "#fff",
              lineHeight: "120px",
              backgroundColor: "#3ba0e9",
            }}
          >
            <div className="photo" style={{ marginTop: "2rem" }}>
              <img
                src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                alt="profile"
                width="100"
                height="100"
              />
            </div>
            <Menu mode="inline" defaultSelectedKeys={["5"]}>
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
              }}
            >
              IACC GESTION
            </Header>
            <Content
              style={{
                minHeight: 120,
                color: "#fff",
                backgroundColor: "#fff",
              }}
            >
              <Pagination>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                  <Pagination.Item
                    key={month}
                    active={month === selectedMonth}
                    onClick={() => setSelectedMonth(month)}
                  >
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
