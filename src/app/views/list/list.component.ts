import { Component } from '@angular/core';
import { ResponseList } from 'src/app/interfaces/response-list';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { ResponsePokemon } from 'src/app/interfaces/response-pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public constructor(public service: DataService, public shared: SharedService) { }
  public list: ResponseList | undefined;
  public pokemon: ResponsePokemon | undefined;
  public layout: string | null = localStorage.getItem("layout") || "grid";

  /* Paginator */
  public totalItems: number = 0;
  public pageSize: number = 20;
  public maxIndex: number = 20;
  public minIndex: number = 0;

  public ngOnInit(): void {
    this.shared.paginator.itemsPerPageLabel = "Pokémon per page";
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
    })
  }

  public getResponsePokemon(id: string): void {
    this.service.getPokemon(id).subscribe(response => {
      this.pokemon = response;
    })
  }

  public getIdFromUrl(url: string) {
    let urlParts = url.split('/');
    let id = urlParts[urlParts.length - 2];
    return id;
  }

  public onPageChange($event: any) {
    this.minIndex = $event.pageIndex * $event.pageSize;
    this.maxIndex = this.minIndex + $event.pageSize;
  }

  public manageCarousel(id: any, action: string) {
    if (action == "next") {
      if (id == 10263) {
        id = 1;
      } else {
        id++;
      }
    } else if (action == "back") {
      if (id == 1) {
        id = 10263;
      } else {
        id--;
      }
    }
    this.getResponsePokemon(id.toString());
  }


}
