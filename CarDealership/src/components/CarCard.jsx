import "../styles/carOutput.css";
export default function CarCard({ car, setCars }) {
  const isExpiring = (date) => {
    const expiryDate = new Date(date);
    const todaysDate = new Date();

    todaysDate.setMonth(todaysDate.getMonth() + 1);

    return expiryDate <= todaysDate;
  };

  const handleRemove = (id) => {
    setCars((prevCars) => prevCars.filter((c) => c.id !== id));
  };

  return (
    <div
      className={`car-card ${isExpiring(car.registration) ? "expiring" : ""}`}
    >
      <h3>
        {car.brand} {car.model}
      </h3>
      <p>Type: {car.type}</p>
      <p>Year: {car.year}</p>
      <p>Registraion expires: {car.registration}</p>
      <button onClick={() => handleRemove(car.id)} id="remove-btn">
        Delete
      </button>
    </div>
  );
}
