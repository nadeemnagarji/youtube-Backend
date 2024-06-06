import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashBoard from "./pages/DashBoard";
DashBoard;
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<SignInPage />}></Route>
          <Route path="/" element={<SignUpPage />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
