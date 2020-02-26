import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
recipe = <any>{}
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.recipeService.getRecipeById(this.route.snapshot.params['id']).subscribe(recipe => {
      this.recipe = recipe;
    })
  }

}
