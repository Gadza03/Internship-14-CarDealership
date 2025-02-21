import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CarList from "./components/CarList";
import FilterBar from "./components/FilterBar";

function App() {
  const [cars, setCars] = useState(() => {
    const savedCars = localStorage.getItem("cars");
    return savedCars ? JSON.parse(savedCars) : [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  return (
    <div className="container">
      <h1>Car DealerShip</h1>
      <Form cars={cars} setCars={setCars} />
      <p className="search-description">Search cars by brand and model:</p>
      <FilterBar filter={filter} setFilter={setFilter} />
      <CarList cars={cars} filter={filter} />
    </div>
  );
}

export default App;
