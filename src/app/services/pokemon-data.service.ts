import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/pokemon?limit=1279`);
  }

  public getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.apiUrl}/pokemon/${name}`);
  }

  public getTypes(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/type`);
  }

  public getPokemonByType(type: string) {
    return this.http.get<any>(`${environment.apiUrl}/type/${type}`);
  }
}
