import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GetRecipesResponse } from '../models/get-recipes-response.interface';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private _http: HttpClient) {}

  getRecipes(): Observable<GetRecipesResponse> {
    return this._http.get<GetRecipesResponse>(environment.getRecipes);
  }
}
