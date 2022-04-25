import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public router : Router) { }

  @Output() toggleSidebarEvent = new EventEmitter(false);

  ngOnInit(): void {
  }

  toggleSidebarmenu(): void {
    this.toggleSidebarEvent.emit(true);
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
