import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: HomepageComponent},
    {path: 'pokemon/id', component: PokemonDetailComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}