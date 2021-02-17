import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 3)
        ])
    ];
    constructor(private shoppingListService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShpoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }


}