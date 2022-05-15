import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((res) => res.json())
      .then((res) => setPlants(res));
  }, []);

  function addPlant(newPlant) {
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((res) => setPlants([...plants, res]));
  }

  const itemsToDispaly = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={itemsToDispaly}
        onAddPlant={addPlant}
        searchValue={searchValue}
        onValueChange={setSearchValue}
      />
    </div>
  );
}

export default App;