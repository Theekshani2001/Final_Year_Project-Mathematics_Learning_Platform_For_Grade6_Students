import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isDropdownOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  viewProfile() {
    console.log('View Profile clicked');
    // Add your logic to navigate to the profile page
  }

  logout() {
    console.log('Logout clicked');
    // Add your logic to handle logout
  }

}
