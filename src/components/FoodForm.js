import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FoodForm.css";
import { useState, useRef, useEffect } from 'react';
import * as foodService from "../services/foodService";
import { v4 as uuidv4 } from 'uuid';

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
    const [errors, setErrors] = useState({});

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
        setErrors({});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        validateFormData();
    };

    const validateField = (name, value) => {
        if (!value) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        } else if (typeof value === 'number' && isNaN(value)) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} must be a number`;
        } else if (typeof value === 'number' && value < 0) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} must be greater than or equal to zero`;
        }
        return '';
    };

    const blurValidator = (e) => {
        const { name, value } = e.target;
        const errorMessage = validateField(name, value);
        
        setErrors(state => ({
            ...state,
            [name]: errorMessage,
        }));
    };

    const validateFormData = () => {
        const newErrors = {};
    
        for (const key in formValues) {
            const errorMessage = validateField(key, formValues[key]);
            if (errorMessage) {
                newErrors[key] = errorMessage;
            }
        }
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully:", formValues);
            createFoodItem();
            resetFormHandler();
        } else {
            console.log("Form has errors. Cannot submit.");
        }
    };

    const createFoodItem = async () => {
        try {
            const newItem = await foodService.create({ id: uuidv4(), ...formValues });
            console.log("Food item created successfully:", newItem);
        } catch (error) {
            console.error("Error creating food item:", error);
        }
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
                        onBlur={blurValidator}
                        placeholder="Enter Description" 
                        isInvalid={errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.description}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formProtein">
                    <Form.Label>Protein</Form.Label>
                    <Form.Control
                        type="number"
                        name="protein"
                        value={formValues.protein}
                        onChange={changeHandler}
                        onBlur={blurValidator}
                        placeholder="Enter Protein"
                        isInvalid={errors.protein}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.protein}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFat">
                    <Form.Label>Fat</Form.Label>
                    <Form.Control
                        type="number"
                        name="fat"
                        value={formValues.fat}
                        onChange={changeHandler}
                        onBlur={blurValidator}
                        placeholder="Enter Fat"
                        isInvalid={errors.fat}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.fat}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCarbs">
                    <Form.Label>Carbs</Form.Label>
                    <Form.Control
                        type="number"
                        name="carbs"
                        value={formValues.carbs}
                        onChange={changeHandler}
                        onBlur={blurValidator}
                        placeholder="Enter Carbs"
                        isInvalid={errors.carbs}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.carbs}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formKcal">
                    <Form.Label>Kcal</Form.Label>
                    <Form.Control
                        type="number"
                        name="kcal"
                        value={formValues.kcal}
                        onChange={changeHandler}
                        onBlur={blurValidator}
                        placeholder="Enter Kcal"
                        isInvalid={errors.kcal}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.kcal}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={Object.values(errors).some(x => x)}>
                    Add
                </Button>
                <Button variant="secondary" className="ms-2" onClick={resetFormHandler}>
                    Cancel
                </Button>
            </Form>
        </div>
    );
}
