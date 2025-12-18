import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ authenticated, children }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!authenticated) {
      alert("برای دسترسی به این بخش وارد حساب کاربری شوید");
      setRedirect(true); 
    }
  }, [authenticated]);

  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
