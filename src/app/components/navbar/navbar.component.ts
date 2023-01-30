import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public constructor(public shared: SharedService) { }
  public layout: string = "table";

  public layoutSwitcher(layout: string) {
    this.layout = layout;
    this.shared.layout.emit(layout);
  }
}
