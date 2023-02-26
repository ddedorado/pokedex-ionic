import { Component, ViewChild } from '@angular/core';
import { RefresherCustomEvent, IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { PokemonManagementService } from '../services/pokemon-management.service';
import { Pokemon } from '../models/pokemon.model';

import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen: boolean = false;

  constructor(public pokemonManagementService: PokemonManagementService, private modalCtrl: ModalController) {
    this.pokemonManagementService.getPokemons();
    this.pokemonManagementService.getTypes();

    this.pokemonManagementService.close
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  async openFilter() {
    this.pokemonManagementService.close = true;
    const modal = await this.modalCtrl.create({
      component: FilterComponent,
      componentProps: {
        types: this.pokemonManagementService.types
      }
    });

    modal.present().then(async ()=> {
      const { data, role } = await modal.onWillDismiss();
      if (role === 'confirm') {
        this.pokemonManagementService.typeSelected = data;
        (this.pokemonManagementService.typeSelected === '') ? this.pokemonManagementService.getPokemons() : this.pokemonManagementService.getPokemonByType();        
      }
    });
  }

}
