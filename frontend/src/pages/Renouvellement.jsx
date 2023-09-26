import React from "react";
import { useRef,useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Form, Button } from "react-bootstrap";

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
  const nodeRef = useRef(null);
  const [formDataPart1, setFormDataPart1] = useState({
    nom: "",
    prenom: "",
    email: "",
  });

  const [formDataPart2, setFormDataPart2] = useState({
    adresse: "",
    telephone: "",
    periode: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (currentStep === 1) {
      setFormDataPart1({ ...formDataPart1, [name]: value });
    } else {
      setFormDataPart2({ ...formDataPart2, [name]: value });
    }
  };

  const handleSubmitPart1 = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleSubmitPart2 = (e) => {
    e.preventDefault();
    // Envoyez les données du formulaire à votre backend ou effectuez d'autres actions nécessaires
    console.log("Données du formulaire soumises :", {
      ...formDataPart1,
      ...formDataPart2,
    });
    // Réinitialisez les formulaires après la soumission
    setFormDataPart1({
      nom: "",
      prenom: "",
      email: "",
    });
    setFormDataPart2({
      adresse: "",
      telephone: "",
      periode: "",
    });
    setCurrentStep(1);
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
              <h2>Mon Formulaire</h2>
              <div className="form-container">
                <CSSTransition
                  in={currentStep === 1}
                  timeout={300}
                  classNames="form"
                  nodeRef={nodeRef}
                  unmountOnExit>
                  <Form onSubmit={handleSubmitPart1}>
                    <Form.Group controlId="nom">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        type="text"
                        name="nom"
                        value={formDataPart1.nom}
                        onChange={handleFormChange}
                        required
                      />
                    </Form.Group>
                    {/* Ajoutez d'autres champs du formulaire ici */}
                    <Button variant="primary" type="submit">
                      Étape suivante
                    </Button>
                  </Form>
                </CSSTransition>

                <CSSTransition
                  in={currentStep === 2}
                  timeout={300}
                  classNames="form"
                  nodeRef={nodeRef}
                  unmountOnExit>
                  <Form onSubmit={handleSubmitPart2}>
                    <Form.Group controlId="adresse">
                      <Form.Label>Adresse</Form.Label>
                      <Form.Control
                        type="text"
                        name="adresse"
                        value={formDataPart2.adresse}
                        onChange={handleFormChange}
                        required
                      />
                    </Form.Group>
                    {/* Ajoutez d'autres champs du formulaire ici */}
                    <Button variant="primary" type="submit">
                      Soumettre
                    </Button>
                  </Form>
                </CSSTransition>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default Renouvellement;
