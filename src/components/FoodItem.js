export default function FoodItem({ food }) {
    return (
        <tr>
            <td>{food.description}</td>
            <td>{food.kcal}</td>
            <td>{food.protein}</td>
            <td>{food.fat}</td>
            <td>{food.carbs}</td>
        </tr>
    );
}
