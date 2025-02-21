import CarCard from "./CarCard";
import "../styles/carOutput.css";
export default function CarList({ cars, filter }) {
  const sortedCars = cars.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    if (a.brand !== b.brand) return a.brand.localeCompare(b.brand);
    return a.model.localeCompare(b.model);
  });

  const filteredCars = sortedCars.filter((car) =>
    `${car.brand} ${car.model}`.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(filteredCars.length);
  return (
    <div className="card-list">
      {filteredCars.length > 0
        ? filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        : "No cars in this saloon!"}
    </div>
  );
}
