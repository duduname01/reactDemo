import React, { useState, useEffect } from 'react';
import { FrownOutlined } from '@ant-design/icons';
import { Page } from '@components';
import styles from './404.less';

function Error() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  return (
    <Page inner loading={loading}>
      <div className={styles.error}>
        <FrownOutlined />
        <h1>404 Not Found</h1>
      </div>
    </Page>
  );
}
export default Error;
