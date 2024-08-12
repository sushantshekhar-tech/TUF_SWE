import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [banner, setBanner] = useState({
    description: '',
    timer: 0,
    link: '',
    visible: false
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/banner')
      .then(response => setBanner(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleUpdate = () => {
    axios.post('http://localhost:5000/api/banner', banner)
      .then(() => alert('Banner updated'))
      .catch(error => console.error(error));
  };

  return (
    <div className="dashboard">
      <h2>Banner Dashboard</h2>
      <label>
        Description:
        <input
          type="text"
          value={banner.description}
          onChange={e => setBanner({ ...banner, description: e.target.value })}
        />
      </label>
      <label>
        Timer (seconds):
        <input
          type="number"
          value={banner.timer}
          onChange={e => setBanner({ ...banner, timer: parseInt(e.target.value, 10) })}
        />
      </label>
      <label>
        Link:
        <input
          type="text"
          value={banner.link}
          onChange={e => setBanner({ ...banner, link: e.target.value })}
        />
      </label>
      <label>
        Visible:
        <input
          type="checkbox"
          checked={banner.visible}
          onChange={e => setBanner({ ...banner, visible: e.target.checked })}
        />
      </label>
      <button onClick={handleUpdate}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
