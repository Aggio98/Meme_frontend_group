import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./config/scrollToTop";
import { NavBar } from "./components";
import { HomePage, SignUpPage, LoginPage, MehWorldPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mehworld" element={<MehWorldPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
