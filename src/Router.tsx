import React, {useState} from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import Login from "./pages/login/page.tsx";
import Dashboard from "./pages/dashboard/page.tsx";
import { useAuthStore } from "./store/auth.ts";
import { getDateOfPreviousDay } from '../src/utils/dateUtils';
import useExportToPDF from "./hooks/useExportToPDF.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

const Router = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const [currentDate, setCurrentDate] = useState<string>(getDateOfPreviousDay());
  const { targetRef, downloadPDF, isDownloading } = useExportToPDF({date: currentDate});


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar currentDate={currentDate} setCurrentDate={setCurrentDate} downloadPDF={downloadPDF} isDownloading={isDownloading} />
        <Routes>
          {/* Redireccionar a Dashboard si ya está autenticado */}
          <Route
            path="/login"
            element={isAuth ? <Navigate to="/dashboard" replace /> : <Login />}
          />

          <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
            {/* Rutas protegidas */}
            <Route path="/daily" element={<Dashboard currentDate={currentDate} targetRef={targetRef} isDownloading={isDownloading} isWeekly={false}/>} />
            <Route path="/weekly" element={<Dashboard currentDate={currentDate} targetRef={targetRef} isDownloading={isDownloading} isWeekly={true}/>} />
          </Route>

          {/* Rutas por defecto dependiendo de la autenticación  */}
          <Route
            path="/*"
            element={<Navigate to={isAuth ? "/daily" : "/login"} replace />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
