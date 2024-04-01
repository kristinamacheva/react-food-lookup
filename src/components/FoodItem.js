export default function FoodItem({ 
    food, 
    onFoodItemClick 
}) {
    const itemClickHandler = () => {
        onFoodItemClick(food);
    };

    return (
        <tr onClick={itemClickHandler}>
            <td>{food.description}</td>
            <td>{food.kcal}</td>
            <td>{food.protein}</td>
            <td>{food.fat}</td>
            <td>{food.carbs}</td>
        </tr>
    );
}
