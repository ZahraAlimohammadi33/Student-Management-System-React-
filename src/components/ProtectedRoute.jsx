import React from 'react'

const ProtectedRoute = ({ authenticated, children }) => {
  if (!authenticated) {
    alert("برای دسترسی به این بخش وارد حساب کاربری شوید");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute