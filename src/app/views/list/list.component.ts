import { Component, Input, EventEmitter } from '@angular/core';
import { ResponseList } from 'src/app/interfaces/response-list';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public constructor(public service: DataService) { }
  public list: ResponseList | undefined;
  public urlImg: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  public layout: string = "table";

  /* Paginator */
  public totalItems: number = 0;
  public pageSize: number = 20;
  public maxIndex: number = 20;
  public minIndex: number = 0;

  public ngOnInit(): void {

    this.getResponseList();
    console.log(this.getIdFromUrl("https://pokeapi.co/api/v2/pokemon/1/"));
  }



  public getResponseList(): void {
    this.service.getList().subscribe(response => {
      this.list = response;
      this.totalItems = this.list.count
      console.log(this.list);
    })
  }

  public getIdFromUrl(url: string) {
    let urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  }

public onPageChange($event: any){
  console.log($event)
  this.minIndex = $event.pageIndex * $event.pageSize;
  this.maxIndex = this.minIndex + $event.pageSize;
}

}