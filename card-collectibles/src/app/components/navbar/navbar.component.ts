import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  generateRandomId() {
    let id = Math.round(Math.random() * 100)
    this.router.navigate([`/card`, id]);
  }

  ngOnInit(): void {
  }

}
