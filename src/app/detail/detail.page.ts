import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonManagementService } from '../services/pokemon-management.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-view-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public pokemon!: Pokemon;

  constructor(
    private pokemonManagementService: PokemonManagementService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const nameP = this.activatedRoute.snapshot.paramMap.get('name') as string;
    this.pokemonManagementService.getPokemonByName(nameP).subscribe(val => {
      if (val) {
        this.pokemon = val;
      }
    });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  getType(item: any) {
    return item.type?.name;
  }
}
