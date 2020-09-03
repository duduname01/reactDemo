import { useState, useEffect } from 'react';

export const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
  { id: 4 },
];

export function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    setIsOnline(
      friendList.find(v => Object.is(v.id, friendID))?.name || '未知',
    );
  }, [friendID]);

  return isOnline;
}
