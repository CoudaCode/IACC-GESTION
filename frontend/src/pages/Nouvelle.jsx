import React from "react";
import { useState } from "react";
import "./../styles/Nouvelle.css";
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
import { Form, Button, Row, Col } from "react-bootstrap";
const Nouvelle = () => {
  document.title = "Nouvelle-affaire";
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
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    addresse: "",
    telephone: "",
    email: "",
    periode: "",
    // Ajoutez d'autres champs du formulaire ici
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez la validation des données ici (par exemple, vérifiez si les champs sont remplis correctement)
    if (
      formData.nom &&
      formData.prenom &&
      formData.addresse &&
      formData.telephone &&
      formData.email &&
      formData.periode
    ) {
      // Envoyez les données du formulaire à votre backend ou effectuez d'autres actions nécessaires
      console.log("Données du formulaire soumises :", formData);
      // Réinitialisez le formulaire après la soumission
      setFormData({
        nom: "",
        prenom: "",
        addresse: "",
        telephone: "",
        email: "",
        periode: "",
        // Réinitialisez les autres champs du formulaire ici
      });
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  };
  return (
    <>
      <div className="Nouvelle">
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
            <Menu mode="inline" defaultSelectedKeys={["2"]}>
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
              <h2>Créer une nouvelle assurance</h2>
              <Form className="form-container" onSubmit={handleSubmit}>
                <Form.Group controlId="nom">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="prenom">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="addresse">
                  <Form.Label>Addresse</Form.Label>
                  <Form.Control
                    type="text"
                    name="addresse"
                    value={formData.addresse}
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="telephone">
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control
                    type="number"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="periode">
                  <Form.Label>periode</Form.Label>
                  <Form.Select
                    className="custom-select"
                    name="periode"
                    onChange={handleFormChange}
                    value={formData.periode}
                  >
                    <option>periode</option>
                    <option value="Trimestrielle">Trimestrielle</option>
                    <option value="Mensuelle">Mensuelle</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Enregistrer
                </Button>
              </Form>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default Nouvelle;
