import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/Header";
import PrivateRoute from "./components/privateRoutes.jsx";
import CreateListing from './pages/CreateListing.jsx';
import UpdateListing from "./pages/UpdateListing.jsx";


export default function App() {
  const apiKey= import.meta.env.VITE_FIREBASE_API_KEY
 
  return(

    <BrowserRouter>
    <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route element={<PrivateRoute/>}>
    <Route path="/profile" element={<Profile/>}/>
    <Route path='/create-listing' element={<CreateListing />} />
    <Route path='/update-listing/:listingId' element={<UpdateListing />} />
    </Route>
    
  

  </Routes>
  
  
  </BrowserRouter>
  )
}