import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpInterceptor } from './interceptors/http.interceptor';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MonialsComponent } from './components/monials/monials.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { recipeComponent } from './components/recipe/recipe.component';
import { recipesComponent } from './components/recipes/recipes.component';
import { MonialComponent } from './components/monial/monial.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HowWeWorkComponent,
    AboutUsComponent,
    recipesComponent,
    MonialsComponent,
    ContactUsComponent,
    recipeComponent,
    MonialComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
