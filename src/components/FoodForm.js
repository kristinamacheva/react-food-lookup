import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FoodForm.css";

export default function FoodForm() {
    return (
        <div className="food-form-container">
            <Form>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Description" 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formProtein">
                    <Form.Label>Protein</Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        placeholder="Enter Protein"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFat">
                    <Form.Label>Fat</Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        placeholder="Enter Fat"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCarbs">
                    <Form.Label>Carbs</Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        placeholder="Enter Carbs"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formKcal">
                    <Form.Label>Kcal</Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        placeholder="Enter Kcal"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
                <Button variant="secondary" className="ms-2">
                    Cancel
                </Button>
            </Form>
        </div>
    );
}
