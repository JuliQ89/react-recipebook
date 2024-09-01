import { BrowserRouter, Routes, Route } from "react-router-dom"; // useParams
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage";
import Rezepte from "./components/Rezepte/Rezepte";
import Rezept from "./components/Rezepte/Rezept";
import RezeptErstellen from "./components/Rezepte/RezeptErstellen";
import KategoryErstellen from "./components/Kategory/KategoryErstellen";

// const API_KEY = "174a7d4bc1498b9055eb57f4133fd230";
// const API_ID = "c049e568";
// const API_URL = `https://api.edamam.com/search?q=%3Cquery%3E&app_id=${API_ID}&app_key=${API_KEY}`;

const API_URL = `http://localhost:8000`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home API_URL={ API_URL } />} />                               {/* Home */}
          {/* KATEGORY */}
          <Route path="/kategory/erstellen" element={<KategoryErstellen API_URL={API_URL} />} />  {/* create Kategory */}
          {/* RECIPE */}
          <Route path="/rezepte" element={<Rezepte API_URL={ API_URL } />} />                     {/* all Recipes */}
          <Route path="/rezept/:id" element={<Rezept API_URL={ API_URL } />} />                   {/* specific Recipe */}
          <Route path="/rezept/erstellen" element={<RezeptErstellen API_URL={ API_URL } />} />    {/* create Recipe */}
          {/* OUTHERS */}
          <Route path="*" element={<ErrorPage />} />                                              {/* Not Found Page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;