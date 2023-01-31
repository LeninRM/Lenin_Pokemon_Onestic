import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseList } from '../interfaces/response-list';
import { ResponsePokemon } from '../interfaces/response-pokemon';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { };

  public urlList: string = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';/* ?limit=100000&offset=0 */
  public urlPokemon: string  = ' https://pokeapi.co/api/v2/pokemon/';

  public getList(): Observable<ResponseList>{
    return this.http.get<ResponseList>(this.urlList)
  }

  public getPokemon(name: string): Observable<ResponsePokemon>{
    return this.http.get<ResponsePokemon>(this.urlPokemon + name)
  }
}

