import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toggleClicked = false;
  constructor() { }

  ngOnInit(): void {
    this.closeSidebar()
  }
  closeSidebar(): void {
    if (! this.toggleClicked) {
      (document.getElementById('sidebar') as HTMLElement).classList.add('hidden');
      (document.getElementById('sidebar-side-layer') as HTMLElement).classList.add('hidden');
    }
    console.log("yyryryy");
    
    this.toggleClicked = false;
  }

  openSidebar(){
    if (!this.toggleClicked) {
      (document.getElementById('sidebar') as HTMLElement).classList.remove('hidden');
      (document.getElementById('sidebar-side-layer') as HTMLElement).classList.remove('hidden');
    }
    console.log("yyryryy");
    
    this.toggleClicked = true;
  }
}
