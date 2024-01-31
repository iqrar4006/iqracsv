import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loginreg from "./components/Loginreg";
import Upload from "./components/Upload";

function App() {
  const { user, loginWithRedirect, isAuthenticated,logout } = useAuth0();
// console.log(user,isAuthenticated)
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={isAuthenticated?<Dashboard />:<Loginreg />} />
        <Route path="/dashboard" element={isAuthenticated?<Dashboard />:<Loginreg />} /> */}
        <Route path="/" element={!isAuthenticated?<Loginreg />:<Navigate to='/upload'/>} />
        <Route path="/upload" element={isAuthenticated?<Upload />:<Navigate to='/'/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
