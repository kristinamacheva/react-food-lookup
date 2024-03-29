import Table from "react-bootstrap/Table";

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
                <tr>
                    <td>food.description</td>
                    <td>food.kcal</td>
                    <td>food.protein</td>
                    <td>food.fat</td>
                    <td>food.carbs</td>
                </tr>
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
