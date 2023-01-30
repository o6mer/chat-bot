import { ReactNode, useContext, useEffect } from "react";
import {
  DashboardContext,
  TDashbaordContext,
} from "../../Contexts/DashbaordContext";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const { token } = useContext(DashboardContext) as TDashbaordContext;
  const { auth } = useAuth();

  useEffect(() => {
    auth();
  }, []);

  return <>{token ? children : <Navigate to={"/login"} />}</>;
};

export default ProtectedRoutes;
