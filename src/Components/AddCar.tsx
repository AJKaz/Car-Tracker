import React from "react";
import { Button } from "./Button";
import Input from "./Input";
import { CarData } from "../interfaces";

interface AddCarProps {
  onAdd: (props: CarData) => void;
  onCancel: () => void;
}

const AddCar: React.FC<AddCarProps> = ({ onAdd, onCancel }) => {
  const [carName, setCarName] = React.useState("");
  const [color, setColor] = React.useState("");
  const [year, setYear] = React.useState("");
  const [licensePlate, setLicensePlate] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState<Date>(new Date());

  const handleAdd = () => {
    const props: CarData = {
      name: carName,
      color,
      year,
      licensePlate,
      expirationDate,
    };
    onAdd(props);
    onCancel(); // Close the modal after adding
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    const [year, month, day] = dateValue.split("-").map(Number);
    const localDate = new Date(year, month - 1, day);
    setExpirationDate(localDate);
  };

  return (
    <div className="add-car">
      <h2>Add a New Car</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Input
          type="text"
          value={carName}
          label="Name:"
          placeholder="Car Name"
          onChange={(e) => setCarName(e.target.value)}
          maxWidth="140px"
        />
        <Input
          type="text"
          value={color}
          label="Color:"
          placeholder="Color"
          onChange={(e) => setColor(e.target.value)}
          maxWidth="140px"
        />
        <Input
          type="number"
          value={year}
          label="Year:"
          placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
          maxWidth="140px"
        />
        <Input
          type="text"
          value={licensePlate}
          label="License Plate:"
          placeholder="License Plate Number"
          onChange={(e) => setLicensePlate(e.target.value)}
          maxWidth="140px"
          maxLength={7}
        />
        <Input
          type="date"
          // value={expirationDate}
          label="Expiration:"
          onChange={handleDateChange}
          maxWidth="140px"
        />
      </div>

      <div>
        <Button onClick={onCancel} text="Cancel" />
        <Button onClick={handleAdd} text="Add" />
      </div>
    </div>
  );
};

export default AddCar;
