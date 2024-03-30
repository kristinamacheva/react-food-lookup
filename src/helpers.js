export const calculateTotal = (items, propertyName) => {
    return items.reduce((accumulator, currentItem) => accumulator + currentItem[propertyName], 0);
};