import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeUrl = 'http://localhost:3000/recipes/'

  constructor(private http: HttpClient) { }

   createRecipe(recipe: Recipe){}

   updateRecipe(recipe: Recipe){}

   deleteRecipe(id: number){}

   getRecipeById(id: number) {
     return this.http.get(this.recipeUrl + id)
   }

   getRecipes() {
     return this.http.get(this.recipeUrl);
   }
}
