import { Component, ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DataService } from 'src/app/services/data.service';
import { ResponsePokemon } from 'src/app/interfaces/response-pokemon';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  public constructor(public cdr: ChangeDetectorRef, public service: DataService, public shared: SharedService) { }

  public favs: any;
  public urlImg: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  public layout: string = localStorage.getItem("layout") || "grid";
  public pokemon: ResponsePokemon | undefined;

  /* Paginator */
  public totalItems: number = 0;
  public pageSize: number = 10;
  public maxIndex: number = 20;
  public minIndex: number = 0;

  public ngOnInit() {
    this.getFavs();
    this.getLayout();
  }

  public getFavs(): void {
    let arrayFavs = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      let key = window.localStorage.key(i);
      if (key && key != "layout" && key != "mode") {
        let pokemon = localStorage.getItem(key.toString())
        if (pokemon) {
          let pokemon2 = JSON.parse(pokemon);
          arrayFavs.push(pokemon2);
        }
      }
    }
    this.favs = arrayFavs.sort((a, b) => a.id - b.id);
    this.totalItems = this.favs.length
  }

  public getLayout(): void {
    this.shared.layout.subscribe(layout => {
      this.layout = layout;
    })
  }

  public getResponsePokemon(id: string): void {
    this.service.getPokemon(id).subscribe(response => {
      this.pokemon = response;
    })
  }

  public onPageChange($event: any) {
    this.minIndex = $event.pageIndex * $event.pageSize;
    this.maxIndex = this.minIndex + $event.pageSize;
  }

}
