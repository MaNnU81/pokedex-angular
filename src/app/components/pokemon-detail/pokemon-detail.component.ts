import { Component, OnInit, inject } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonModel } from '../../model/pokemon-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {
  id!: string;
  pokemon: PokemonModel | null = null;

  // Iniettiamo il service
  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.pokemonService.getSinglePokemon(+this.id).then((p: PokemonModel) => {
        console.log('Pokemon ricevuto:', p);
        this.pokemon = p;
      });
    }
  }
}
