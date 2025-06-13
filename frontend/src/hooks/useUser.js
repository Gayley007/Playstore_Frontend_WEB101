import { useState, useEffect } from 'react';
import { fetchUser } from '../api/userAPI';
export function useUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser().then(res => setUser(res.data));
  }, []);
  return user;
}