import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [cars, setCars] = useState(() => {
    const savedCars = localStorage.getItem("cars");
    return savedCars ? JSON.parse(savedCars) : [];
  });

  const [filteredCars, setFilteredCars] = useState("");

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  return (
    <div className="container">
      <h1>Car DealerShip</h1>
      <Form cars={cars} setCars={setCars} />
    </div>
  );
}

export default App;
