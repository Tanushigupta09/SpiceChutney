import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);
  // CHECK IF ONLINE AND THEN RETURN ONLINE STATUS THIS ONLINE STATUS IS A BOOLEAN

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(false);
    });
  }, []);

  return OnlineStatus;
};

export default useOnlineStatus;
