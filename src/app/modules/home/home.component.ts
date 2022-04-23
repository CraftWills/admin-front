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
  }
  closeSidebar(): void {
    if (!this.toggleClicked) {
      (document.getElementById('sidebar') as HTMLElement).classList.add('-translate-x-full');
    }
    this.toggleClicked = false;
  }
}
