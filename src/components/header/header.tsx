import React from 'react';

import styles from './header.module.css';
import Cart from '../../cart.svg';

export default function Header() {
  return (
    <header>
      <div>cleo</div>
      <div>
        <a href="/">Facebook</a>
        <a href="/">Instagram</a>
        <a href="/">Twitter</a>
      </div>
      <div className={styles.menu_container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <img src={Cart} alt="cart"></img>
      </div>
    </header>
  );
}
