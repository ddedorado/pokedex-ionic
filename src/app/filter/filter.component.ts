import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonManagementService } from '../services/pokemon-management.service';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
})
export class FilterComponent {
  @Input('types') types: any;

  constructor(private modalCtrl: ModalController, public pokemonManagementService: PokemonManagementService) {}

  close(event: any, role: string = 'cancel') {
    this.modalCtrl.dismiss(role === 'confirm' ? event.detail.value : null, role);
  }
}