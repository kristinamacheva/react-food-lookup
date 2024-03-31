import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FoodForm.css";
import { useState, useRef, useEffect } from 'react';

const formInitialState = {
    description: '',
    protein: '',
    fat: '',
    carbs: '',
    kcal: '',
};

export default function FoodForm() {
    const descriptionInputRef = useRef();
    const [formValues, setFormValues] = useState(formInitialState);

    useEffect(() => {
        descriptionInputRef.current.focus();
    }, []);

    const changeHandler = (e) => {
        let value = '';

        if (e.target.type === 'number') {
            value = Number(e.target.value);
        } else {
            value = e.target.value;
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetFormHandler();
    };

    return (
        <div className="food-form-container">
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        ref={descriptionInputRef}
                        type="text" 
                        name="description"
                        value={formValues.description}
                        onChange={changeHandler}
                        placeholder="Enter Description" 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formProtein">
                    <Form.Label>Protein</Form.Label>
                    <Form.Control
                        type="number"
                        name="protein"
                        value={formValues.protein}
                        min="0"
                        onChange={changeHandler}
                        placeholder="Enter Protein"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFat">
                    <Form.Label>Fat</Form.Label>
                    <Form.Control
                        type="number"
                        name="fat"
                        value={formValues.fat}
                        min="0"
                        onChange={changeHandler}
                        placeholder="Enter Fat"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCarbs">
                    <Form.Label>Carbs</Form.Label>
                    <Form.Control
                        type="number"
                        name="carbs"
                        value={formValues.carbs}
                        min="0"
                        onChange={changeHandler}
                        placeholder="Enter Carbs"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formKcal">
                    <Form.Label>Kcal</Form.Label>
                    <Form.Control
                        type="number"
                        name="kcal"
                        value={formValues.kcal}
                        min="0"
                        onChange={changeHandler}
                        placeholder="Enter Kcal"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
                <Button variant="secondary" className="ms-2" onClick={resetFormHandler}>
                    Cancel
                </Button>
            </Form>
        </div>
    );
}
