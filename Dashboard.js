import React from 'react';
import ActivityChart from './ActivityChart';
import OrderList from './OrderList';
import FeedbackList from './FeedbackList';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.overview}>
  
        <div className={styles.overviewItem}>
        <div className={styles.userMenu}>
        <img src="shopping.jpg" alt="" className={styles.userImage} />
      </div>Total Orders: 75</div>
        <div className={styles.overviewItem}>
        <div className={styles.userMenu}>
        <img src="shopping.jpg" alt="" className={styles.userImage} />
      </div>Total Delivered: 70</div>
        <div className={styles.overviewItem}><div className={styles.userMenu}>
        <img src="shopping.jpg" alt="" className={styles.userImage} />
      </div>Total Cancelled: 5</div>
        <div className={styles.overviewItem}><div className={styles.userMenu}>
        <img src="shopping.jpg" alt="" className={styles.userImage} />
      </div>Net Profit: $6759.25</div>
      </div>
      <ActivityChart />
      <OrderList />
      <FeedbackList />
    </div>
  );
};

export default Dashboard;
