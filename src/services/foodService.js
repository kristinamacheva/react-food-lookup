const baseUrl = 'http://localhost:3005/foods';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const searchAll = async (query) => {
    const response = await fetch(`${baseUrl}?q=${query}`);
    const result = await response.json();

    const data = Object.values(result);
    return result;
};

export const create = async (data) => {
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
    console.log(result);

    return result;
};