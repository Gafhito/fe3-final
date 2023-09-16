import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Details from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useDentistStates } from "./Components/utils/global.context";

function App() {

  const { themeState } = useDentistStates();

  return (
    <div className={themeState.theme ? 'App' : 'dark'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Details />} />
        <Route path="favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
