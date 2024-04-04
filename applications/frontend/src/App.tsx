import { Navigate, Routes, Route } from 'react-router-dom';
import { MAIN_ROUTES } from 'configs/routes';
import { EstatesPage } from 'view/pages/EstatesPage';

function App() {
  return (
    <Routes>
      <Route
        path={MAIN_ROUTES.CORE}
        element={
          <Navigate
            to={MAIN_ROUTES.ESTATES}
            replace
          />
        }
      />

      <Route path={MAIN_ROUTES.ESTATES} element={<EstatesPage />} />
    </Routes>
  );
}

export default App;
