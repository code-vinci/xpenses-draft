import React, { Component } from 'react';

import AppBackground from '../components/app/AppBackground';
import AppContent from '../components/app/AppContent';

class Home extends Component {
  render() {
    return (
      <div>
        <AppBackground />
        <AppContent />
      </div>
    );
  }
};

export default Home;
