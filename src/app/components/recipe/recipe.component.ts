import { Component, Input } from '@angular/core';

import { Recipe } from '../../models/recipe.interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class recipeComponent {
  @Input() recipe!: Recipe;
}
