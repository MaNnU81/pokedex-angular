import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { type PokemonModel } from '../../model/pokemon-model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [PokemonCardComponent, CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  pokemons: PokemonModel[] = [];
  pokemonService: PokemonService = inject(PokemonService) // maiuscole DECORATOR minuscole FUNZIONI
  pokemon: any;

  constructor() {
    this.pokemonService.getPokemonData().then(pok => {
      console.log(pok);
      this.pokemons = pok;
    })
  }

  selectedPokemon: PokemonModel | null = null;

selectPokemon(pokemon: PokemonModel): void {
  this.selectedPokemon = pokemon;
}

  get isFirstPage(): boolean {
    return this.pokemonService.offset === 0;
  }

  get currentPage(): number {
    return this.pokemonService.offset / this.pokemonService.limit + 1;
  }

  nextPage() {
    this.pokemonService.nextPage();
    this.pokemonService.getPokemonData().then(pok => {
      this.pokemons = pok;
    });
  }
  
  previousPage() {
    this.pokemonService.previousPage();
    this.pokemonService.getPokemonData().then(pok => {
      this.pokemons = pok;
    });
  }
}
