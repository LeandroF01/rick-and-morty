import { useEffect, useState } from "react";
import "./App.css";
import { LocationInfo } from "./components/LocationInfo";
import image from "./assets/rick-and-morty.jpg";
import title from "./assets/title.png";
import { Search } from "./components/Search";
import axios from "axios";
import Pagination from "./components/Pagination";

function App() {
  const [location, setLocation] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let ramdonLocation;
    if (searchInput === "") {
      ramdonLocation = Math.ceil(Math.random() * (126 - 1) + 1);
    } else {
      ramdonLocation = searchInput;
    }

    const urlResult = `https://rickandmortyapi.com/api/location/${ramdonLocation}`;
    axios
      .get(urlResult)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [searchInput]);

  const handleSumit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.search.value);
  };

  return (
    <div className="App">
      <img className="image-title" src={title} alt="" />
      <img className="image-background" src={image} alt="rick-and-morty.jpg" />
      <Search handleSumit={handleSumit} />
      <LocationInfo location={location} />
      <Pagination
        totalResidents={location?.residents?.length}
        location={location}
      />
    </div>
  );
}

export default App;
