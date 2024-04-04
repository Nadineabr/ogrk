import { Navigate, Routes, Route } from 'react-router-dom';
import { MAIN_ROUTES } from 'configs/routes';
import { Estates } from 'view/pages/Estates';

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

      <Route path={MAIN_ROUTES.ESTATES} element={<Estates />} />
    </Routes>
  );
}

export default App;
