import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public constructor(public shared: SharedService) { }
  public layout: string | null = "";
  public mode: string = localStorage.getItem("mode") || "dark";
  public modeIcon: string = localStorage.getItem("mode") || "dark";

  public ngOnInit(): void {
    this.darkMode();
  }

  public layoutSwitcher(layout: string) {
    window.localStorage.setItem("layout", layout);
    this.layout = window.localStorage.getItem("layout");
    this.shared.layout.emit(this.layout);
  }

  public darkMode() {
    window.localStorage.setItem("mode", this.mode);
    let cssRoot = document.documentElement;
    if (this.mode == "light") {
      cssRoot.style.setProperty('--navbar-color', '#F5F3F3 ');
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

