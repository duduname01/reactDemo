import React, { useState, useEffect } from 'react';
import { setLogin } from '@util/tools';
import style from './index.less';

export default () => {
  const [title, settitle] = useState('日志记录');
  const [count, setcount] = useState(0);

  useEffect(() => {
    setLogin();
  }, []);

  const handleTitle = () => {
    if (Object.is(count, 0)) {
      settitle('建立连接');
      setcount(1);
    } else {
      settitle('日志记录');
      setcount(0);
    }
  };
  return (
    <div>
      <h1 className={style.cur} onClick={handleTitle}>
        {title}
      </h1>
    </div>
  );
};
