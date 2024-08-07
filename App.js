import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
