import { Button,  Container } from "react-bootstrap";
import FoodSearch from "./FoodSearch";
import SelectedFood from "./SelectedFood";
import { useState } from "react";

export default function Home() {
    const [selectedFoodItems, setSelectedFoodItems] = useState([]);
    
    const foodItemAddHandler = (food) => {
        console.log('Food clicked:', food);

        const isAlreadyAdded = selectedFoodItems.some(item => item.id === food.id);

        if (!isAlreadyAdded) {
            setSelectedFoodItems(state => ([
                ...state,
                food,
            ]));
        } else {
            console.log('This food is already added.');
        }
    }

    const foodItemRemoveHandler = (foodToRemove) => {
        console.log('Food removed:', foodToRemove);
        
        setSelectedFoodItems(state => (
            state.filter(food => food !== foodToRemove)
        ));
    }

    return (
        <Container>
            <SelectedFood 
                selectedFoodItems={selectedFoodItems} 
                onFoodItemRemove={foodItemRemoveHandler} 
            />
            
            <FoodSearch 
                onFoodItemAdd={foodItemAddHandler} 
            />

            <div className="d-flex justify-content-end mt-3">
                <Button variant="primary" type="submit">Add Food</Button>
            </div>
        </Container>
    );
}