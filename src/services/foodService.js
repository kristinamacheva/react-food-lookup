const baseUrl = 'http://localhost:3005/foods';

export const getAll = async () => {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();

        const data = Object.values(result);
        return data;
    } catch (error) {
        throw error;
    }
};

export const searchAll = async (query) => {
    try {
        const response = await fetch(`${baseUrl}?description_like=${query}`);
        const result = await response.json();

        const data = Object.values(result);
        return data;
    } catch (error) {
        throw error;
    }
};

export const searchLimit = async (query) => {
    try {
        const response = await fetch(`${baseUrl}?description_like=${query}&_limit=50`);
        const result = await response.json();

        const data = Object.values(result);
        return data;
    } catch (error) {
        throw error;
    }
};

export const create = async (data) => {
    try {
        const body = {
            id: data.id,
            description: data.description,
            kcal: data.kcal,
            protein: data.protein,
            fat: data.fat,
            carbs: data.carbs,
        };
    
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    
        const result = await response.json();    
        return result;
    } catch (error) {
        throw error;
    }
};
