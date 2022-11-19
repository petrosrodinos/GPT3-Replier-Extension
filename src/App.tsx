import Home from "./pages/Home";
import AppBar from "./components/AppBar";
import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/Container";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import ContactForm from "./pages/Contact";
import { useAppSelector } from "./types/store";
import Playground from "./pages/Playground";

function App() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
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
              <Route path="playground" element={<Playground />} />
              {isLoggedIn && <Route path="dashboard" element={<Dashboard />} />}
              <Route path="plans" element={<Pricing />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
