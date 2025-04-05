import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: HomepageComponent, title: 'Home page'},
    {path: 'pokemon/:id', component: PokemonDetailComponent, title: 'Detail' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}