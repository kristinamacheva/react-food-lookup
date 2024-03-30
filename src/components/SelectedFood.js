import Table from "react-bootstrap/Table";
import FoodItem from "./FoodItem";

export default function SelectedFood() {
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
                <FoodItem />
                <tr>
                    <th>Total</th>
                    <th id="total-kcal">sum kcal</th>
                    <th id="total-protein">sum protein</th>
                    <th id="total-fat">sum fat</th>
                    <th id="total-carbs">sum carbs</th>
                </tr>
            </tbody>
        </Table>
    );
}
