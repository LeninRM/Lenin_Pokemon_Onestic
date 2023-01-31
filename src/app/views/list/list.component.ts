import { Component, Input, EventEmitter } from '@angular/core';
import { ResponseList } from 'src/app/interfaces/response-list';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ResponsePokemon } from 'src/app/interfaces/response-pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public constructor(public service: DataService, public shared: SharedService, public paginator: MatPaginatorIntl) { }
  public list: ResponseList | undefined;
  public pokemon: ResponsePokemon | undefined;
  public urlImg: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  public layout: string = "grid";

  /* Paginator */
  public totalItems: number = 0;
  public pageSize: number = 20;
  public maxIndex: number = 20;
  public minIndex: number = 0;

  public ngOnInit(): void {
    this.paginator.itemsPerPageLabel = "Pokémon per page";
    this.getLayout();
    this.getResponseList();
  }

  public getLayout(): void {
    this.shared.layout.subscribe(layout => {
      this.layout = layout;
    })
  }

  public getResponseList(): void {
    this.service.getList().subscribe(response => {
      this.list = response;
      this.totalItems = this.list.count
/*       console.log(this.list);
 */    })
  }

  public getResponsePokemon(id: string): void {
    this.service.getPokemon(id).subscribe(response => {
      this.pokemon = response;
      console.log(this.pokemon);
    })
  }

  public getIdFromUrl(url: string) {
    let urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  }

  public onPageChange($event: any) {
    console.log($event)
    this.minIndex = $event.pageIndex * $event.pageSize;
    this.maxIndex = this.minIndex + $event.pageSize;
  }

}