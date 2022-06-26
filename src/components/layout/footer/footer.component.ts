import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isModalOpened = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openModal(): void{
    this.isModalOpened = true;
  }

  closeModal(): void{
    this.isModalOpened = false;
  }

  navigateToHome(): void{
    this.router.navigate(['/']);
  }

}
