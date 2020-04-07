import { Recipe} from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Carbonara', 
            'deliziosa carbonara', 
            'https://wips.plug.it/cips/buonissimo.org/cms/2019/02/carbonara.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 10)
            ]),
        new Recipe(
            'Pesto', 
            'gustosa pasta al pesto', 
            'https://i0.wp.com/www.piccolericette.net/piccolericette/wp-content/uploads/2018/05/3570_Pasta.jpg?resize=895%2C616&ssl=1',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 10)
            ])

      ];

constructor(private slService: ShoppingListService) {}

getRecipes() {
    return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
}

}