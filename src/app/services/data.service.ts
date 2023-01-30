import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseList } from '../interfaces/response-list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { };

  public urlList: string = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';/* ?limit=100000&offset=0 */

  public getList(): Observable<ResponseList>{
    return this.http.get<ResponseList>(this.urlList)
  }
}
