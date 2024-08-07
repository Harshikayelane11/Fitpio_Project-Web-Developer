import React from 'react';
import styles from './Topbar.module.css';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <input type="text" placeholder="Search..." className={styles.searchBar} />
      <div className={styles.userMenu}>
        <img src="images.png" alt="" className={styles.userImage} />
      </div>
    </div>
  );
};



export default Topbar;
