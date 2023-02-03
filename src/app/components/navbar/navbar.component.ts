import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public constructor(public shared: SharedService) { }
/*   public layout: string | null = "";
 */  public mode: string = localStorage.getItem("mode") || "dark";
  public modeIcon: string = localStorage.getItem("mode") || "dark";
  public layout: string = localStorage.getItem("layout") || "grid";
  public layoutIcon: string = localStorage.getItem("layout") || "grid";

  public ngOnInit(): void {
    this.darkMode();
    window.localStorage.setItem("layout", this.layout);
  }


  public darkMode() {
    window.localStorage.setItem("mode", this.mode);
    let cssRoot = document.documentElement;
    if (this.mode == "light") {
      cssRoot.style.setProperty('--navbar-color', '#F5F3F3');
      cssRoot.style.setProperty('--background-color', '#FFFFFF');
      cssRoot.style.setProperty("--text-color", "#272626");
      cssRoot.style.setProperty('--card-background', '#F5F3F3');
      cssRoot.style.setProperty('--invert', 'invert(0%)');
    } else {
      cssRoot.style.setProperty('--navbar-color', '#353641');
      cssRoot.style.setProperty('--background-color', '#444654');
      cssRoot.style.setProperty("--text-color", '#f1f0f0');
      cssRoot.style.setProperty('--card-background', '#353641');
      cssRoot.style.setProperty('--invert', 'invert(90%)');
    }
  }

  public layoutController() {
    let layout = localStorage.getItem("layout");
    if (layout === "grid") {
      this.layoutIcon = "table";
      this.layout = "table";
      localStorage.setItem("layout", "table");
    } else {
      this.layoutIcon = "grid";
      this.layout = "grid";
      localStorage.setItem("layout", "grid");
    }
    this.shared.layout.emit(this.layout);
  }

  public modeController() {
    let mode = localStorage.getItem("mode");
    if (mode === "dark") {
      this.modeIcon = "light";
      this.mode = "light";
      localStorage.setItem("mode", "light");
    } else {
      this.modeIcon = "dark";
      this.mode = "dark";
      localStorage.setItem("mode", "dark");
    }
    this.darkMode();
  }

}

