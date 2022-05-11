import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/index";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Contacts from "./pages/Contacts/index";
import NotFound from "./pages/NotFound/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
