import { Table, InputGroup, FormControl, Button } from "react-bootstrap";
import FoodItem from "./FoodItem";
import * as foodService from "../services/foodService";
import { useEffect, useState } from "react";

export default function FoodSearch({
    onFoodItemAdd
}) {
    const [searchValue, setSearchValue] = useState('');
    const [showRemoveIcon, setShowRemoveIcon] = useState(false);
    const [searchedFoods, setSearchedFoods] = useState([]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        setShowRemoveIcon(value !== '');
    };

    const clearSearch = () => {
        setSearchValue('');
        setShowRemoveIcon(false);
    };

    useEffect(() => {
        foodService.getAll()
            .then(result => setSearchedFoods(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th colSpan={5}>
                        <InputGroup>
                            <InputGroup.Text>
                                <i className="fa fa-search"></i>
                            </InputGroup.Text>
                            <FormControl
                                type="text"
                                placeholder="Start typing to search for food"
                                value={searchValue}
                                onChange={handleSearchChange}
                            />
                            {showRemoveIcon && (
                                <Button variant="link" onClick={clearSearch}>
                                    <i className="fa fa-times"></i>
                                </Button>
                            )}
                        </InputGroup>
                    </th>
                </tr>
                <tr>
                    <th>Description</th>
                    <th>Kcal</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                    <th>Carbs (g)</th>
                </tr>
            </thead>
            <tbody>
                {searchedFoods.map(foodItem => (
                    <FoodItem key={foodItem.id} food={foodItem} onFoodItemClick={onFoodItemAdd} />
                ))}
            </tbody>
        </Table>
    );
}
