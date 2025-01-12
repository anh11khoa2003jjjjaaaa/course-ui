import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ element, isAdminRequired, ...rest }) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.RoleName;

    if (isAdminRequired && userRole !== "Teacher") {
      return <Navigate to="/" />;
    }

    return element;// trả về trang cần hiện nếu nó thỏa mảng điều kiện

  } catch (error) {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;