import "./App.css";
import FoodForm from "./components/FoodForm";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { SelectedFoodProvider } from "./contexts/SelectedFoodContext";

function App() {
    return (
        <SelectedFoodProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<FoodForm />} />
            </Routes>
        </SelectedFoodProvider>
    );
}

export default App;
