import React, { useState } from 'react';

const shawarmaOrder = {
    main: "",
    toppings: [],
    sauces: []
};

function IngredientList (){

    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const ingredientButtonClick = (ingredient) => {
        setSelectedIngredient(ingredient);
    };

    return (
        <div id="ingredients">
            {selectedIngredient === null ? (
                <>
                    <h1>Choose your main:</h1>
                    <div id="button-container">
                        <button onClick={() => ingredientButtonClick("Chicken")} id="chicken">Chicken</button>
                        <button onClick={() => ingredientButtonClick("Beef")} id="beef">Beef</button>
                        <button onClick={() => ingredientButtonClick("Veggie")} id="vegetarian">Veggie</button>
                    </div>
                </>
            ) : (
                <div id="toppings">
                    <h1>Choose your toppings:</h1>
                    <div id="toppings-container">
                        <button id="lettuce">Lettuce</button>
                        <button id="tomatoes">Tomatoes</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IngredientList;