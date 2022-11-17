import Home from "./pages/Home";
import AppBar from "./components/AppBar";
import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/Container";
import Settings from "./pages/Settings";
import Pricing from "./pages/Pricing";
import ContactForm from "./pages/Contact";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <AppBar />
          <Routes>
            <Route path="/*">
              <Route index path="home" element={<Home />} />
              <Route path="login" element={<Auth />} />
              <Route path="contact" element={<ContactForm />} />
              <Route path="settings" element={<Settings />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
