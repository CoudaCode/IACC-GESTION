import React from "react";
import { useState, useEffect } from "react";
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

import Form1 from "./../components/Form1";
import Form2 from "./../components/Form2";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery, useMutation } from "react-query";
import ConfirmationModal from "./../components/ConfirmationModal";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { url } from "../utils/url.js";
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
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
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

  const createEntry = async (donnes) => {
    try {
      const cookie = Cookies.get("token");
      const response = await axios.post(`${url}api/client`, donnes, {
        headers: { Authorization: `Bearer ${cookie}` },
      });
      return response.data;
      
    } catch (error) {
      console.error("Error creating new entry:", error);
      throw error;
    }
  };
  const handleSubmit = () => {
    // Check if all required fields are filled
    if (
      formData.nom &&
      formData.prenom &&
      formData.addresse &&
      formData.email &&
      formData.telephone &&
      formData.periode &&
      formData.immatriculation &&
      formData.marque &&
      formData.usage &&
      formData.puissance &&
      formData.energie &&
      formData.dateCirculation &&
      formData.dateEffet &&
      formData.dateEcheance &&
      formData.commission &&
      formData.MtnCompagnie
    ) {
      // Send a POST request to create a new entry

      createEntry(formData)
        .then(() => {
          // Réinitialisez les champs du formulaire après la soumission réussie
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
          });

          // Affichez un message de confirmation ou une notification
          handleSuccess("Nouvelle entrée créée avec succès !");
        })
        .catch((error) => {
          // Gérez les erreurs, par exemple, affichez une notification d'erreur
          handleError(error.message);
        });
    } else {
      alert("Please fill in all required fields.");
    }

    // Reset the form fields

    // Close the confirmation modal
    setIsConfirmationModalOpen(false);
  };
  return (
    <>
      <div className="Nouvelle">
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={shouldCollapseSidebar}
            style={siderStyle}
          >
            <div className="photo" style={{ marginTop: "2rem" }}>
              <img
                src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                alt="profile"
                width={collapsed ? 50 : 100}
                height={collapsed ? 50 : 100}
                className="img-fluid"
              />
            </div>
            <Menu mode="inline" defaultSelectedKeys={["2"]}>
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
              <ToastContainer />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default Nouvelle;
