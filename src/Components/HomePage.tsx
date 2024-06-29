import { useEffect, useState } from "react";
import * as firebase from "../firebase";
import { Button } from "./Button";
import { CarProps, CarData } from "../interfaces";
import Modal from "./Modal";
import AddCar from "./AddCar";

// TEMP PLACEHOLDER IMAGE
import vite from "/vite.svg";

const HomePage: React.FC = () => {
  const [cars, setCars] = useState<CarData[]>([]);
  const [search, setSearch] = useState("");
  const [isAddCarOpen, setIsAddCarOpen] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      const carsData = await firebase.getCars();
      //   console.log("carsData", carsData);
      setCars(carsData);
    };
    fetchCars();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleAddCar = (props: CarProps) => {
    console.log("Handle Add Car Props:", props);
  };

  return (
    <>
      <Button onClick={firebase.logout} text="Logout" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <input
          type="text"
          placeholder="Search cars"
          value={search}
          onChange={handleSearch}
        />
        <div className="car-grid">
          {cars
            .filter((car) =>
              car.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((car) => (
              <div key={car.name} className="car-item">
                <img src={vite} alt={car.name} />
                <p>{car.name}</p>
              </div>
            ))}
        </div>
        <Button text="Add Car" onClick={() => setIsAddCarOpen(true)}></Button>
      </div>
      <Modal isOpen={isAddCarOpen} onClose={() => setIsAddCarOpen(false)}>
        <AddCar
          onAdd={handleAddCar}
          onCancel={() => setIsAddCarOpen(false)}
        ></AddCar>
      </Modal>
    </>
  );
};

export default HomePage;
