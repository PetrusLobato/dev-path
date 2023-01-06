import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProtectedRoutes = () => {

  const { profile, refreshing } = useContext(UserContext);
   

  if(refreshing){return null}

  return profile ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoutes;
