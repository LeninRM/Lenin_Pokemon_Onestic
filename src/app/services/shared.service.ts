import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  @Output() layout: EventEmitter<any> = new EventEmitter();

}
