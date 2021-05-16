import { useState, useEffect } from "react";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loadUserInfo = async () => {
      const response = await fetch("/user-info");
      const userInfoResponse = await response.json();
      setUserInfo(userInfoResponse);
    };

    loadUserInfo();
  }, []);

  return [userInfo, setUserInfo];
};
