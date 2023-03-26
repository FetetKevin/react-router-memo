import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Profil from "./components/Profil/Profil";
import Navbar from "./components/Navbar/Navbar";
import Developement from "./components/Services/Developement/Developement";
import Marketing from "./components/Services/Marketing/Marketing";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />}>
                    <Route path="/services/developement" element={<Developement />} />
                    <Route path="/services/marketing" element={<Marketing />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/profil/:id" element={<Profil />} />
            </Routes>
        </div>
    );
}

export default App;
