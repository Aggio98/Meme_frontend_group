import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, getUserWithStoredToken } from "./store/user/thunks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./config/scrollToTop";
import { NavBar } from "./components";
import { HomePage, SignUpPage, LoginPage, MehWorldPage } from "./pages";
import { selectUser } from "./store/user/selectors";

function App() {
  const dispatch = useDispatch();
  const profile = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  useEffect(() => {
    if (profile) {
      dispatch(getFavorites(profile.id));
    }
  }, [profile, dispatch]);

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
