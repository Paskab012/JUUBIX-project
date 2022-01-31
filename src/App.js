/* eslint-disable quotes */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcome/WelcomePage";
import LoginPage from "./components/login/LoginPage";
import InterestPage from "./components/interest/InterestPage";
import StatusPage from "./components/status/StatusPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/interest" element={<InterestPage />} />
          <Route path="/status" element={<StatusPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
