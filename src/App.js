import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import './App.css';

function App() {
  const [bannerData, setBannerData] = useState({
    description: '',
    timer: 0,
    link: '',
    visible: false
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/banner')
      .then(response => setBannerData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <Banner
        visible={bannerData.visible}
        description={bannerData.description}
        timer={bannerData.timer}
        link={bannerData.link}
      />
      <Dashboard />
    </div>
  );
}

export default App;
