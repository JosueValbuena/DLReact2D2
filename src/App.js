import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./view/Home";
import Favoritos from "./view/Favoritos"
import NotFound from "./view/NotFound";
import "./App.css"
import { useEffect, useState } from "react";
import { Mycontext } from "./context/MyContext";

function App() {

  const [data, setData] = useState([]);
  const sharedState = {data, setData}

  const url = "./src/data/fotos.json";

  const getApi = async () => {
    const res = await fetch('./fotos.json');
    let { photos } = await res.json();
    photos = photos.map(photo => ({
      id: photo.id,
      descripcion: photo.alt,
      src: photo.src.tiny,
      autor: photo.photographer,
      favorito: false,
    }));

    setData(photos);
  };

  useEffect(() => {
    getApi()
  }, []);

  return (
    <div className="App">
      <Mycontext.Provider value={sharedState}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Mycontext.Provider>
    </div >
  );
}

export default App;
