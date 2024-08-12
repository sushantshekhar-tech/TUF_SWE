import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [bannerData, setBannerData] = useState({
    description: "",
    timer: 0,
    link: "",
    visible: false,
  });
  const [theme, setTheme] = useState("light");
  const [isBannerVisible, setIsBannerVisible] = useState(bannerData.visible);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/banner")
      .then((response) => setBannerData(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setIsBannerVisible(bannerData.visible);
  }, [bannerData]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleBannerVisibility = () => {
    setIsBannerVisible((prevState) => !prevState);
  };

  return (
    <div
      className={`App bg-${theme} text-${theme === "light" ? "dark" : "light"}`}
    >
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        toggleBannerVisibility={toggleBannerVisibility}
        isBannerVisible={isBannerVisible}
      />
      <Banner
        visible={isBannerVisible}
        description={bannerData.description}
        timer={bannerData.timer}
        link={bannerData.link}
      />
      <Dashboard setBannerData={setBannerData} />
      <Footer />
    </div>
  );
}

export default App;
