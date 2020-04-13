import React from 'react';
//Components
import Directory from '../../components/directory/directory.component';
//Style
import './homepage.style.scss';

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <Directory />

  </div>
);

export default HomePage;