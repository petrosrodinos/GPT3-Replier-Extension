import Home from "./pages/Home";
import AppBar from "./components/AppBar";
import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Settings from "./pages/Settings";
import Pricing from "./pages/Pricing";
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
              <Route path="settings" element={<Settings />} />
              <Route path="pricing" element={<Pricing />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
