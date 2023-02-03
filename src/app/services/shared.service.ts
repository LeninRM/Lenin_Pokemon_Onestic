import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public paginator: MatPaginatorIntl) { }

  @Output() layout: EventEmitter<any> = new EventEmitter();

  public urlImg: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  public toMeters(dec: any): number {
    let meters = dec / 10;
    return meters;
  }

  public toKg(dec: any): number {
    let kg = dec / 10;
    return kg;
  }

  public favController(pokemon: any) {
      let isFav = localStorage.getItem(pokemon.id.toString()) !== null;
      if (isFav) {
        window.localStorage.removeItem(pokemon.id.toString());
      } else {
        localStorage.setItem(pokemon.id.toString(), JSON.stringify(pokemon));
      }
    }

  public isFav(key: any): string {
    if (localStorage.getItem(key) !== null) {
      return "../../../assets/img/icons/starfav.png";
    } else {
      return "../../../assets/img/icons/star.png";
    }
  }

}
