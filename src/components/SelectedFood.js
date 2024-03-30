import Table from "react-bootstrap/Table";
import FoodItem from "./FoodItem";
import { calculateTotal } from "../helpers";

export default function SelectedFood({ selectedFoodItems }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th colSpan={5}>
                        <h3>Selected foods</h3>
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
                {selectedFoodItems.map((foodItem, index) => (
                    <FoodItem key={index} food={foodItem} />
                ))}
                <tr>
                    <th>Total</th>
                    <th id="total-kcal">{calculateTotal(selectedFoodItems, 'kcal').toFixed(2)}</th>
                    <th id="total-protein">{calculateTotal(selectedFoodItems, 'protein').toFixed(2)}</th>
                    <th id="total-fat">{calculateTotal(selectedFoodItems, 'fat').toFixed(2)}</th>
                    <th id="total-carbs">{calculateTotal(selectedFoodItems, 'carbs').toFixed(2)}</th>
                </tr>
            </tbody>
        </Table>
    );
}
