import { Button,  Container } from "react-bootstrap";
import FoodSearch from "./FoodSearch";
import SelectedFood from "./SelectedFood";
import { useContext } from 'react';
import SelectedFoodContext from "../contexts/SelectedFoodContext";
import { Link } from "react-router-dom";

export default function Home() {
    const { selectedFoodItems, setSelectedFoodItems } = useContext(SelectedFoodContext);
    
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
                onFoodItemRemove={foodItemRemoveHandler} 
            />
            
            <FoodSearch 
                onFoodItemAdd={foodItemAddHandler} 
            />

            <div className="d-flex justify-content-end mt-3">
                <Button as={Link} to="/add" variant="primary">Add Food</Button>
            </div>
        </Container>
    );
}