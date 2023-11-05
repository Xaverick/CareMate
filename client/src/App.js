import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/Signup";
import Login from "../src/components/Login";
import NextPage from "./components/NextPage";
import { UserProvider } from "./context/UserContext";
import MiniDrawer from "./components/Dashboard/dashboard"
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:3030";
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Signup" element={<SignIn></SignIn>} />
          <Route path="/Login" element={<Login></Login>} />
          <Route path="/next" element={<NextPage></NextPage>} />
          <Route path="/dashboard" element={<MiniDrawer />}  />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
