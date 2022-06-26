import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isModalOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void{
    this.isModalOpened = true;
  }

  closeModal(): void{
    this.isModalOpened = false;
  }

}
