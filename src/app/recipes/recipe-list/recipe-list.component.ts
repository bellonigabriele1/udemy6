import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected2 = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Ricetta 1', 'This is 1 test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelected2(recipe: Recipe) {
    this.recipeSelected2.emit(recipe);
    console.log('emesso da onSelected2 ' + recipe.name);
  }

}
