import { Injectable } from '@angular/core';
import { type PokemonModel } from '../model/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  static getSinglePokemon(id: any, number: any) {
    throw new Error('Method not implemented.');
  }

  static readonly POKEMON_URL: string = 'https://pokeapi.co/api/v2/pokemon/'
  limit: number;
  offset: number;


  constructor() {
    this.limit = 20;
    this.offset = 0;
  }

  async getPokemonData(): Promise<PokemonModel[]> {
    const url = PokemonService.POKEMON_URL + '?limit=' + this.limit + '&offset=' + this.offset;
    // const data = await fetch(url);
    // return (await data.json()).results ?? [];

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        const requests = [];
        // dettagli di ciascun pokemon
        for (const pokemon of data.results) {
          const pokeUrl = pokemon.url; // url + id
          console.log(pokeUrl);
          const request = fetch(pokeUrl) // salvo in request
            .then(res => res.json())
            .then(data => data) // i dati dentro pokeurl
            .catch(err => console.error(err))
          requests.push(request); // li pusho in requests come array
        }

        return Promise.all(requests); // risolvo la promessa

      })
      
  }

  getSinglePokemon(id: number): Promise<PokemonModel> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json());
  }


  nextPage() {
    this.offset += this.limit
  }

  previousPage() {
    if (this.offset - this.limit >= 0) {
      this.offset -= this.limit;
    }
  }

}
