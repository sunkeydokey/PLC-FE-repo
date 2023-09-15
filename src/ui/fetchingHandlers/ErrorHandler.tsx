import { Navigate } from 'react-router-dom';

export const ErrorHandler = () => {
  return <Navigate to='/error' />;
};
