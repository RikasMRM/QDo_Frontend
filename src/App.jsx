import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { UserLogin } from "./pages/UserAuth/UserLogin";
import { UserRegistration } from "./pages/UserAuth/UserRegistration";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Registration" element={<UserRegistration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
