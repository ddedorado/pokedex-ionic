import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take, takeUntil } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonDataService } from './pokemon-data.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonManagementService implements OnDestroy {
  public pokemons$: Observable<Pokemon[]>;
  private _pokemons: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);

  public types$: Observable<any>;
  private _types: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  private destroy$: Subject<void> = new Subject<void>();
  
  public typeSelected: string;
  public close: boolean;

  constructor(private pokemonDataService: PokemonDataService) {
    this.pokemons$ = this._pokemons.asObservable();
    this.types$ = this._types.asObservable();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get pokemons() {
    return this._pokemons.getValue();
  }

  set pokemons(pokemons: Pokemon[]) {
    this._pokemons.next(pokemons);
  }

  get types() {
    return this._types.getValue();
  }

  set types(types: []) {
    this._types.next(types);
  }

  public getPokemons(): void {
    this.pokemonDataService.getPokemons().pipe(
      take(1),
      takeUntil(this.destroy$)
    ).subscribe(
        res => {
          this.pokemons = res.results;
        }
      );
  }

  public getPokemonByName(namePokemon: string): Observable<Pokemon> {
    return this.pokemonDataService.getPokemonByName(namePokemon);
  }

  public getTypes(): void{
    this.pokemonDataService.getTypes().pipe(
      take(1),
      takeUntil(this.destroy$)
    ).subscribe(
        res => {
          this.types = res.results;
        }
      );
  }

  public getPokemonByType() {
    this.pokemonDataService.getPokemonByType(this.typeSelected).pipe(
      take(1),
      takeUntil(this.destroy$)
    ).subscribe(
        (res: any) => {
          const pokemons = res.pokemon.map((item:any) => item.pokemon);
          this._pokemons.next([...pokemons]);
        }
      );
  }
}
