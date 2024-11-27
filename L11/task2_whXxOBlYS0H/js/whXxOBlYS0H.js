fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(retrobj => showRecipes(retrobj.recipes));

function showRecipes(recipes){
    function insertTextOrImg(parent, tag, textorsrs, ...classname){
        let titem_c = document.createElement(tag);
        parent.appendChild(titem_c);
        if (tag !== 'img'){
            titem_c.innerText = textorsrs;
        } else {
            titem_c.src = textorsrs;
        }
        if (arguments.length>3) {titem_c.classList.add(...classname)};
    }

    function insertDiv(parent,...classname){
        let titem_c = document.createElement('div');
        parent.appendChild(titem_c);
        if (arguments.length>1){titem_c.classList.add(...classname)};
        return titem_c;
    }

    function insertList(parent, type, sourcearr, ...classname){
        let tlist_c = document.createElement(type);
        parent.appendChild(tlist_c);
        for (const itemlist of sourcearr){
            let titemlist_c = document.createElement('li');
            tlist_c.appendChild(titemlist_c);
            titemlist_c.innerText = itemlist;
        }
        if (arguments.length>3) {tlist_c.classList.add(...classname)};
    }

    function arrToStr(srcarr, addstr){
        return srcarr.map((value) => value = addstr+value).toString().trimStart();
    }

    let recipes_c = insertDiv(document.body, 'recipes_panel');
    for (const recipe of recipes){
        let recipe_c = insertDiv(recipes_c, 'recipe_block');
            let recipe_img_c = insertDiv(recipe_c, 'recipe_imgblock');
                insertTextOrImg(recipe_img_c, 'img', recipe.image);
            let recipe_info_c = insertDiv(recipe_c, 'recipe_infoblock');
                insertTextOrImg(recipe_info_c, 'h2', recipe.name);
                insertTextOrImg(recipe_info_c, 'p', `${recipe.cuisine} / ${recipe.difficulty} / rating ${recipe.rating}`);
                insertTextOrImg(recipe_info_c, 'p', `Prepare time ${recipe.prepTimeMinutes} minutes, cook time ${recipe.cookTimeMinutes} minutes`);
                insertTextOrImg(recipe_info_c, 'p', `servings: ${recipe.servings}, caloriesPerServing: ${recipe.caloriesPerServing}, mealType: ${arrToStr(recipe.mealType, ' ')}`);
                insertTextOrImg(recipe_info_c, 'p', `Tags: ${arrToStr(recipe.tags,' #')}`);
                insertTextOrImg(recipe_info_c, 'p', `id recipe: ${recipe.id}, userId: ${recipe.userId}, reviews: ${recipe.reviewCount}`);
            let recipe_ingred_c = insertDiv(recipe_c, 'recipe_ingredients');
                insertTextOrImg(recipe_ingred_c, 'h3', 'Ingredients:');
                insertList(recipe_ingred_c, 'ul', recipe.ingredients);
            let recipe_instruct_c = insertDiv(recipe_c, 'recipe_instructions');
                insertTextOrImg(recipe_instruct_c, 'h3', 'Instructions:');
                insertList(recipe_instruct_c, 'ol', recipe.instructions);
    }
}