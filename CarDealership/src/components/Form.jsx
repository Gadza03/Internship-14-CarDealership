import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputField from "./InputField";
import "../styles/form.css";

export default function Form({ cars, setCars }) {
  const [id, setId] = useState(0);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    type: "",
    year: "",
    registration: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const addCar = (newCar) => {
    if (cars.length >= 10) {
      alert("Maximum number of cars reached!");
      return;
    }
    setCars([...cars, newCar]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMessage = valideteInputs();
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    const newId = id + 1;
    const newCar = { ...car, id: newId };
    addCar(newCar);

    setCar({ brand: "", model: "", type: "", year: "", registration: "" });
    setId(newId);
  };

  const valideteInputs = () => {
    if (car.brand.length < 2)
      return "Car brand must contain more than 2 letters";

    if (car.model.length < 2)
      return "Car model must contain more than 2 letters";

    if (!car.type) return "Car must have type.";

    if (car.year < 1950 || car.year > 2025)
      return "Car release year have to be between 1950 and 2025.";

    if (!car.registration)
      return "Your have to write your registration expiration date.";

    if (new Date(car.registration) < new Date())
      return "Your registration has to expire somewhere in the future.";

    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        name="brand"
        value={car.brand}
        onChange={handleChange}
        placeholder="Brand"
      />
      <InputField
        name="model"
        value={car.model}
        onChange={handleChange}
        placeholder="Model"
      />
      <select name="type" value={car.type} onChange={handleChange}>
        <option value="">Select type</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="van">Van</option>
      </select>
      <InputField
        type="number"
        name="year"
        value={car.year}
        onChange={handleChange}
        placeholder="Year"
      />
      <InputField
        type="date"
        name="registration"
        value={car.registration}
        onChange={handleChange}
        placeholder="Registration expires on"
      />
      <button type="submit" id="submit-btn">
        Add Car
      </button>
      <Toaster />
    </form>
  );
}
