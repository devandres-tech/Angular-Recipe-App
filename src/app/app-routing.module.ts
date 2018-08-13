import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from '@angular/router'; 
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";


// registering our routes 
const appRoutes: Routes = [
    // here each javascript object represents a route 
    { path: "", redirectTo: "/recipes", pathMatch: "full"},
    { path: 'recipes', component: RecipesComponent, children: [
        { path: "", component: RecipeStartComponent },
        { path: "new", component: RecipeEditComponent},
        { path: ":id", component: RecipeDetailComponent }, 
        { path: ":id/edit", component: RecipeEditComponent }
    ] }, 
    { path: 'shopping-list', component: ShoppingListComponent }  
]; 

@NgModule({
    // here our routes are now configured
    imports: [RouterModule.forRoot(appRoutes)], 
    // export our router module to the app module 
    exports: [RouterModule]
})
// this class will bundle all of the routing functinality 
export class AppRoutingModule {

}