import React, { useState, useEffect } from 'react';
import { setLogin } from '@util/tools';
import { friendList, useFriendStatus } from './constant';
import style from './index.less';

function Logging() {
  const [title, settitle] = useState('日志记录');
  const [count, setcount] = useState(0);
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID); // 自定义Hook

  useEffect(() => {
    setLogin();
  }, []);

  const handleTitle = () => {
    if (Object.is(count % 2, 0)) {
      settitle('建立连接');
    } else {
      settitle('日志记录');
    }
    setcount(re => re + 1);
  };
  return (
    <div>
      <h1 className={style.cur} onClick={handleTitle}>
        {title}
      </h1>
      <div>{isRecipientOnline}</div>
      <div>{count}</div>
      <select
        value={recipientID}
        onChange={e => setRecipientID(e.target.value * 1)}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Logging;
