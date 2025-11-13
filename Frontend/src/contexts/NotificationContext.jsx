import { createContext, useContext, useMemo, useState } from "react";

const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
  clearNotifications: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const getId = () =>
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const value = useMemo(
    () => ({
      notifications,
      addNotification: (notification) =>
        setNotifications((prev) => [...prev, { id: getId(), ...notification }]),
      clearNotifications: () => setNotifications([]),
    }),
    [notifications]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);


