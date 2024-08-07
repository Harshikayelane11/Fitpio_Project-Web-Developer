import React from 'react';
import { FaHome, FaChartBar, FaBox, FaStar } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuItem}><FaHome /> 
      <div><h2>Dashboard</h2></div></div>
      <div className={styles.menuItem}><FaChartBar /><div>
        <h2>Activity</h2></div> </div>
      <div className={styles.menuItem}><FaBox /><div><h2>Orders</h2></div> </div>
      <div className={styles.menuItem}><FaStar /><div><h2>Feedback</h2></div> </div>
    </div>
  );
};

export default Sidebar;
