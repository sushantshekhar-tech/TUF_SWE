import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ setBannerData }) => {
  const [banner, setBanner] = useState({
    description: '',
    timer: 0,
    link: '',
    visible: false
  });

  useEffect(() => {
    axios.get('http://localhost:8081/api/banner')
      .then(response => setBanner(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleUpdate = () => {
    axios.post('http://localhost:8081/api/banner', banner)
      .then(() => {
        alert('Banner updated');
        // Refresh banner data in the App component
        axios.get('http://localhost:8081/api/banner')
          .then(response => setBannerData(response.data))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container mt-5" id="dashboard">
      <h2 className="mb-4">Banner Dashboard</h2>
      <form>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={banner.description}
            onChange={e => setBanner({ ...banner, description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Timer (seconds)</label>
          <input
            type="number"
            className="form-control"
            value={banner.timer}
            onChange={e => setBanner({ ...banner, timer: parseInt(e.target.value, 10) })}
          />
        </div>
        <div className="form-group">
          <label>Link</label>
          <input
            type="text"
            className="form-control"
            value={banner.link}
            onChange={e => setBanner({ ...banner, link: e.target.value })}
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={banner.visible}
            onChange={e => setBanner({ ...banner, visible: e.target.checked })}
          />
          <label className="form-check-label">Visible</label>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update Banner</button>
      </form>
    </div>
  );
};

export default Dashboard;
