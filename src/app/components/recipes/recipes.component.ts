import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RecipesService } from '../../services/recipes.service';

import { Recipe } from 'src/app/models/recipe.interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class recipesComponent implements OnInit, OnDestroy {
  getRecipesSubscription!: Subscription;

  recipes: Recipe[] = [];

  constructor(private _recipes: RecipesService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.getRecipesSubscription = this._recipes.getRecipes().subscribe({
      next: ({ meals }) => {
        this.recipes = meals;
        console.log('meals', meals);
      },
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from observables and events
    this.getRecipesSubscription.unsubscribe();
  }
}
