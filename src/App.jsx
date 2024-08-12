import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { Routes , Route , Link } from "react-router-dom";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <nav>
        <Link to="/" className="navbar-logo">
          <img src="src/assets/logo-ironhack-blue.png" alt="Logo" className="logo" />
        </Link>

        <Link to="/profile" className="navbar-user-icon">
          <img
            src="src/assets/profile-icon.png"
            alt="User Icon"
            className="user-icon"
          />
        </Link>
      </nav>

      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students/:studentId" element={<StudentDetailsPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
