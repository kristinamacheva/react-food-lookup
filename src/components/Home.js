import { Button } from "react-bootstrap";
import FoodSearch from "./FoodSearch";
import SelectedFood from "./SelectedFood";
import { useState } from "react";

export default function Home() {
    const [selectedFoodItems, setSelectedFoodItems] = useState([
        {
          "id": "548812",
          "description": "Pizza",
          "kcal": 410,
          "protein": 17,
          "fat": 10,
          "carbs": 40
        },
        {
            "id": "214155",
            "description": "Burger",
            "kcal": 400,
            "protein": 15,
            "fat": 19,
            "carbs": 50
        },
        {
          "id": "684752",
          "description": "Pasta",
          "kcal": 350,
          "protein": 6,
          "fat": 5,
          "carbs": 33
        },
      ]);

    return (
        <div className="home-container">
            <SelectedFood selectedFoodItems={selectedFoodItems}/>
            <FoodSearch />
            <div className="d-flex justify-content-end mt-3">
                <Button variant="primary" type="submit">Add Food</Button>
            </div>
        </div>
    );
}