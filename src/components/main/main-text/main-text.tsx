import React from 'react';

import styles from './main-text.module.scss';

export default function MainText() {
  return (
    <div className={styles.container}>
      <h1>Cosy design</h1>
      <p>
        Create comfort in your living room with our new stylish collection of furniture and
        accessories made of high quality materials.
      </p>
      <button>See collection</button>
    </div>
  );
}
