import React from "react";
import { useRef, useState, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
// import { Form, Button } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../styles/Renouvellement.css";
import { Link } from "react-router-dom";
import Form1 from "./../components/Form1";
import Form2 from "./../components/Form2";
import ConfirmationModal from "./../components/ConfirmationModal";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Form } from "react-bootstrap";
import {
  RedoOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  DashboardOutlined,
  ArrowLeftOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const Renouvellement = () => {
  document.title = "Renouvellement";
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

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    addresse: "",
    email: "",
    telephone: "",
    periode: "",
    immatriculation: "",
    marque: "",
    usage: "",
    puissance: "",
    energie: "",
    dateCirculation: "",
    dateEffet: "",
    dateEcheance: "",
    commission: "",
    MtnCompagnie: "",
    // Ajoutez d'autres champs de formulaire
  });

  const [activeForm, setActiveForm] = useState(1);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setActiveForm(2);
  };

  const handlePrevious = () => {
    setActiveForm(1);
  };

  const handleSubmit = () => {
    // Affichez les données dans la console
    if (
      !formData.nom &&
      !formData.prenom &&
      !formData.addresse &&
      !formData.email &&
      !formData.telephone &&
      !formData.periode &&
      !formData.immatriculation &&
      !formData.marque &&
      !formData.usage &&
      !formData.puissance &&
      !formData.energie &&
      !formData.dateCirculation &&
      !formData.dateEffet &&
      !formData.dateEcheance &&
      !formData.commission &&
      !formData.MtnCompagnie
    ) {
      alert("remplsisez tous les champs");
    }
    console.log(formData);

    // Réinitialisez le formulaire après soumission
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      periode: "",
      immatriculation: "",
      marque: "",
      usage: "",
      puissance: "",
      energie: "",
      dateCirculation: "",
      dateEffet: "",
      dateEcheance: "",
      commission: "",
      MtnCompagnie: "",
      // Réinitialisez les autres champs
    });

    // Fermez la modal de confirmation
    setIsConfirmationModalOpen(false);
  };

  return (
    <>
      <div className="Renouvellement">
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
            <Menu mode="inline" defaultSelectedKeys={["3"]}>
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
              <h2>Mon Formulaire</h2>
              <div className="formContent">
                {activeForm === 1 ? (
                  <Form1
                    formData={formData}
                    onChange={handleChange}
                    onNext={handleNext}
                  />
                ) : (
                  <Form2
                    formData={formData}
                    onChange={handleChange}
                    onPrevious={handlePrevious}
                    onSubmit={() => setIsConfirmationModalOpen(true)}
                  />
                )}

                <ConfirmationModal
                  isVisible={isConfirmationModalOpen}
                  onClose={() => setIsConfirmationModalOpen(false)}
                  onConfirm={handleSubmit}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default Renouvellement;
